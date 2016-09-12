import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchCourses } from '../../actions/index';
import { Link } from 'react-router';

class Courses extends Component {
  componentWillMount() {
    this.props.fetchCourses();
  }

  renderCourse(){
  	if (typeof this.props.courses.courses !== undefined) {
  		console.log('renderCourse');
  		var course = this.props.courses.courses[0];
	  	// return this.props.courses.courses.map((course) => {
	  	// 	console.log('Enter map');
	  		return 
	  		(
		  		<div className="item text-left">
					<div className="course-info">
						<div className="course-info__block">
							<img className="course-info__img" src={course.img} alt=""/>
							<a href="#" className="course-info__cat g-padding-10">{course.level}</a>
							<h2 className="course-info__title font-main">
								<a className="course-info__link" href="#">{course.course}</a>
							</h2>
						</div>

						<div className="course-info__bott g-padding-30">
							<p className="course-info__price g-mb-40">
							<span className="course-info__price--big">From <strong>${course.price}</strong></span> per course
							</p>
							<p className="course-info__text g-mb-25">{course.description}</p>
							<span className="course-info__dur g-mb-20 g-dp-block">
								<i className="fa course-info__icon fa-calendar g-mr-10"></i> Duration: {course.duration} months
							</span>
							<span className="course-info__level">
								<i className="fa course-info__icon fa-certificate g-mr-10"></i> Degree level: {course.level}
							</span>
						</div>
					</div>
				</div>
			);
	  	// });	
	}				
  }

  render() {
  	if (this.props.courses !== null) {
  		console.log('this.props.courses', this.props.courses);
  		return (
			<section id="courses">
				<div className="container-fluid no-padding pattern-v1">
					<div className="content-lg g-pr-30 g-pl-30">
						<div className="heading-v13 heading-v13--center text-center g-pt-10 g-mb-80">
							<span className="heading-v13__block-name">{this.props.courses.title}</span>
							<h1 className="heading-v13__title font-main">{this.props.courses.description}</h1>
						</div>

						<div className="owl2-carousel-v2 owl-theme controls-v1">
							{this.renderCourse()}
						</div>
					</div>
				</div>
			</section>
	    );
  	} else {
  		return (
  				<div>
  					Loading
  				</div>
  			)
  	};
    
  }
}

function mapStateToProps(state) {
  return { courses: state.courses.all };
}

export default connect(mapStateToProps, { fetchCourses })(Courses);



		
