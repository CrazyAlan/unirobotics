import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchTeachers } from '../../actions/index';
import { Link } from 'react-router';

class Teachers extends Component {
  componentWillMount() {
    this.props.fetchTeachers();
  }

  renderSocials(socials){
  	return socials.map((social, i) => {
  		return (
  			<li key={i}>
				<a href={social.link} className="teacher__list-item">
					<i className={'icon-custom teacher__icon icon-sm fa fa-'+ social.type}></i>
				</a>
			</li>
  		);
  	});
  }

  renderTeachers(){
  	return this.props.teachers.teachers.map((teacher, i) => {
  		return (
  			<div className="item text-center" key={i}>
				<div className="teacher g-padding-20">
					<img className="teacher__img g-mb-30" src={teacher.img} alt=""/>
					<ul className="teacher__social list-unstyled">
						{this.renderSocials(teacher.socials)}
					</ul>
					<span className="teacher__speciality g-dp-block g-mb-15">{teacher.position}</span>
					<span className="teacher__name g-dp-block g-mb-15">{teacher.teacher.split(" ")[0]} <br/> {teacher.teacher.split(" ")[1]}</span>
					<p className="teacher__about">{teacher.introduction}</p>
				</div>
			</div>
  		);
  	})


  	
  }
  render() {
  	if (this.props.teachers !== null) {
	    return (
			<section id="teachers">
				<div className="container-fluid no-padding pattern-v1--color">
					<div className="container">
						<div className="content-lg">
							<div className="heading-v13 heading-v13--center heading-v13--diff text-center g-pt-10 g-mb-60">
								<span className="heading-v13__block-name">{this.props.teachers.title}</span>
								<h1 className="heading-v13__title font-main">{this.props.teachers.h1}</h1>
								<p className="heading-v13__text">{this.props.teachers.description}</p>
							</div>

							<div className="owl2-carousel-v3 owl-theme controls-v1">
								{this.renderTeachers()}
							</div>
						</div>
					</div>
				</div>
			</section>
	    );
	} else{
		return (
			<div>
			Loading
			</div>
		);
	};
  }
}

function mapStateToProps(state) {
  return { teachers: state.teachers.all };
}

export default connect(mapStateToProps, { fetchTeachers })(Teachers);



		
