import React from 'react';

class Result extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
        };
    }

    componentDidMount() {
        if (this.props.lat !== 'Invalid latitude' && this.props.long !== 'Invalid longitude') {
            fetch('https://api.sunrise-sunset.org/json?lat=' + this.props.lat + '&lng=' + this.props.long)
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        sunrise: result.results.sunrise,
                        sunset: result.results.sunset,
                        isLoaded: true,
                    })
                },
                (error) => {
                    this.setState({
                        error: error,
                        isLoaded: true,
                    })
                }
            )
        } else {
            this.setState({isLoaded: true})
        }
    }

    render() {
        if (this.state.error) {
            return <div>Error: {this.state.error.message}</div>
        } else if (!this.state.isLoaded) {
            return <div>Loading...</div>
        } else {
            return (
                <div className='container result'>
                    <h2>Location #{this.props.number + 1}</h2>
                    <ul>
                        <li>Latitude: {this.props.lat}</li>
                        <li>Longitude: {this.props.long}</li>
                        <li>Sunrise: {this.state.sunrise ? this.state.sunrise + ' (UTC)' : "Not found"}</li>
                        <li>Sunset: {this.state.sunset ? this.state.sunset + ' (UTC)' : 'Not found'}</li>
                    </ul>
                    <small>Data from <a href='https://sunrise-sunset.org/api' target="_blank" rel="noreferrer">Sunrise-Sunset API</a></small>
                </div>
            )
        }
    }
}

export default Result