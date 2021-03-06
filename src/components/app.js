import React from 'react';
import { Component } from 'react';
import loadJS from 'load-js';

export default class App extends Component {
  componentDidUpdate() {

    window.scrollTo(0,0);

	loadJS("/assets/js/plugins/cube-portfolio.js")
    .then(function() {
      window.App.init();
		window.App.initCounter();
		window.Owl2Carouselv1.initOwl2Carouselv1();
		window.Owl2Carouselv2.initOwl2Carouselv2();
		window.Owl2Carouselv3.initOwl2Carouselv3();
		window.Owl2Carouselv4.initOwl2Carouselv4();
		window.Owl2Carouselv5.initOwl2Carouselv5();
		window.ContactForm.initContactForm();
    loadJS("/assetsUp/js/lethic.js")
    .then(()=> {
    })

		window.initMap();
    });


  }

  componentDidMount() {
  	loadJS("/assets/js/plugins/cube-portfolio.js")
    .then(function() {
      window.App.init();
		window.App.initCounter();
		window.Owl2Carouselv1.initOwl2Carouselv1();
		window.Owl2Carouselv2.initOwl2Carouselv2();
		window.Owl2Carouselv3.initOwl2Carouselv3();
		window.Owl2Carouselv4.initOwl2Carouselv4();
		window.Owl2Carouselv5.initOwl2Carouselv5();
		window.ContactForm.initContactForm();
    loadJS("/assetsUp/js/lethic.js")
    .then(()=> {
    })

    });

  }

  render() {
    return (
      <div>
        {this.props.children}
      </div>
    );
  }
}
