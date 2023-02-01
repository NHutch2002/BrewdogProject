import React, { Component } from "react";
import Banner from "../../static/images/tree.jpeg";
import FoodAtPub from "../../static/images/food_at_pub.png";
import "../../static/css/base.css";
import "../../static/css/home.css";

export default class HomePage extends Component { 
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="container-fluid" >
                    
                <div className="landing_pic_container">
                    <img className="landing_pic" src={Banner} alt="Brewdog Banner"/>
                    <div className="landing_title_container">
                        <h1 className="landing_heading" >Planet First<br />Locals</h1>
                        <h2 className="landing_subheading"><a id="landing_blue_accent">How low can you go?</a></h2>
                    </div>
                </div>
                
                <div className="text_div">
                    <h2 className="text_heading">Heading</h2>
                    <p className="text">This programme supports our clients to cut
                    in cutting their carbon, by understanding their business emissions, including 
                    their supply chains, and setting and achieving ambitious carbon reduction 
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
                    <img className="text_pic" id="pic_food_at_pub" src={FoodAtPub} alt="Picture of some food at a Brewdog pub"/>
                </div>

                <hr />
                
            </div>
        );   
    }
}
