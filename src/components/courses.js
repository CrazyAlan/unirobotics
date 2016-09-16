import React from 'react';
import { Component } from 'react';
import Header  from './header/header';
import Courses  from './courses/courses';
import Footer from './footer/footer';

import { connect } from 'react-redux';
import { fetchData } from '../actions/index';

class CoursePage extends Component {
	componentWillMount() {
	    this.props.fetchData();
	  }

	render() {
		return (
			<div> 
				<Header />
		    	<Courses />
	    		<Footer />
			</div>
		)
	}
}


export default connect(null, {fetchData})(CoursePage);

