import React from 'react';
import Input from './Input'
import Result from './Result'

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            queries: [],
        }
        this.handleInput = this.handleInput.bind(this)
    }

    // function binds to Input component, receives and stores data pairs in state
    handleInput = (lat, long) => {
        this.setState({
            queries: [...this.state.queries, {'lat': lat, 'long': long}],
        })
    }

    render() {
        if (this.state.queries.length < 5) {
            return <Input number={this.state.queries.length + 1} sendQuery={this.handleInput}/>
        } else {
            return this.state.queries.map((query, index) => {
                return <Result key={index} number={index} lat={query.lat} long={query.long}/>
            })
        }
    }
}

export default App;
