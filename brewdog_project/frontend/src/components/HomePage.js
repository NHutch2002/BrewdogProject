import React, { Component } from "react";
import Landing from "../../static/images/tree.jpeg";
import FoodAtPub from "../../static/images/food_at_pub.png";
import Roadmap from "../../static/images/roadmap.png";
import Calculator from "../../static/images/calculator_image.jpg";
import "../../static/css/base.css";
import "../../static/css/home.css";

const HomePage = () => { 

    return (
        <div className="container-fluid" >
                
            <div className="landing_pic_container">
                <img className="landing_pic" src={Landing} alt="Brewdog Banner"/>
                <div className="landing_title_container">
                    <h1 className="home_title heading" >Planet First<br />Locals</h1>
                    <h2 className="subheading"><a id="landing_blue_accent">How low can you go?</a></h2>
                </div>
            </div>
            
            <div className="text_div">
                <div id="intro_text">
                    <h2 className="text_heading">Planet First Locals</h2>
                    <p className="text">This programme supports our clients
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
                </div>
                <img className="text_pic" id="pic_food_at_pub" src={FoodAtPub} alt="Picture of some food at a Brewdog pub"/>
            </div>

            <div className="text_div">
                <div id="other_text">
                    <h2 className="text_heading" id="heading_right_adjusted">Take the Pledge</h2>
                    <p className="text">With support from Small World Consulting, we will estimate your Scope 1, 2 and 3 footprint (to learn more about Scope 1, 2 and 3 see next tab)</p>
                    <p className="text">Take the Planet First Locals pledge to reduce emissions by at least 15% of the next 12 months (in line with 1.5°C Paris target)</p>
                    <p className="text">The entire carbon footprint remaining is then removed by Brewdog through Lost Forest and Dark Forest projects</p>
                
                </div>
                <img className="text_pic" id="pic_other" src={Roadmap} alt="Picture of an ecological roadmap"/>
            </div>

            <div className="calculator_div">
                <div id="calculator_text">
                    <h2 className="text_heading">Footprint Calculator</h2>
                    <p className="text">This programme helps our clients to reduce their carbon emissions,
                    by understanding their business emissions and supply chain emissions. <br></br><br></br>
                    Our aim is to build a network of dynamic and proactive bar and restaurant innovators that 
                    are committed to going as low carbon as they can, and then some.
                    <br></br><br></br>
                    Real innovation happens when individuals get 
                    inspired to look beyond business as usual and 
                    commit to doing things differently. Here at BrewDog, 
                    we have totally embraced the need to be a business that 
                    is future-ready and supportive of those who are ready to 
                    join us.</p>
                    <form action="/carboncalculator">
                        <button type="click" data-testid="launch_button" value="&#9654; Launch">&#9654; Get Started</button>
                    </form>
                </div>
                <img className="text_pic" id="pic_calculator" src={Calculator} alt="Picture of a person using a calculator"/>
            </div>
            <br /><br />


        </div>
    );   
}

export default HomePage;