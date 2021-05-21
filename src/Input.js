import React from 'react';

class Input extends React.Component {
    constructor(props) {
        super(props)
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    // submit function to validate inputs and store latitude longitude pair
    handleSubmit(e) {
        e.preventDefault();

        // store user entry values, confirm they are numbers and in the proper range
        const lat = parseFloat(e.target.lat.value)
        const long = parseFloat(e.target.long.value)
        const validLat = lat >= -90 && lat <= 90
        const validLong = long >= -180 && long <= 180

        // handle invalid latitude value
        if (!validLat) {
            e.target.lat.value = '';
            e.target.lat.placeholder = 'Invalid latitude, please retry';
        }

        // handle invalid longitude value
        if (!validLong) {
            e.target.long.value = '';
            e.target.long.placeholder = 'Invalid longitude, please retry';
        } 
        
        // handle valid latitude longitude pair
        if (validLat && validLong) {
            // reset form fields and placeholder text
            e.target.lat.value = '';
            e.target.lat.placeholder = 'Enter Latitude';
            e.target.long.value = '';
            e.target.long.placeholder = 'Enter Longitude';

            // send valid latitude longitude pairs to main App component
            this.props.sendQuery(lat, long);
        }
    }

    render() {
        return (
            <div className='container input'>
                <h2>Location #{this.props.number}</h2>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" name='lat' placeholder='Enter Latitude'></input>
                    <input type="text" name='long' placeholder='Enter Longitude'></input>
                    <button type="submit">Next</button>
                </form>
            </div>
        )
    }
}

export default Input