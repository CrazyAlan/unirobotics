import React, { Component, PropTypes } from 'react';
import { reduxForm } from 'redux-form';
import { createContact } from '../../actions/index';
import { Link } from 'react-router';

class Contact extends Component {
  onSubmit(props) {
    // this.props.createContact(props)
    //   .then(() => {
    //     // blog post has been created, navigate the user to the index
    //     // We navigate by calling this.context.router.push with the
    //     // new path to navigate to.
    //     this.context.router.push('/');
    //   });
    console.log("submit form");
    $("#sky-form3").addClass('submited');
  }

  render() {
  	const { fields: { name, subject, message }, handleSubmit } = this.props;

    return (
		<section id="contact">
			<div className="container">
				<div className="col-md-8 col-md-offset-2 g-mb-60">

					<div className="tab-v1">
						<ul className="nav nav-tabs">
							<li className="active"><a href="#contacts" data-toggle="tab">Contacts</a></li>
							<li className="pull-right"><a href="#write-us" data-toggle="tab">Write us</a></li>
						</ul>
						<div className="tab-content">
							<div className="tab-pane fade in" id="write-us">
								<div className="form">
									<form onSubmit={handleSubmit(this.onSubmit.bind(this))} id="sky-form3" className="sky-form contact-style">
										<fieldset>
											<div className="row">
												<div className="col-md-12 g-mb-30">
													<div>
														<input type="text" {...name} id="name" className="form-control contact__form-control" placeholder="Your name"/>
													</div>
												</div>
											</div>

											<div className="row">
												<div className="col-md-12 g-mb-30">
													<div>
														<input type="text" {...subject} id="subject" className="form-control contact__form-control" placeholder="Subject"/>
													</div>
												</div>
											</div>

											<div className="row">
												<div className="col-md-12 g-mb-30">
													<div>
														<textarea rows="4" {...message} id="message" className="form-control contact__form-control g-textarea-noresize" placeholder="Message"></textarea>
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

							<div className="tab-pane fade in active" id="contacts">
								<div className="row g-pt-60 text-center tag-box tag-box-v3">
									<ul className="list-unstyled col-md-3 g-mb-30">
										<li><span className="icon-directions contact-list__icon g-dp-block g-mb-10"></span></li>
										 <li className="contact-list__item-1">Address</li>
										<li className="contact-list__item-2">8888 University Dr,<br /> Burnaby, BC V5A 1S6</li>
									</ul>

									<ul className="list-unstyled col-md-3 g-mb-30">
										<li><span className="icon-call-in contact-list__icon g-dp-block g-mb-10"></span></li>
										<li className="contact-list__item-1">Phone number</li>
										<li className="contact-list__item-2">+778 681 1568</li>
									</ul>

									<ul className="list-unstyled col-md-3">
										<li><span className="icon-envelope-open contact-list__icon g-dp-block g-mb-10"></span></li>
										<li className="contact-list__item-1">Email</li>
										<li className="contact-list__item-2">unirobotics.ca@gmail.com</li>
									</ul>

									<ul className="list-unstyled col-md-3">
										<li><span className="icon-envelope-open contact-list__icon g-dp-block g-mb-10"></span></li>
										<li className="contact-list__item-1">Wexin</li>
										<li className="contact-list__item-2">+17786811568</li>
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
  return { contact: state.data.all.contact};
}

function validate(values) {
  const errors = {};

  if (!values.name) {
    errors.title = 'Enter your name';
  }
  if (!values.subject) {
    errors.categories = 'Enter subject';
  }
  if(!values.message || values.message.length < 10) {
    errors.content = 'Enter message';
  }

  return errors;
}

// connect: first argument is mapStateToProps, 2nd is mapDispatchToProps
// reduxForm: 1st is form config, 2nd is mapStateToProps, 3rd is mapDispatchToProps
export default reduxForm({
  form: 'ContactForm',
  fields: ['name', 'subject', 'message'],
  validate
}, mapStateToProps, { createContact })(Contact);

		
