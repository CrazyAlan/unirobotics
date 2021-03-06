import React from 'react';
import { Component } from 'react';
import Header  from './header/header';
import Promotions  from './promotions/promotions';
import About from './about/about';
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
  }

  
  render() {
    return (
    	<div>
	    	<Header />
	    	<Promotions />
            <About />
	    	<Teachers />
	        <OurNumber />	
	    	<Gallery />
	    	<Footer />
	    </div>
    );
  }
}

export default connect(null, { fetchData })(Main);

