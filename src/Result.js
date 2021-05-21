import React from 'react';

class Result extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
        };
    }

    // async fetch call to API when component mounts, storing sunrise & sunset times in state
    componentDidMount() {
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
                    error,
                    isLoaded: true,
                })
            }
        )
    }

    render() {
        if (this.state.error) {
            return <div className='container'>Error: {this.state.error.message}</div>
        } else if (!this.state.isLoaded) {
            return <div className='container'>Loading...</div>
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
                </div>
            )
        }
    }
}

export default Result