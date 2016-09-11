import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../../actions/index';
import { Link } from 'react-router';

class Courses extends Component {
  componentWillMount() {
    //this.props.fetchPosts();
  }

  render() {
    return (
		<section id="courses">
			<div className="container-fluid no-padding pattern-v1">
				<div className="content-lg g-pr-30 g-pl-30">
					<div className="heading-v13 heading-v13--center text-center g-pt-10 g-mb-80">
						<span className="heading-v13__block-name">Our courses</span>
						<h1 className="heading-v13__title font-main">Learn something new</h1>
					</div>

					<div className="owl2-carousel-v2 owl-theme controls-v1">
						<div className="item text-left">
							<div className="course-info">
								<div className="course-info__block">
									<img className="course-info__img" src="assets/img-temp/course1.jpg" alt=""/>
									<a href="#" className="course-info__cat g-padding-10">Photography</a>
									<h2 className="course-info__title font-main">
										<a className="course-info__link" href="#">Photography for travelers</a>
									</h2>
								</div>

								<div className="course-info__bott g-padding-30">
									<p className="course-info__price g-mb-40">
									<span className="course-info__price--big">From <strong>$150</strong></span> per course
									</p>
									<p className="course-info__text g-mb-25">Curabitur eget tortor sed urna faucibus iaculis id et nulla. Tortor sed urna faucibus iaculis id et nulla.</p>
									<span className="course-info__dur g-mb-20 g-dp-block">
										<i className="fa course-info__icon fa-calendar g-mr-10"></i> Duration: 6 months
									</span>
									<span className="course-info__level">
										<i className="fa course-info__icon fa-certificate g-mr-10"></i> Degree level: Advanced
									</span>
								</div>
							</div>
						</div>

						<div className="item text-left">
							<div className="course-info">
								<div className="course-info__block">
									<img className="course-info__img" src="assets/img-temp/course2.jpg" alt=""/>
									<a href="#" className="course-info__cat g-padding-10">Art</a>
									<h2 className="course-info__title font-main">
										<a className="course-info__link" href="#">Quality street art</a>
									</h2>
								</div>

								<div className="course-info__bott g-padding-30">
									<p className="course-info__price g-mb-40">
									<span className="course-info__price--big">From <strong>$200</strong></span> per course
									</p>
									<p className="course-info__text g-mb-25">Curabitur eget tortor sed urna faucibus iaculis id et nulla. Tortor sed urna faucibus iaculis id et nulla.</p>
									<span className="course-info__dur g-mb-20 g-dp-block">
										<i className="fa course-info__icon fa-calendar g-mr-10"></i> Duration: 6 months
									</span>
									<span className="course-info__level">
										<i className="fa course-info__icon fa-certificate g-mr-10"></i> Degree level: Advanced
									</span>
								</div>
							</div>
						</div>

						<div className="item text-left">
							<div className="course-info">
								<div className="course-info__block">
									<img className="course-info__img" src="assets/img-temp/course3.jpg" alt=""/>
									<a href="#" className="course-info__cat g-padding-10">Design</a>
									<h2 className="course-info__title font-main"><a href="#" className="course-info__link">Creative photographs</a></h2>
								</div>

								<div className="course-info__bott g-padding-30">
									<p className="course-info__price g-mb-40">
									<span className="course-info__price--big">From <strong>$280</strong></span> per course
									</p>
									<p className="course-info__text g-mb-25">Curabitur eget tortor sed urna faucibus iaculis id et nulla. Tortor sed urna faucibus iaculis id et nulla.</p>
									<span className="course-info__dur g-mb-20 g-dp-block">
										<i className="fa course-info__icon fa-calendar g-mr-10"></i> Duration: 7 months
									</span>
									<span className="course-info__level">
										<i className="fa course-info__icon fa-certificate g-mr-10"></i> Degree level: Intermediate
									</span>
								</div>
							</div>
						</div>

						<div className="item text-left">
							<div className="course-info">
								<div className="course-info__block">
									<img className="course-info__img" src="assets/img-temp/course4.jpg" alt=""/>
									<a href="#" className="course-info__cat g-padding-10">Music</a>
									<h2 className="course-info__title font-main"><a href="#" className="course-info__link">Guitar for beginners</a></h2>
								</div>

								<div className="course-info__bott g-padding-30">
									<p className="course-info__price g-mb-40">
									<span className="course-info__price--big">From <strong>$80</strong></span> per course
									</p>
									<p className="course-info__text g-mb-25">Curabitur eget tortor sed urna faucibus iaculis id et nulla. Tortor sed urna faucibus iaculis id et nulla.</p>
									<span className="course-info__dur g-mb-20 g-dp-block">
										<i className="fa course-info__icon fa-calendar g-mr-10"></i> Duration: 3 months
									</span>
									<span className="course-info__level">
										<i className="fa course-info__icon fa-certificate g-mr-10"></i> Degree level: Beginners
									</span>
								</div>
							</div>
						</div>

						<div className="item text-left">
							<div className="course-info">
								<div className="course-info__block">
									<img className="course-info__img" src="assets/img-temp/course5.jpg" alt=""/>
									<a href="#" className="course-info__cat g-padding-10">Music</a>
									<h2 className="course-info__title font-main"><a href="#" className="course-info__link">Piano lessons</a></h2>
								</div>

								<div className="course-info__bott g-padding-30">
									<p className="course-info__price g-mb-40">
									<span className="course-info__price--big">From <strong>$120</strong></span> per course
									</p>
									<p className="course-info__text g-mb-25">Curabitur eget tortor sed urna faucibus iaculis id et nulla. Tortor sed urna faucibus iaculis id et nulla.</p>
									<span className="course-info__dur g-mb-20 g-dp-block">
										<i className="fa course-info__icon fa-calendar g-mr-10"></i> Duration: 9 months
									</span>
									<span className="course-info__level">
										<i className="fa course-info__icon fa-certificate g-mr-10"></i> Degree level: Advanced
									</span>
								</div>
							</div>
						</div>

						<div className="item text-left">
							<div className="course-info">
								<div className="course-info__block">
									<img className="course-info__img" src="assets/img-temp/course6.jpg" alt=""/>
									<a href="#" className="course-info__cat g-padding-10">Dance</a>
									<h2 className="course-info__title font-main"><a href="#" className="course-info__link">Ballet lessons</a></h2>
								</div>

								<div className="course-info__bott g-padding-30">
									<p className="course-info__price g-mb-40">
									<span className="course-info__price--big">From <strong>$135</strong></span> per course
									</p>
									<p className="course-info__text g-mb-25">Curabitur eget tortor sed urna faucibus iaculis id et nulla. Tortor sed urna faucibus iaculis id et nulla.</p>
									<span className="course-info__dur g-mb-20 g-dp-block">
										<i className="fa course-info__icon fa-calendar g-mr-10"></i> Duration: 4 months
									</span>
									<span className="course-info__level">
										<i className="fa course-info__icon fa-certificate g-mr-10"></i> Degree level: Intermediate
									</span>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
    );
  }
}

function mapStateToProps(state) {
  return { posts: state.posts.all };
}

export default connect(mapStateToProps, { fetchPosts })(Courses);



		
