import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateConfig, fetchPromotions, fetchCourses, fetchTeachers, fetchData } from '../../actions/index';
import { Link } from 'react-router';

class Header extends Component {
  componentWillMount() {
	    //this.props.fetchData();
  }

  changeLang() {

  	const { lang, updateConfig, fetchPromotions, fetchCourses, fetchTeachers, fetchData } = this.props;

   	if (lang === 'en') {
  		updateConfig('cn')
  	} else {
  		updateConfig('en')
  	};

  	fetchPromotions();
	fetchCourses();
	fetchTeachers();
	fetchData();

  }

  renderCourseList(promotions){
  	return (
  		<ul className="dropdown-menu">
  		{
  			promotions.map((promotion)=>{
  				return (
  					<li>
						<Link to={`/courses/${promotion.id}`}>{promotion.course}</Link>  						
  					</li>
  				);
  			})
  		}
  		</ul>
  	)
  }
  
  render() {
  	const { header, lang, promotions } = this.props;
    return (
      <nav className="header one-page-header navbar navbar-default navbar-fixed-top courses-header one-page-nav-scrolling one-page-nav__fixed" data-role="navigation">
			<div className="container-fluid g-pr-40 g-pl-40">
				<div className="menu-container page-scroll">
					<button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-ex1-collapse">
						<span className="sr-only">Toggle navigation</span>
						<span className="icon-bar"></span>
						<span className="icon-bar"></span>
						<span className="icon-bar"></span>
					</button>

					<a className="navbar-brand" href="#body">
						<img className="img-responsive" src={ header.logo } alt="Logo"/>
					</a>
				</div>

				<div className="collapse navbar-collapse navbar-ex1-collapse g-pt-25">
					<div className="menu-container">
						<ul className="nav navbar-nav">
							{
								header.tabs.map((tab, i) => {
									if (tab.name === 'Courses') {
										return (
											<li className="page-scroll home nav__text dropdown" key={i}>
												<Link to={tab.link}>{tab.name}</Link>
												{this.renderCourseList(promotions)}
											</li>
											)
									} else {
										return (
											<li className="page-scroll home nav__text dropdown" key={i}>
												<Link to={tab.link}>{tab.name}</Link>
											</li>
										)
									}
								})
							}
							
							<li className="page-scroll home nav__text" >
								<button onClick={this.changeLang.bind(this)}> 
								{
								  lang === 'en' ? '中文' : 'EN'
								} 
								</button>
							</li>

							

							<li className="clearfix">
								<ul className="list-inline hidden-md pull-md-right nav__socials">
									{
										header.socials.map((social, i) =>{
											return (
												<li key={i}>
													<a href={social.link} className="nav__social g-ml-15 g-sm-ml-0">
														<i className={`icon-custom icon-sm rounded-x fa fa-${social.name}`}></i>
													</a>
												</li>
											)
										})
									}
								</ul>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</nav>
    );
  }
}

function mapStateToProps(state) {
  return { header: state.data.all.header, lang: state.config.lang, promotions: state.promotions.all };
}

export default connect(mapStateToProps, { updateConfig, fetchPromotions, fetchCourses, fetchTeachers, fetchData })(Header);



		
