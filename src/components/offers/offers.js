import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../../actions/index';
import { Link } from 'react-router';

class Offers extends Component {
  componentWillMount() {
    //this.props.fetchPosts();
  }

  render() {
    return (
		<section id="offers">
			<div className="container-fluid no-padding pattern-v1">
				<div className="container">
					<div className="content-lg g-pb-90">
						<div className="heading-v13 heading-v13--center heading-v13 text-center g-pt-10 g-mb-60">
							<span className="heading-v13__block-name">Our Offers</span>
							<h1 className="heading-v13__title font-main">the best offers with us</h1>
						</div>

						<div className="owl2-carousel-v4 owl-theme dots-v1">
							<div className="item text-center g-mb-40">
								<div className="offer g-padding-50">
									<span className="offer__price g-dp-block">$750</span>
									<span className="offer__price--per g-dp-block g-mb-30">per course</span>
									<h2 className="offer__name font-main g-mb-60">For photographers</h2>
									<p className="offer__text g-mb-30">Fusce dolor libero, efficitur et lobortis at, faucibus nec nunc. Proin fermentum turpis eget. Praesent malesuada facilisis maximus. Integer blandit velit nec purus convallis.</p>
									<a href="#" className="btn-u offer__btn-u">Order Now</a>
								</div>
							</div>

							<div className="item text-center g-mb-40">
								<div className="offer g-padding-50">
									<span className="offer__price g-dp-block">$625</span>
									<span className="offer__price--per g-dp-block g-mb-30">per course</span>
									<h2 className="offer__name font-main g-mb-60">Cooking</h2>
									<p className="offer__text g-mb-30">Fusce dolor libero, efficitur et lobortis at, faucibus nec nunc. Proin fermentum turpis eget. Praesent malesuada facilisis maximus. Integer blandit velit nec purus convallis.</p>
									<a href="#" className="btn-u offer__btn-u">Order Now</a>
								</div>
							</div>

							<div className="item text-center g-mb-40">
								<div className="offer g-padding-50">
									<span className="offer__price g-dp-block">$1220</span>
									<span className="offer__price--per g-dp-block g-mb-30">per course</span>
									<h2 className="offer__name font-main g-mb-60">Professional design</h2>
									<p className="offer__text g-mb-30">Fusce dolor libero, efficitur et lobortis at, faucibus nec nunc. Proin fermentum turpis eget. Praesent malesuada facilisis maximus. Integer blandit velit nec purus convallis.</p>
									<a href="#" className="btn-u offer__btn-u">Order Now</a>
								</div>
							</div>

							<div className="item text-center g-mb-40">
								<div className="offer g-padding-50">
									<span className="offer__price g-dp-block">$450</span>
									<span className="offer__price--per g-dp-block g-mb-30">per course</span>
									<h2 className="offer__name font-main g-mb-60">For elderly</h2>
									<p className="offer__text g-mb-30">Fusce dolor libero, efficitur et lobortis at, faucibus nec nunc. Proin fermentum turpis eget. Praesent malesuada facilisis maximus. Integer blandit velit nec purus convallis.</p>
									<a href="#" className="btn-u offer__btn-u">Order Now</a>
								</div>
							</div>

							<div className="item text-center g-mb-40">
								<div className="offer g-padding-50">
									<span className="offer__price g-dp-block">$230</span>
									<span className="offer__price--per g-dp-block g-mb-30">per course</span>
									<h2 className="offer__name font-main g-mb-60">Piano</h2>
									<p className="offer__text g-mb-30">Fusce dolor libero, efficitur et lobortis at, faucibus nec nunc. Proin fermentum turpis eget. Praesent malesuada facilisis maximus. Integer blandit velit nec purus convallis.</p>
									<a href="#" className="btn-u offer__btn-u">Order Now</a>
								</div>
							</div>

							<div className="item text-center g-mb-40">
								<div className="offer g-padding-50">
									<span className="offer__price g-dp-block">$1500</span>
									<span className="offer__price--per g-dp-block g-mb-30">per course</span>
									<h2 className="offer__name font-main g-mb-60">Web design</h2>
									<p className="offer__text g-mb-30">Fusce dolor libero, efficitur et lobortis at, faucibus nec nunc. Proin fermentum turpis eget. Praesent malesuada facilisis maximus. Integer blandit velit nec purus convallis.</p>
									<a href="#" className="btn-u offer__btn-u">Order Now</a>
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

export default connect(mapStateToProps, { fetchPosts })(Offers);



		
