import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../../actions/index';
import { Link } from 'react-router';

class Contact extends Component {
  componentWillMount() {
    //this.props.fetchPosts();
  }

  render() {
    return (
		<section id="contact">
			<div className="container">
				<div className="col-md-8 col-md-offset-2 g-mb-60">

					<div className="tab-v1">
						<ul className="nav nav-tabs">
							<li className="active"><a href="#write-us" data-toggle="tab">Write us</a></li>
							<li className="pull-right"><a href="#contacts" data-toggle="tab">Contacts</a></li>
						</ul>
						<div className="tab-content">
							<div className="tab-pane fade in active" id="write-us">
								<div className="form">
									<form action="#" method="post" id="sky-form3" className="sky-form contact-style">
										<fieldset>
											<div className="row">
												<div className="col-md-12 g-mb-30">
													<div>
														<input type="text" name="name" id="name" className="form-control contact__form-control" placeholder="Your name"/>
													</div>
												</div>
											</div>

											<div className="row">
												<div className="col-md-12 g-mb-30">
													<div>
														<input type="text" name="subject" id="subject" className="form-control contact__form-control" placeholder="Subject"/>
													</div>
												</div>
											</div>

											<div className="row">
												<div className="col-md-12 g-mb-30">
													<div>
														<textarea rows="4" name="message" id="message" className="form-control contact__form-control g-textarea-noresize" placeholder="Message"></textarea>
													</div>
												</div>
											</div>

											<div className="row">
												<div className="col-md-7 col-md-offset-3">
												<button type="submit" className="btn-u btn-u-lg btn-u-bg-default btn-u--contact"> Submit</button>
												</div>
											</div>
										</fieldset>

										<div className="message text-center">
											<i className="rounded-x fa fa-check"></i>
											<p>Your message was successfully sent!</p>
										</div>
									</form>
								</div>
							</div>

							<div className="tab-pane fade in" id="contacts">
								<div className="row g-pt-60 text-center tag-box tag-box-v3">
									<ul className="list-unstyled col-md-4 g-mb-30">
										<li><span className="icon-directions contact-list__icon g-dp-block g-mb-10"></span></li>
										 <li className="contact-list__item-1">Address</li>
										<li className="contact-list__item-2">Sit amet adipiscing</li>
									</ul>

									<ul className="list-unstyled col-md-4 g-mb-30">
										<li><span className="icon-call-in contact-list__icon g-dp-block g-mb-10"></span></li>
										<li className="contact-list__item-1">Phone number</li>
										<li className="contact-list__item-2">+4586 585 4580</li>
									</ul>

									<ul className="list-unstyled col-md-4">
										<li><span className="icon-envelope-open contact-list__icon g-dp-block g-mb-10"></span></li>
										<li className="contact-list__item-1">Email</li>
										<li className="contact-list__item-2">info@unify.com</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className="container-fluid no-padding">

			  <div className="g-map" id="map"></div>

			</div>
		</section>
    );
  }
}

function mapStateToProps(state) {
  return { posts: state.posts.all };
}

export default connect(mapStateToProps, { fetchPosts })(Contact);



		
