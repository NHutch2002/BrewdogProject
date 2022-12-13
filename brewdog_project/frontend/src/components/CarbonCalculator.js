import React, { Component } from "react";

export default class CarbonCalculator extends Component {
    constructor(props) {
        super(props);
    }

    style = theme => ({
        toolbar: theme.mixins.toolbar,
    });

    form() {
        return (
            <div style={{marginTop: "125px"}}>
                <div className={this.style.toolbar} />
                <div>
                    <h1>Carbon Footprint Calculator</h1>
                </div>
                <div>
                    <form action="http://127.0.0.1:8000" method="POST" credentials="include">
                    <input type="hidden" name="csrfmiddlewaretoken" value="csrftoken"/>
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
                    <input type="submit" value="Submit" onClick={this.onSubmit}/>
                    </form>   
                </div>
            </div>
        );
    }

    // onSubmit = (e) => {
    //     e.preventDefault();
    //     console.log("Submitted");
    //     //fetch the data from the form
    //     const data = new FormData(e.target);
    //     //send the data to the backend
    //     fetch('http://', {
    //         method: 'POST',
    //         body: data,
    //     })
    //     .then(response => response.json())
    //     .then(data => {
    //         console.log('Success:', data);
    //     })
    //     .catch((error) => {
    //         console.error('Error:', error);
    //     });
    //     //run the calculations
    //     //return the results
    //     data.forEach((value, key) => {
            
    //     });
    // }
    
    render() {
        return (
            <div>
                {this.form()}
            </div>
        );
    }
}