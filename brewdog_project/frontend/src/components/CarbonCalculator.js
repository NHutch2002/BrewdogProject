import React, { Component } from "react";

export default class CarbonCalculator extends Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        return(
            <div>
                <div>
                    <h1>Carbon Footprint Calculator</h1>
                </div>
                <div>
                    <form>
                    <div>
                        <h2>Energy Consumed</h2>
                        <div>
                            <h4>Heating and Other Fuel Use</h4>
                            <label>Mains Gas:</label>
                            <input type="number"/><br/>
                            <label>Fuel (Diesel):</label>
                            <input type="number"/><br/>
                            <label>Oil:</label>
                            <input type="number"/><br/>
                            <label>Coal:</label>
                            <input type="number"/><br/>
                            <label>Wood:</label>
                            <input type="number"/><br/>
                            <label>Grid Electricity:</label>
                            <input type="number"/><br/>
                            <label>Electricity (Low Carbon Supplier):</label>
                            <input type="number"/><br/>
                        </div>

                        <div>
                            <h4>Food Waste</h4>
                            <label>Waste Food to Landfill:</label>
                            <input type="number"/><br/>
                            <label>Waste Food to Reuse/Composting:</label>
                            <input type="number"/><br/>
                            <label>Waste Food to Charity:</label>
                            <input type="number"/><br/>
                        </div>
                        <div>
                            <h4>Solid Waste</h4>
                            <label>Bottles Recycling:</label>
                            <input type="number"/><br/>
                            <label>Aluminium Cans Recycling:</label>
                            <input type="number"/><br/>
                            <label>General Waste to Landfill:</label>
                            <input type="number"/><br/>
                            <label>General Waste to Recylcing:</label>
                            <input type="number"/><br/>
                            <label>Special Waste:</label>
                            <input type="number"/><br/>
                        </div>
                        
                    </div>
                    <input type="submit"/>
                    </form>   
                </div>

            </div>            

             );
    }
}