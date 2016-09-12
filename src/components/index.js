import React from 'react';
import { Component } from 'react';
import Header  from './header/header';
import Promotions  from './promotions/promotions';
import About  from './about/about';
import Courses  from './courses/courses';
import OurNumbers from './our_numbers/our_numbers';
import Gallery from './gallery/gallery';
import Teachers from './teachers/teachers';
import Offers from './offers/offers';
import Patterns from './patterns/patterns';
import Contact from './contact/contact';
import Footer from './footer/footer';

export default class Main extends Component {
  render() {
    return (
    	<div>
	    	<Header />
	    	<Promotions />
	    	<About />
	    	<Courses />
	    	<OurNumbers />
	    	<Gallery />
	    	<Teachers />
	    	<Offers />
	    	<Patterns />
	    	<Contact />
	    	<Footer />
	    </div>
    );
  }
}
