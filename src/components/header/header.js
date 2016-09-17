import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateConfig } from '../../actions/index';
import { Link } from 'react-router';

class Header extends Component {
  componentWillMount() {
	    //this.props.fetchData();
  }

  changeLang() {

  	const { lang } = this.props;

   	if (lang === 'en') {
  		this.props.updateConfig('cn')
  	} else {
  		this.props.updateConfig('en');
  	};
  }
  
  render() {
  	const { header, lang } = this.props;
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
									return (
										<li className="page-scroll home nav__text" key={i}>
											<a href={tab.link}>{tab.name}</a>
										</li>
									)
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
  return { header: state.data.all.header, lang: state.config.lang };
}

export default connect(mapStateToProps, {updateConfig})(Header);



		
