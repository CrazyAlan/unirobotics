import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPromotions } from '../../actions/index';
import { Link } from 'react-router';

class Promotion extends Component {
  componentWillMount() {

    this.props.fetchPromotions();
  }

  renderPromotion() {

  	if (typeof this.props.promotions !== undefined) {

  		return this.props.promotions.map((promotion, i) => {
  			return (
			  		<div className="item text-left" key={i}>
						<div className="course">
							<img className="img-responsive" src={promotion.img} alt=""/>
							<a  className="course__cat g-padding-10">{promotion.level}</a>
							<div className="course--bottom">
								<span className="course__dur">
									<i className="fa course__icon fa-calendar g-mr-10 g-mb-10"></i> {promotion.duration}
								</span>
								<h1 className="course__title g-mb-20 font-main"><Link to={'/courses/?courseID='+promotion.id}> {promotion.course}</Link></h1>
								<p className="course__text g-mb-30">{promotion.description}</p>
								<Link to={'/courses/?courseID='+promotion.id} className="btn-u course__btn-u">{promotion.learnMore}</Link>
							</div>
						</div>
					</div>
					);
	  	});
  	};
  }

  render() {
    return (
			<div className="container-fluid g-pr-30 g-pl-30 g-pb-100">
				{/*  Owl Carousel v1  */}
				<div className="owl2-carousel-v1 owl-theme slideInUp">
					
					{this.renderPromotion()}
					
				</div>
			</div>
    );
  }
}

function mapStateToProps(state) {
  return { promotions: state.promotions.all , lang: state.config.lang };
}

export default connect(mapStateToProps, { fetchPromotions })(Promotion);



		
