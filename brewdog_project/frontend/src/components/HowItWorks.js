import React, { Component } from "react";
import "../../static/css/base.css";
import "../../static/css/howitworks.css";
import HowItWorks1 from "../../static/images/howitworks1.png"

export default class HowItWorks extends Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        return (
            <div className="container-fluid bodycontent"  >
                <div className="row">
                    <div className="textDiv">
                        <div className="titleDiv">
                            <h2 className="how-it-works title">Stage 1</h2>
                        </div>
                        <img className="how-it-works image" src={HowItWorks1} alt="Handshake Image"></img>
                        <p className="text">
                        Make a commitment with your management and staff to go for it.
                        Gaining the support of your staff team is the most important 
                        part of building a culture of change. Ensure there is
                         sufficient time allocated to complete the tool.
                        </p>
                        <div className="titleDiv">
                            <h2 className="how-it-works title">Stage 2</h2>
                        </div>
                        <p className="text2">
                        Work through the ‘How it Works’ section and gather the relevant
                        data.<br></br>The Footprint Calculator requires annual data on 
                        amounts of utilities, resources and food - either in kg, litres
                        etc. or by cost (£).</p>
                        <div className="titleDiv">
                            <h2 className="how-it-works title">Stage 3</h2>
                        </div>
                        <p className="text">
                        Complete the Footprint Calculator, working through the guidance in the supporting notes and in cells.
                        </p>
                        <div className="titleDiv">
                            <h2 className="how-it-works title">Stage 4</h2>
                        </div>
                        <p className="text2">
                        The ‘Your Pledges’ tool then allows you to try lots of carbon cutting options and see how they impact your emissions.<br></br>
                        With knowledge of where your footprint comes from, make ‘Pledges’ that are both specific and measurable, and identify what you should do first, and what might be more challenging.</p>
                        <div className="titleDiv">
                            <h2 className="how-it-works title">Stage 5</h2>
                        </div>
                        <p className="text">
                        The ‘Action Plan’ sets out a simple template for delivering the pledges, deciding who is responsible for delivering the Action, likely start and finish dates, a summary of what needs to get done, and importantly what is going to change and by how much.<br></br>
                        The action plan can help engage with staff and customers.
                        </p>
                        </div>
                </div>
            </div>
        );   
    }
}