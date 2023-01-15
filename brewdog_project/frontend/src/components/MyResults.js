import React, { Component } from 'react';

export default class MyResults extends Component {
    constructor(props) {
        super(props);
        this.state = {
            results: null
        }
    }
    retrieveResults = () => {
        fetch('brewdog/secondcalculator')
        .then(response => response.json())
        .then(data => {
            this.setState({
                results: data
            })
        })
    }
    
    render() {
        return (
        <div>
            <h1>My Results</h1>
            {this.state.results ? this.state.results.map(result => {
                <li>
                    {result.MainsGas}
                    {result.Fuel}
                    {result.Oil}
                    {result.Coal}
                    {result.Wood}
                    {result.GridElectricity}
                    {result.Electricity}
                    {result.WFLandfill}
                    {result.WFReuse}
                    {result.WFCharity}
                    {result.BottleRecycling}
                    {result.AluminiumRecycling}
                    {result.GWLandfill}
                    {result.GWRecycling}
                    {result.SpecialWaste}
                </li>
            }) : null
            }

        </div>
        );
    }
}

