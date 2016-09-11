import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../../actions/index';
import { Link } from 'react-router';

class Promotion extends Component {
  componentWillMount() {
    //this.props.fetchPosts();
  }

  render() {
    return (
			<div className="container-fluid g-pr-30 g-pl-30">
				{/*  Owl Carousel v1  */}
				<div className="owl2-carousel-v1 owl-theme animated slideInUp">
					<div className="item text-left">
						<div className="course">
							<img className="img-responsive" src="assets/img-temp/slider1.jpg" alt=""/>
							<a href="#" className="course__cat g-padding-10">Dance</a>
							<div className="course--bottom">
								<span className="course__dur">
									<i className="fa course__icon fa-calendar g-mr-10 g-mb-10"></i> Duration: 6 months
								</span>
								<h1 className="course__title g-mb-20 font-main"><a href="#">Dance Courses</a></h1>
								<p className="course__text g-mb-30">Curabitur eget tortor sed urna faucibus iaculis id et nulla.</p>
								<a href="#" className="btn-u course__btn-u">Learn More</a>
							</div>
						</div>
					</div>

					<div className="item text-left">
						<div className="course">
							<img src="assets/img-temp/slider2.jpg" alt="" className="img-responsive"/>
							<a href="#" className="course__cat g-padding-10">Photography</a>
							<div className="course--bottom">
								<span className="course__dur">
									<i className="fa course__icon fa-calendar g-mr-10 g-mb-10"></i> Duration: 4 months
								</span>
								<h1 className="course__title g-mb-20 font-main"><a href="#">Creative photos</a></h1>
								<p className="course__text g-mb-30">Curabitur eget tortor sed urna faucibus iaculis id et nulla.</p>
								<a href="#" className="btn-u course__btn-u">Learn More</a>
							</div>
						</div>
					</div>

					<div className="item text-left">
						<div className="course">
							<img src="assets/img-temp/slider3.jpg" alt="" className="img-responsive"/>
							<a href="#" className="course__cat g-padding-10">Art</a>
							<div className="course--bottom">
								<span className="course__dur">
									<i className="fa course__icon fa-calendar g-mr-10 g-mb-10"></i> Duration: 10 months
								</span>
								<h1 className="course__title g-mb-20 font-main"><a href="#">Art for all</a></h1>
								<p className="course__text g-mb-30">Curabitur eget tortor sed urna faucibus iaculis id et nulla.</p>
								<a href="#" className="btn-u course__btn-u">Learn More</a>
							</div>
						</div>
					</div>

					<div className="item text-left">
						<div className="course">
							<img src="assets/img-temp/slider4.jpg" alt="" className="img-responsive"/>
							<a href="#" className="course__cat g-padding-10">Art</a>
							<div className="course--bottom">
								<span className="course__dur">
									<i className="fa course__icon fa-calendar g-mr-10 g-mb-10"></i> Duration: 8 months
								</span>
								<h1 className="course__title g-mb-20 font-main"><a href="#">Painting</a></h1>
								<p className="course__text g-mb-30">Curabitur eget tortor sed urna faucibus iaculis id et nulla.</p>
								<a href="#" className="btn-u course__btn-u">Learn More</a>
							</div>
						</div>
					</div>

					<div className="item text-left">
						<div className="course course--img-5">
							<img src="assets/img-temp/slider5.jpg" alt="" className="img-responsive"/>
							<a href="#" className="course__cat g-padding-10">Special</a>
							<div className="course--bottom">
								<span className="course__dur">
									<i className="fa course__icon fa-calendar g-mr-10 g-mb-10"></i> Duration: 7 months
								</span>
								<h1 className="course__title g-mb-20 font-main"><a href="#">Courses for elderly</a></h1>
								<p className="course__text g-mb-30">Curabitur eget tortor sed urna faucibus iaculis id et nulla.</p>
								<a href="#" className="btn-u course__btn-u">Learn More</a>
							</div>
						</div>
					</div>
				</div>
			</div>
    );
  }
}

function mapStateToProps(state) {
  return { posts: state.posts.all };
}

export default connect(mapStateToProps, { fetchPosts })(Promotion);



		
