import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../../actions/index';
import { Link } from 'react-router';

class Header extends Component {
  componentWillMount() {
    //this.props.fetchPosts();
  }

  render() {
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
						<img className="img-responsive" src="assets/img/logo.png" alt="Logo"/>
					</a>
				</div>

				<div className="collapse navbar-collapse navbar-ex1-collapse g-pt-25">
					<div className="menu-container">
						<ul className="nav navbar-nav">
							<li className="page-scroll home nav__text">
								<a href="#body">Home</a>
							</li>
							<li className="page-scroll nav__text">
								<a href="#about">About</a>
							</li>
							<li className="page-scroll nav__text">
								<a href="#courses">Our Courses</a>
							</li>
							<li className="page-scroll nav__text">
								<a href="#numbers">Our Numbers</a>
							</li>
							<li className="page-scroll nav__text">
								<a href="#gallery">Gallery</a>
							</li>
							<li className="page-scroll nav__text">
								<a href="#teachers">Teachers</a>
							</li>
							<li className="page-scroll nav__text">
								<a href="#offers">Offers</a>
							</li>
							<li className="page-scroll nav__text">
								<a href="#partners">Partners</a>
							</li>
							<li className="page-scroll nav__text g-sm-mb-20">
								<a href="#contact">Contact</a>
							</li>
							<li className="clearfix">
								<ul className="list-inline hidden-md pull-md-right nav__socials">
									<li>
										<a href="#" className="nav__social g-ml-15 g-sm-ml-0">
											<i className="icon-custom icon-sm rounded-x fa fa-twitter"></i>
										</a>
									</li>
									<li>
										<a href="#" className="nav__social">
											<i className="icon-custom icon-sm rounded-x fa fa-pinterest-p"></i>
										</a>
									</li>
									<li>
										<a href="#" className="nav__social">
											<i className="icon-custom icon-sm rounded-x fa fa-facebook"></i>
										</a>
									</li>
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
  return { posts: state.posts.all };
}

export default connect(mapStateToProps, { fetchPosts })(Header);



		
