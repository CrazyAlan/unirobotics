import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateConfig, fetchPromotions, fetchCourses, fetchTeachers, fetchData } from '../../actions/index';
import { Link } from 'react-router';
import cookie from 'react-cookie';


class Header extends Component {
  componentDidMount() {

	 var lang;
	 if (cookie.load('lang') !== undefined) {
	 	lang = cookie.load('lang');
	 } else{
	 	lang = window.navigator.language;
	 };

	 if (lang === 'zh-cn' || lang === 'cn') {
	 	updateConfig('cn');
	 	cookie.save('lang', 'cn' );
	 } else {
	 	updateConfig('en');
	 	cookie.save('lang', 'en' );	 	
	 };
  }

  changeLang() {

  	const { lang, updateConfig, fetchPromotions, fetchCourses, fetchTeachers, fetchData } = this.props;

  	console.log('previous state language', lang);
   	if (lang === 'en') {
  		updateConfig('cn');
	 	cookie.save('lang', 'cn' );  		
  	} else {
  		updateConfig('en')
  		cookie.save('lang', 'en' );
  	};

  	fetchPromotions();
	fetchCourses();
	fetchTeachers();
	fetchData();

  }

  renderModal(){
  	return (
	  	<div className="modal fade" id="weixin" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
		  <div className="modal-dialog" role="document">
		    <div className="modal-content">
		      <div className="modal-header">
		        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
		          <span aria-hidden="true">&times;</span>
		        </button>
		        <h4 className="modal-title" id="myModalLabel">Weixin</h4>
		      </div>
		      <div className="modal-body">
		      
		      <img src='/assets/img/home/weixin.jpg' className = 'center-block about__img equal-height-column img-responsive'/>
		      </div>

		    </div>
		  </div>
		</div>
	);
  }

  renderCourseList(promotions){
  	return (
  		<ul className="dropdown-menu">
  		{
  			promotions.map((promotion, i)=>{
  				return (
  					<li key={i}>
						<a href={`/courses/?courseID=${promotion.id}`}>{promotion.course}</a>  						
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
    <div>
    {this.renderModal()}
	
      <nav className="header one-page-header navbar navbar-default navbar-fixed-top courses-header one-page-nav-scrolling one-page-nav__fixed" data-role="navigation">
			<div className="container-fluid g-pr-40 g-pl-40">
				<div className="menu-container page-scroll">
					<button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-ex1-collapse">
						<span className="sr-only">Toggle navigation</span>
						<span className="icon-bar"></span>
						<span className="icon-bar"></span>
						<span className="icon-bar"></span>
					</button>

					<Link className="navbar-brand" to="/">
						<img className="img-responsive" src={ header.logo } alt="Logo"/>
					</Link>
				</div>
				<div className="collapse navbar-collapse navbar-ex1-collapse g-pt-25">
					<div className="menu-container">
						<ul className="nav navbar-nav">
							{
								header.tabs.map((tab, i) => {
									if (tab.name === 'Courses') {
										return (
											<li className="page-scroll home nav__text dropdown " key={i}>
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
												<li key={i} data-toggle="modal" data-target="#weixin">
													<a className="nav__social g-ml-15 g-sm-ml-0">
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

		</div>
    );
  }
}

function mapStateToProps(state) {
  return { header: state.data.all.header, lang: state.config.lang, promotions: state.promotions.all };
}

export default connect(mapStateToProps, { updateConfig, fetchPromotions, fetchCourses, fetchTeachers, fetchData })(Header);



		
