import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../../actions/index';
import { Link } from 'react-router';

class Teachers extends Component {
  componentWillMount() {
    //this.props.fetchPosts();
  }

  render() {
    return (
		<section id="teachers">
			<div className="container-fluid no-padding pattern-v1--color">
				<div className="container">
					<div className="content-lg">
						<div className="heading-v13 heading-v13--center heading-v13--diff text-center g-pt-10 g-mb-60">
							<span className="heading-v13__block-name">Our teachers</span>
							<h1 className="heading-v13__title font-main">Meet the professionals</h1>
							<p className="heading-v13__text">Etiam dolor tortor, egestas a libero eget, sollicitudin maximus nulla. Nunc vitae maximus ipsum. Vestibulum sodales nisi massa, vitae blandit massa luctus id.</p>
						</div>

						<div className="owl2-carousel-v3 owl-theme controls-v1">
							<div className="item text-center">
								<div className="teacher g-padding-20">
									<img className="teacher__img g-mb-30" src="assets/img-temp/team1.jpg" alt=""/>
									<ul className="teacher__social list-unstyled">
										<li>
											<a href="#" className="teacher__list-item">
												<i className="icon-custom teacher__icon icon-sm fa fa-twitter"></i>
											</a>
										</li>
										<li>
											<a href="#" className="teacher__list-item">
												<i className="icon-custom teacher__icon icon-sm fa fa-pinterest-p"></i>
											</a>
										</li>
										<li>
											<a href="#" className="teacher__list-item">
												<i className="icon-custom teacher__icon icon-sm fa fa-facebook"></i>
											</a>
										</li>
										<li>
											<a href="#" className="teacher__list-item">
												<i className="icon-custom teacher__icon icon-sm fa fa-linkedin"></i>
											</a>
										</li>
									</ul>
									<span className="teacher__speciality g-dp-block g-mb-15">Artist, Sculptor</span>
									<span className="teacher__name g-dp-block g-mb-15">Tim <br/> Blackwater</span>
									<p className="teacher__about">Mauris sodales tellus vel felis dapibus, sit amet porta nibh egestas. Sed dignissim tellus quis sapien sagittis cursus. Cras porttitor auctor sapien, eu tempus nunc.</p>
								</div>
							</div>

							<div className="item text-center">
								<div className="teacher g-padding-20">
									<img className="teacher__img g-mb-30" src="assets/img-temp/team2.jpg" alt=""/>
									<ul className="teacher__social list-unstyled">
										<li>
											<a href="#" className="teacher__list-item">
												<i className="icon-custom teacher__icon icon-sm fa fa-twitter"></i>
											</a>
										</li>
										<li>
											<a href="#" className="teacher__list-item">
												<i className="icon-custom teacher__icon icon-sm fa fa-pinterest-p"></i>
											</a>
										</li>
										<li>
											<a href="#" className="teacher__list-item">
												<i className="icon-custom teacher__icon icon-sm fa fa-facebook"></i>
											</a>
										</li>
										<li>
											<a href="#" className="teacher__list-item">
												<i className="icon-custom teacher__icon icon-sm fa fa-linkedin"></i>
											</a>
										</li>
									</ul>
									<span className="teacher__speciality g-dp-block g-mb-15">Artist, Singer</span>
									<span className="teacher__name g-dp-block g-mb-15">Lara <br/> Wiscinson</span>
									<p className="teacher__about">Mauris sodales tellus vel felis dapibus, sit amet porta nibh egestas. Sed dignissim tellus quis sapien sagittis cursus. Cras porttitor auctor sapien, eu tempus nunc.</p>
								</div>
							</div>

							<div className="item text-center">
								<div className="teacher g-padding-20">
									<img className="teacher__img g-mb-30" src="assets/img-temp/team3.jpg" alt=""/>
									<ul className="teacher__social list-unstyled">
										<li>
											<a href="#" className="teacher__list-item">
												<i className="icon-custom teacher__icon icon-sm fa fa-twitter"></i>
											</a>
										</li>
										<li>
											<a href="#" className="teacher__list-item">
												<i className="icon-custom teacher__icon icon-sm fa fa-pinterest-p"></i>
											</a>
										</li>
										<li>
											<a href="#" className="teacher__list-item">
												<i className="icon-custom teacher__icon icon-sm fa fa-facebook"></i>
											</a>
										</li>
										<li>
											<a href="#" className="teacher__list-item">
												<i className="icon-custom teacher__icon icon-sm fa fa-linkedin"></i>
											</a>
										</li>
									</ul>
									<span className="teacher__speciality g-dp-block g-mb-15">Teacher, Piano</span>
									<span className="teacher__name g-dp-block g-mb-15">Simon <br/> Rubapa</span>
									<p className="teacher__about">Mauris sodales tellus vel felis dapibus, sit amet porta nibh egestas. Sed dignissim tellus quis sapien sagittis cursus. Cras porttitor auctor sapien, eu tempus nunc.</p>
								</div>
							</div>

							<div className="item text-center">
								<div className="teacher g-padding-20">
									<img className="teacher__img g-mb-30" src="assets/img-temp/team4.jpg" alt=""/>
									<ul className="teacher__social list-unstyled">
										<li>
											<a href="#" className="teacher__list-item">
												<i className="icon-custom teacher__icon icon-sm fa fa-twitter"></i>
											</a>
										</li>
										<li>
											<a href="#" className="teacher__list-item">
												<i className="icon-custom teacher__icon icon-sm fa fa-pinterest-p"></i>
											</a>
										</li>
										<li>
											<a href="#" className="teacher__list-item">
												<i className="icon-custom teacher__icon icon-sm fa fa-facebook"></i>
											</a>
										</li>
										<li>
											<a href="#" className="teacher__list-item">
												<i className="icon-custom teacher__icon icon-sm fa fa-linkedin"></i>
											</a>
										</li>
									</ul>
									<span className="teacher__speciality g-dp-block g-mb-15">Artist, Dancer</span>
									<span className="teacher__name g-dp-block g-mb-15">Suang <br/> Kim</span>
									<p className="teacher__about">Mauris sodales tellus vel felis dapibus, sit amet porta nibh egestas. Sed dignissim tellus quis sapien sagittis cursus. Cras porttitor auctor sapien, eu tempus nunc.</p>
								</div>
							</div>

							<div className="item text-center">
								<div className="teacher g-padding-20">
									<img className="teacher__img g-mb-30" src="assets/img-temp/team5.jpg" alt=""/>
									<ul className="teacher__social list-unstyled">
										<li>
											<a href="#" className="teacher__list-item">
												<i className="icon-custom teacher__icon icon-sm fa fa-twitter"></i>
											</a>
										</li>
										<li>
											<a href="#" className="teacher__list-item">
												<i className="icon-custom teacher__icon icon-sm fa fa-pinterest-p"></i>
											</a>
										</li>
										<li>
											<a href="#" className="teacher__list-item">
												<i className="icon-custom teacher__icon icon-sm fa fa-facebook"></i>
											</a>
										</li>
										<li>
											<a href="#" className="teacher__list-item">
												<i className="icon-custom teacher__icon icon-sm fa fa-linkedin"></i>
											</a>
										</li>
									</ul>
									<span className="teacher__speciality g-dp-block g-mb-15">Cook </span>
									<span className="teacher__name g-dp-block g-mb-15">Rebecca <br/> Smithmann</span>
									<p className="teacher__about">Mauris sodales tellus vel felis dapibus, sit amet porta nibh egestas. Sed dignissim tellus quis sapien sagittis cursus. Cras porttitor auctor sapien, eu tempus nunc.</p>
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

export default connect(mapStateToProps, { fetchPosts })(Teachers);



		
