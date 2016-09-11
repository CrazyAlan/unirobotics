import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../../actions/index';
import { Link } from 'react-router';

class OurNumbers extends Component {
  componentWillMount() {
    //this.props.fetchPosts();
  }

  render() {
    return (
		<section id="numbers">
			<div className="container">
				<div className="content-lg g-pb-80 g-pr-30 g-pl-30">
					<div className="heading-v13 g-pl-100 heading-v13--left text-left g-mb-60">
						<div className="row">
							<div className="col-md-6">
								<span className="heading-v13__block-name">Our Numbers</span>
								<h1 className="heading-v13__title font-main g-mb-15">We work hard</h1>
							</div>

							<div className="col-md-6">
								<p className="heading-v13__text">Etiam dolor tortor, egestas a libero eget, sollicitudin maximus nulla. Nunc vitae maximus ipsum. Vestibulum sodales nisi massa, vitae blandit massa luctus id.</p>
							</div>
						</div>
					</div>

					<div className="row g-mb-40">
						<div className="counters col-sm-6">
							<div className="row">
								<div className="col-md-4 g-pl-30">
									<div className="counter-circle rounded-x">
										<span className="counter">70</span>
									</div>
								</div>
								<div className="col-md-8 text-left g-pt-40">
									<h4 className="g-mb-10 font-main counters__title">Courses in our school</h4>
									<p className="counters__text">Sed feugiat porttitor nunc Etiam gravida ex justo ac rhoncus purus tristique ut, egestas a libero eget, sollicitudin maximus nulla. Nunc vitae maximus ipsum.</p>
								</div>
							</div>
						</div>

						<div className="counters col-sm-6">
							<div className="row">
								<div className="col-md-4 g-pl-30">
									<div className="counter-circle rounded-x">
										<span className="counter">32</span>
									</div>
								</div>
								<div className="col-md-8 text-left g-pt-40">
									<h4 className="g-mb-10 font-main counters__title">Professional teachers</h4>
									<p className="counters__text">Sed feugiat porttitor nunc Etiam gravida ex justo ac rhoncus purus tristique ut, egestas a libero eget, sollicitudin maximus nulla. Nunc vitae maximus ipsum.</p>
								</div>
							</div>
						</div>
					</div>

					<div className="row">
						<div className="counters col-sm-6">
							<div className="row">
								<div className="col-md-4 g-pl-30">
									<div className="counter-circle rounded-x">
										<span className="counter">2780</span>
									</div>
								</div>
								<div className="col-md-8 text-left g-pt-40">
									<h4 className="g-mb-10 font-main counters__title">Happy students</h4>
									<p className="counters__text">Sed feugiat porttitor nunc Etiam gravida ex justo ac rhoncus purus tristique ut, egestas a libero eget, sollicitudin maximus nulla. Nunc vitae maximus ipsum.</p>
								</div>
							</div>
						</div>

						<div className="counters col-sm-6">
							<div className="row">
								<div className="col-md-4 g-pl-30">
									<div className="counter-circle rounded-x">
										<span className="counter">192</span>
									</div>
								</div>
								<div className="col-md-8 text-left g-pt-40">
									<h4 className="g-mb-10 font-main counters__title">Different courses</h4>
									<p className="counters__text">Sed feugiat porttitor nunc Etiam gravida ex justo ac rhoncus purus tristique ut, egestas a libero eget, sollicitudin maximus nulla. Nunc vitae maximus ipsum.</p>
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

export default connect(mapStateToProps, { fetchPosts })(OurNumbers);



		
