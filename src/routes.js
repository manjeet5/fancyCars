import { Route } from 'react-router-dom';
import React from 'react';
import LandingPageContainer from './containers/landingPageContainer.js';


const Routes = () =>{
	return <div>
		<Route exact path="/" component={LandingPageContainer}/>
	</div>;
};

export default Routes;
