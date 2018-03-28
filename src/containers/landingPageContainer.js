import React from 'react';
import {LandingPage} from '../presentations/landingPage';
import store from '../store/store';
import {connect} from 'react-redux';
import {loadCars} from '../store/loadCarsActionCreator';
import {sortBy} from '../store/sortReducerActionCreator';
let mapStateToProps = function(store){
	return {
		cars: store.cars,
		sortBy: store.sort
	};
};
class LandingPageContainer extends React.Component{
 state={}

 componentDidMount(){
 	store.dispatch(loadCars());
 }
 sortBy = (eventId)=>{
	 store.dispatch(sortBy(eventId));
 }

 sortByName = ()=>{
	 return this.props.cars.sort((a,b)=>{
		 if(a.id > b.id) return 1;
	 });
 }

 sortByAvailable = () =>{

	 let result =  this.props.cars.filter(element =>{
		 return (typeof element.available !== 'undefined' && element.available == 'In Dealership');
	 });
 	return result;
 }

 render(){
	 return <LandingPage
 		sortBy={this.sortBy}
 		cars={this.props.sortBy === 'name'? this.sortByName(this.props.cars)
 			:this.props.sortBy === 'available'? this.sortByAvailable(this.props.car):
 				this.props.cars} greeting={this.state.greeting}/>;
 }
}

export default connect(mapStateToProps)(LandingPageContainer);
