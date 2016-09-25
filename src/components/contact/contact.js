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

  renderContent(contact){
  	if (contact !== undefined) {
  	  	return (
	  		contact.contents.map((content)=>{
	  			return (
	  				<ul className="list-unstyled col-md-3 g-mb-30">
						<li><span className={content.icon}></span></li>
						 <li className="contact-list__item-1">{content.key}</li>
						<li className="contact-list__item-2">{content.content}</li>
					</ul>
	  		)}
	  	)
	  )}
  	}

  render() {
  	const { fields: { name, subject, message }, contact,  handleSubmit } = this.props;

    return (
		<section id="contact">
			<div className="container">
				<div className="col-md-8 col-md-offset-2 g-mb-60">

					<div className="tab-v1">

						<div className="tab-content">
							

							<div className="tab-pane fade in active" id="contacts">
								<div className="row g-pt-60 text-center tag-box tag-box-v3">
									
									{this.renderContent(contact)}

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

		
