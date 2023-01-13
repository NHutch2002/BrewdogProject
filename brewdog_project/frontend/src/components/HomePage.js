import React, { Component } from "react";
import Banner from "../../static/images/brewdog_banner.png";
import "../../static/css/home.css";

export default class HomePage extends Component { 
    constructor(props) {
        super(props);
    }
    
    style = theme => ({
        toolbar: theme.mixins.toolbar,
    });

    render() {
        return (
            //USING INLINE CSS, NOT IDEAL, FIX THIS ASAP!! (note to self)
            //FOR THE FONT WE NEED TO FIX CSS IMPORTS
            <div>
                <img src={Banner} alt="Brewdog Banner" style={{align:"center", width:"100%"}}/>
                <h1 align="center" >Planet First Locals</h1>
                <p style={{align:"left", font:"ariel"}}>This programme is designed to support our clients
                 in cutting their carbon, by understanding their 
                 business emissions, including their supply chains, 
                 and setting and achieving ambitious carbon reduction 
                 targets.<br></br><br></br>
                 Our aim is to build a network of dynamic and 
                proactive bar and restaurant innovators that are 
                committed to going as low carbon as they can, and 
                then some.<br></br><br></br>
                Real innovation happens when individuals get 
                inspired to look beyond business as usual and 
                commit to doing things differently. Here at BrewDog, 
                we have totally embraced the need to be a business that 
                is future-ready and supportive of those who are ready to 
                join us.</p>
            </div>
        );   
    }
}