import React, { Component } from "react";

export default class CarbonCalculator extends Component {
    constructor(props) {
        super(props);
    }
    //create a function that stores all the html elements for the carbon calculator form
    form() {
        return (
            <div>
                <a href="/">Home</a>
                <div>
                    <h1>Carbon Footprint Calculator</h1>
                </div>
                <div>
                    <form method="post">
                    <div>
                        <h2>Energy Consumed</h2>
                        <div>
                            <h4>Heating and Other Fuel Use</h4>
                            <label>Mains Gas:</label>
                            <input type="number" name="MainsGas"/><br/>
                            <label>Fuel (Diesel):</label>
                            <input type="number" name="Fuel"/><br/>
                            <label>Oil:</label>
                            <input type="number" name="Oil"/><br/>
                            <label>Coal:</label>
                            <input type="number" name="Coal"/><br/>
                            <label>Wood:</label>
                            <input type="number" name="Wood"/><br/>
                            <label>Grid Electricity:</label>
                            <input type="number" name="GridElectricity"/><br/>
                            <label>Electricity (Low Carbon Supplier):</label>
                            <input type="number" name="Electricity"/><br/>
                        </div>

                        <div>
                            <h4>Food Waste</h4>
                            <label>Waste Food to Landfill:</label>
                            <input type="number" name="WFLandfill"/><br/>
                            <label>Waste Food to Reuse/Composting:</label>
                            <input type="number" name="WFReuse"/><br/>
                            <label>Waste Food to Charity:</label>
                            <input type="number" name="WFCharity"/><br/>
                        </div>
                        <div>
                            <h4>Solid Waste</h4>
                            <label>Bottles Recycling:</label>
                            <input type="number" name="Bottles Recylcing"/><br/>
                            <label>Aluminium Cans Recycling:</label>
                            <input type="number" name="Aluminium Recycling"/><br/>
                            <label>General Waste to Landfill:</label>
                            <input type="number" name="GWLandfill"/><br/>
                            <label>General Waste to Recylcing:</label>
                            <input type="number" name="GWRecylcing"/><br/>
                            <label>Special Waste:</label>
                            <input type="number" name="Special Waste"/><br/>
                        </div>
                        
                    </div>
                    <input type="submit"/>
                    </form>   
                </div>
            </div>
        );
    }

    
    render() {
        return (
            <div>
                {this.form()}
            </div>
        );
    }
}