import React from 'react';
import { Component } from 'react';
import Header  from './header/header';
import About  from './about/about';
import Footer from './footer/footer';
import Partners from './partners/partners';
import Contact from './contact/contact';

import { connect } from 'react-redux';
import { fetchData } from '../actions/index';

class ContactPage extends Component {
	componentWillMount() {
	    this.props.fetchData();
	  }

	render() {
		return (
			<div> 
				<Header />
	    		<About />
	    		<Partners />
	    		<Contact />
	    		<Footer />
			</div>
		)
	}
}


export default connect(null, {fetchData})(ContactPage);

