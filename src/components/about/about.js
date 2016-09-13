import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchData } from '../../actions/index';
import { Link } from 'react-router';

class About extends Component {

  render() {
    return (
		<section id="about">
			<div className="container">
				<div className="content-lg g-pr-30 g-pl-30">
					<div className="row equal-height-columns">
						<div className="col-md-6 col-sm-12 g-pl-100 equal-height-column g-sm-mb-20">
							<div className="heading-v13 heading-v13--left text-left g-mb-40">
								<span className="heading-v13__block-name">{this.props.about.title}</span>
								<h1 className="heading-v13__title font-main g-mb-15">{this.props.about.h1}</h1>
								<p className="heading-v13__text">{this.props.about.description}</p>
							</div>

							<div className="row">
								<div className="col-sm-7 col-xs-9">
									<div className="video-promo">
										<a className="cbp-lightbox"
									 		data-title="Presentation"
									 		href={this.props.about.videoLink} data-cbp-lightbox="presentation-video">
											<i className="fa video-promo__icon fa-3x fa-play"></i>
										</a>
									</div>
								</div>

								<div className="col-sm-5 col-xs-3 g-pt-60">
									<span className="video-promo--cta"> {this.props.about.videoCaption} </span>
								</div>
							</div>
						</div>

						<div className="col-md-6 col-sm-12">
							<img className="about__img equal-height-column img-responsive" src={this.props.about.img} alt=""/>
						</div>
					</div>
				</div>
			</div>
		</section>
    );
  }
}

function mapStateToProps(state) {
  return { about: state.data.all.about};
}

export default connect(mapStateToProps, { fetchData })(About);



		
