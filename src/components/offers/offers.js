import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

class Offers extends Component {
  
  renderCourse(course){
  	return(
  		<div className="item text-center g-mb-40">
			<div className="offer g-padding-50">
				<span className="offer__price g-dp-block">${course.price}</span>
				<span className="offer__price--per g-dp-block g-mb-30">{course.unit}</span>
				<h2 className="offer__name font-main g-mb-60">{course.course}</h2>
				<p className="offer__text g-mb-30">{course.description}</p>
				<a href="#" className="btn-u offer__btn-u">{course.button}</a>
			</div>
		</div>	
  	);
  }

  render() {
  	const { offers } = this.props;
    return (
		<section id="offers">
			<div className="container-fluid no-padding pattern-v1">
				<div className="container">
					<div className="content-lg g-pb-90">
						<div className="heading-v13 heading-v13--center heading-v13 text-center g-pt-10 g-mb-60">
							<span className="heading-v13__block-name">{ offers.title}</span>
							<h1 className="heading-v13__title font-main">{ offers.description}</h1>
						</div>

						<div className="owl2-carousel-v4 owl-theme dots-v1">
							{
								offers.courses.map((course)=>{
									return this.renderCourse(course)
								})
							}
						</div>
					</div>
				</div>
			</div>
		</section>
    );
  }
}

function mapStateToProps(state) {
  return { offers: state.data.all.offers };
}

export default connect(mapStateToProps, null)(Offers);



		
