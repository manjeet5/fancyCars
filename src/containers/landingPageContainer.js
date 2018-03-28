import React from 'react';
import {LandingPage} from '../presentations/landingPage';
import store from '../store/store';
import {connect} from 'react-redux';
import {loadCars} from '../store/loadCarsActionCreator';
//src/containers/landingPageContainer.js
//src/store/loadCarsActionCreator.js
let mapStateToProps = function(store){
	return {
		cars: store.cars,
	};
};
class LandingPageContainer extends React.Component{
 state={}

 componentDidMount(){
 	store.dispatch(loadCars());
 }

 render(){
	 	console.log('this.props');
 	console.log(this.props);
 	console.log(this.state);
 	return <LandingPage cars={this.props.cars} greeting={this.state.greeting}/>;
 }
}

export default connect(mapStateToProps)(LandingPageContainer);
