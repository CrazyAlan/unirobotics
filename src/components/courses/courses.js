import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { fetchCourses, fetchPromotions, fetchACourse } from '../../actions/index';
import { Link } from 'react-router';

class Courses extends Component {
  static contextTypes = {
    router: PropTypes.object,
    location: PropTypes.object
  };

  componentWillMount() {
    this.props.fetchCourses();
    this.props.fetchPromotions();
 }


 fetchCourseDetail(course){
 	console.log('fetch details');
 	this.props.fetchACourse(course);
 }

  renderModal(){
  	const { aCourse } = this.props;
  	if (aCourse !== null) {
  	return (
	  	<div className="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
		  <div className="modal-dialog" role="document">
		    <div className="modal-content">
		      <div className="modal-header">
		        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
		          <span aria-hidden="true">&times;</span>
		        </button>
		        <h4 className="modal-title" id="myModalLabel">{aCourse.course}</h4>
		      </div>
		      <div className="modal-body">
		        <h4>{aCourse.price} </h4>
		        <h4>{aCourse.startDate} </h4>
		        <h4>{aCourse.courseDate} </h4>
		        <p> {aCourse.description}</p>
		      </div>

		    </div>
		  </div>
		</div>
	)
  }
  }

  renderCourse(courseCatalog){

  	if (typeof courseCatalog !== undefined) {

	  	return courseCatalog.courses.map((course, i) => {
	  		return (
		  		<div className="item text-left" data-toggle="modal" data-target="#myModal" key={i} onClick={this.fetchCourseDetail.bind(this, course)}>
					<div className="course-info" >
						<div className="course-info__block">
							<img className="course-info__img" src={course.img} alt="" data-toggle="modal" data-target="#myModal"/>
							<a href="#" className="course-info__cat g-padding-10">{course.level}</a>
							<h2 className="course-info__title font-main">
								<a className="course-info__link" href="#">{course.course}</a>
							</h2>
						</div>

						<div className="course-info__bott g-padding-30">
							<p className="course-info__price g-mb-40">
							<span className="course-info__price--big"> <strong>{course.price}</strong></span>
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
	  	});	
	}				
  }

  render() {
  	if (this.props.courses !== null) {
  		const { courses } = this.props;
  		var { courseID } = this.context.location.query;

  		if (courseID === undefined) {
  			courseID = 0;
  		};
  		
  		const courseCatalog = courses[courseID];


  		return (
			<section id="courses">
				<div className="container-fluid no-padding pattern-v1">
					<div className="content-lg g-pr-30 g-pl-30">
						<div className="heading-v13 heading-v13--center text-center g-pt-10 g-mb-80">
							<span className="heading-v13__block-name">{courseCatalog.title}</span>
							<h1 className="heading-v13__title font-main">{courseCatalog.description}</h1>
							<p className="heading-v13__text">{courseCatalog.abstract}</p>
						</div>

						<div className="owl2-carousel-v2 owl-theme controls-v1">
							{this.renderCourse(courseCatalog)}
						</div>
						{this.renderModal()}
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
  return { courses: state.courses.all, aCourse: state.courses.aCourse };
}

export default connect(mapStateToProps, { fetchCourses, fetchPromotions, fetchACourse })(Courses);



		
