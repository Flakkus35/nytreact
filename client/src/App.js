import React, { Component } from 'react';
import { BroswerRouter as Router, Route, Switch } from "react-router-dom";
import Nav from "./components/Nav";
import Search from "./pages/Search";
import Results from "./pages/Results";
import Saved from "./pages/Saved";

const App = () => {
    return (
    	<div>
    		<Nav />
	    	<Switch>	
	    		<Route exact path="/" component={Search} />
	    		<Route exact path="/results" component={Results} />
	    		<Route exact path="/saved" component={Saved} />    		
    		</Switch>
    	</div>
    );
}

export default App;
