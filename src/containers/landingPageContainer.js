import React from 'react';
import {LandingPage} from '../presentations/landingPage';
import store from '../store/store';
import {connect} from 'react-redux';

let mapStateToProps = function(store){
	return {
		cars: store.cars,
	};
};
class LandingPageContainer extends React.Component{

	componentDidMount(){

	}

	render(){
		console.log(this.props);
		return <LandingPage cars={this.props.cars}/>;
	}
}

export default connect(mapStateToProps)(LandingPageContainer);
