import React from 'react';
import { Component } from 'react';
import Header  from './header/header';
import Promotions  from './promotions/promotions';
import Courses  from './courses/courses';
import OurNumbers from './our_numbers/our_numbers';
import Gallery from './gallery/gallery';
import Teachers from './teachers/teachers';
import Offers from './offers/offers';
import Footer from './footer/footer';
import OurNumber from './our_numbers/our_numbers';
import { connect } from 'react-redux';
import { fetchData } from '../actions/index';

class Main extends Component {
  
  componentWillMount() {
    this.props.fetchData();
    //console.log($.fn);
  }

  render() {
    return (
    	<div>
	    	<Header />
	    	<Promotions />

	    	<Gallery />
	    	<Teachers />
	    	<Offers />
	        <OurNumber />	
	    	<Footer />
	    </div>
    );
  }
}

export default connect(null, { fetchData })(Main);

