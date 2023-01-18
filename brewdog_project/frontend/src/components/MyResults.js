import React, { Component } from 'react';
import axios from 'axios';

export default class MyResults extends Component {
    constructor(props) {
        super(props);
        this.state = {
            results: null
        }
    }
    componentDidMount() {
      axios.get('/brewdog/calculator/')
        .then(res => {
          this.setState({results: res.data});
        })
    }
    
    render() {
        return (
        <div>
            <h1>My Results</h1>
            {this.state.results ? this.state.results.map(result => {
                <li>{result.data_name} : {result.data_value}</li>
            }) : <div>Loading...</div>
            }

        </div>
        );
    }
}
