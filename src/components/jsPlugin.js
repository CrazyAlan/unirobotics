import React from 'react';
import { Component } from 'react';

export default class jsPlugin extends Component {
  render() {
    return (
      <div>
      	<script src="https://maps.googleapis.com/maps/api/js?signed_in=true&amp;callback=initMap" async defer></script><script src="assets/js/plugins/gmaps-ini.js"></script>

		<script src="assetsUp/js/one.app.js"></script>
		<script src="assets/js/plugins/owl2-carousel-v1.js"></script>
		<script src="assets/js/plugins/owl2-carousel-v2.js"></script>
		<script src="assets/js/plugins/owl2-carousel-v3.js"></script>
		<script src="assets/js/plugins/owl2-carousel-v4.js"></script>
		<script src="assets/js/plugins/owl2-carousel-v5.js"></script>
		<script src="assets/js/plugins/cube-portfolio.js"></script>
		<script src="assets/js/plugins/gmaps-ini.js"></script>
		<script src="assets/js/forms/contact.js"></script>
		<script>
			$(function() {
				App.init()
				App.initCounter()
				Owl2Carouselv1.initOwl2Carouselv1()
				Owl2Carouselv2.initOwl2Carouselv2()
				Owl2Carouselv3.initOwl2Carouselv3()
				Owl2Carouselv4.initOwl2Carouselv4()
				Owl2Carouselv5.initOwl2Carouselv5()
				ContactForm.initContactForm()
			});
		</script>
      </div>
    );
  }
}
