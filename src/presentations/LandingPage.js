import React from 'react';
import {Header} from './header';
import {CarsList} from './carsList';
import Loading from './loading';

export const LandingPage = ({cars,sortBy,...props}) =>{
	let waitMesssage={
		fontFamily:'Roboto',
		color:'#474143',
		letterSpacing : '0.1rem',
		textAlign:'center',
		margin:'0',
		marginTop:'1rem'
	};
	if(typeof cars === 'undefined'){
		return <div>
			<Loading />
			<h3 style={waitMesssage}>Please try after 5 minutes. You have exceeded the number of API calls that can be made to Fake Db</h3>;
		</div>;
	}
	return <div>
		<Header onClick={sortBy}/>
		<CarsList list={cars}/>
	</div>;
};
