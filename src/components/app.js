import React from 'react';
import { Component } from 'react';
import loadJS from 'load-js';

export default class App extends Component {
  componentDidUpdate() {

	loadJS("../../assets/js/plugins/cube-portfolio.js")
    .then(function() {
      console.log("jQuery is loaded");
      window.App.init();
		window.App.initCounter();
		window.Owl2Carouselv1.initOwl2Carouselv1();
		window.Owl2Carouselv2.initOwl2Carouselv2();
		window.Owl2Carouselv3.initOwl2Carouselv3();
		window.Owl2Carouselv4.initOwl2Carouselv4();
		window.Owl2Carouselv5.initOwl2Carouselv5();
		window.ContactForm.initContactForm();
    });

    loadJS("https://maps.googleapis.com/maps/api/js?signed_in=true")
    .then(
    	loadJS("../../assets/js/plugins/gmaps-ini.js").
    	then(function(){
    		console.log('loaded google');
    	})
    )

    console.log('update componentDidUpdate');

  }

  componentDidMount() {
  	loadJS("../../assets/js/plugins/cube-portfolio.js")
    .then(function() {
      console.log("jQuery is loaded");
      window.App.init();
		window.App.initCounter();
		window.Owl2Carouselv1.initOwl2Carouselv1();
		window.Owl2Carouselv2.initOwl2Carouselv2();
		window.Owl2Carouselv3.initOwl2Carouselv3();
		window.Owl2Carouselv4.initOwl2Carouselv4();
		window.Owl2Carouselv5.initOwl2Carouselv5();
		window.ContactForm.initContactForm();
    });

    console.log('update componentDidUpdate');
  }

  render() {
    return (
      <div>
        {this.props.children}
      </div>
    );
  }
}
