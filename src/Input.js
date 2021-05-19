import React from 'react';

class Input extends React.Component {
    constructor(props) {
        super(props)
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        const lat = parseFloat(e.target.lat.value)
        const long = parseFloat(e.target.long.value)
        const validLat = lat >= -90 && lat <= 90 ? lat : "Invalid latitude";
        const validLong = long >= -180 && long <= 180 ? long : "Invalid longitude";
        e.target.lat.value = '';
        e.target.long.value = '';
        this.props.sendQuery(validLat, validLong);
    }

    render() {
        return (
            <div className='container input'>
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