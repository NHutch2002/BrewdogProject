import { AppBar, Toolbar, IconButton, Button, Grid, Menu, MenuItem } from "@material-ui/core";
import React from "react";
import brewdogLogo from "../../static/images/brewdog_logo.png";
import { VscAccount } from "react-icons/vsc";
import { HiCalculator } from "react-icons/hi";


export default function NavBar() {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [anchorEl2, setAnchorEl2] = React.useState(null);

    function handleClick(event) {
        if (anchorEl !== event.currentTarget) { setAnchorEl(event.currentTarget);}
    }
    function handleClose() { setAnchorEl(null); }

    function handleLoginClick() {
        setAnchorEl(null);
        window.location.href = "/login";
    }

    function handleSignUpClick() {
        setAnchorEl(null);
        window.location.href = "/signup";
    }

    function handleLogOutClick() {
        setAnchorEl(null);
        localStorage.removeItem("token");
        window.location.href = "/";
    }

    function handleMyAccountClick() {
        setAnchorEl(null);
        window.location.href = "/myaccount";
    }

    function handleCarbonCalculatorClick() {
        setAnchorEl2(null);
        window.location.href = "/carboncalculator";
    }

    function handleMyResultsClick() {
        setAnchorEl2(null);
        window.location.href = "/myresults";
    }

    const humanMenuStyling = {
        position: "fixed",
        top: "50px",
        height: "220px",
    };

    function isAuth(){
        if(localStorage.token){ return true; }
        else { return false; }
    }

    return (
        <Grid container spacing={1}>
            <AppBar style={{backgroundColor: "#FFFFFF"}}>
            <Toolbar>
                <Grid item xs={2} align="left">
                    <Button  href="/howitworks">How It Works</Button>
                </Grid>
                <Grid item xs={2} align="left">
                    <Button  href="/blog">Blog</Button> 
                </Grid>
                <Grid item xs={9} align="center">
                    <IconButton edge="start" color="inherit" aria-label="logo">
                        <a href="/"><img src={brewdogLogo} alt="Brewdog Logo" height="75" width="75"/></a>
                    </IconButton>
                </Grid>
                <Grid item xs={2} align="right">
                    <IconButton 
                    edge="start" color="inherit" aria-label="calculator"
                    aria-owns={anchorEl ? "simple-menu" : undefined}
                    aria-haspopup="true"
                    onClick={ handleCarbonCalculatorClick }
                    >
                        <HiCalculator
                        color="black"
                        size="60px"
                        />                    
                    </IconButton>
                </Grid>
                <Grid item xs ={2} align="right">
                    <IconButton color="inherit" aria-label="human"
                    aria-owns={anchorEl ? "simple-menu" : undefined}
                    aria-haspopup="true"
                    onClick={handleClick}
                    onMouseOver={handleClick}
                    >
                        <VscAccount
                        color="black"
                        size="50px"
                        />
                    </IconButton>
                    <Menu
                    style={humanMenuStyling}
                    id="simple-menu"
                    anchorEl={anchorEl}
                    open={Boolean(anchorEl)}
                    onClose={handleClose}
                    MenuListProps={{ onMouseLeave: handleClose }}
                    >
                    {
                        isAuth() ?
                         (<><MenuItem onClick={handleMyAccountClick}>My Account</MenuItem>
                         <MenuItem onClick={handleMyResultsClick}>My Results</MenuItem>
                            <MenuItem onClick={handleLogOutClick}>Log Out</MenuItem></>)
                        : ( <><MenuItem onClick={handleLoginClick}>Login</MenuItem>
                            <MenuItem onClick={handleSignUpClick}>Sign Up</MenuItem></> )
                    }
                    </Menu>
                </Grid>
            </Toolbar>
            </AppBar>
            <div style={{marginTop: "125px"}}></div>
        </Grid>
        
    );
}