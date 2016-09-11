import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../../actions/index';
import { Link } from 'react-router';

class Footer extends Component {
  componentWillMount() {
    //this.props.fetchPosts();
  }

  render() {
    return (
		<footer className="footer">
			<div className="container-fluid pattern-v1--color no-padding">
				<div className="g-pt-60 g-pb-40">
					<div className="container">
						<div className="row">
							<div className="col-md-3 col-sm-6 col-xs-8 col-xs-offset-2 col-sm-offset-0 text-left g-pt-10">
								<img className="img-responsive g-mb-20 footer-logo__img" src="assets/img/logo-footer.png" alt=""/>
								<p className="footer__text g-mb-20">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vitae est lorem. Aenean imperdiet nisi a dolor condimentum, id ullamcorper lacus vestibulum.</p>
								<ul className="list-inline">
									<li>
										<a href="#" className="footer__social">
											<i className="icon-custom icon-sm rounded-x fa fa-twitter"></i>
										</a>
									</li>
									<li>
										<a href="#" className="footer__social">
											<i className="icon-custom icon-sm rounded-x fa fa-pinterest-p"></i>
										</a>
									</li>
									<li>
										<a href="#" className="footer__social">
											<i className="icon-custom icon-sm rounded-x fa fa-facebook"></i>
										</a>
									</li>
								</ul>
							</div>

							<div className="col-md-3 col-sm-6 col-xs-8 col-xs-offset-2 col-sm-offset-0 text-left">
								<h2 className="footer__subtitle font-main">Latest posts</h2>
								<div className="media">
								  <div className="media-left">
								    <a href="#">
								      <img className="media-object footer-post__img" src="assets/img-temp/post-footer1.jpg" alt=""/>
								    </a>
								  </div>
								  <div className="media-body">
								  	<span className="footer-post__date">April 27, 2015</span>
								    <h3 className="footer-post__title font-main"><a href="#">Mauris tellus magna, pretium a feugiat</a></h3>
								  </div>
								</div>

								<div className="media">
								  <div className="media-left">
								    <a href="#">
								      <img className="media-object footer-post__img" src="assets/img-temp/post-footer2.jpg" alt=""/>
								    </a>
								  </div>
								  <div className="media-body">
								  	<span className="footer-post__date">March 31, 2015</span>
								    <h3 className="footer-post__title font-main"><a href="#">Mauris tellus magna, pretium a feugiat</a></h3>
								  </div>
								</div>
							</div>

							<div className="col-md-3 col-sm-6 col-xs-8 col-xs-offset-2 col-sm-offset-0 text-left">
								<h2 className="footer__subtitle font-main">useful links</h2>
								<ul className="list-unstyled">
									<li className="g-mb-5"><a href="" className="footer__ulink">- Fusce dolor libero, efficitur et lobortis</a></li>
									<li className="g-mb-5"><a href="" className="footer__ulink">- Proin fermentum turpis eget nisi</a></li>
									<li className="g-mb-5"><a href="" className="footer__ulink">- Mauris sodales tellus vel felis dapibus</a></li>
									<li className="g-mb-5"><a href="" className="footer__ulink">- Ut pulvinar tellus sed elit luctus</a></li>
									<li className="g-mb-5"><a href="" className="footer__ulink">- Proin sollicitudin turpis in massa rutrum</a></li>
									<li><a href="" className="footer__ulink">- Vestibulum semper</a></li>
								</ul>
							</div>

							<div className="col-md-3 col-sm-6 col-xs-8 col-xs-offset-2 col-sm-offset-0 text-left ">
								<h2 className="footer__subtitle font-main">Some photos</h2>

								<ul className="list-inline blog-photostream">
									<li className="img-hover-v2">
										<a href="assets/img-temp/gallery1.jpg" className="cbp-caption cbp-lightbox" title="Image 1">
											<span><img className="img-responsive" src="assets/img-temp/footer__gallery1.jpg" alt=""/></span>
										</a>
									</li>
									<li className="img-hover-v2">
										<a href="assets/img-temp/gallery2.jpg" className="cbp-caption cbp-lightbox" title="Image 2">
											<span><img className="img-responsive" src="assets/img-temp/footer__gallery2.jpg" alt=""/></span>
										</a>
									</li>
									<li className="img-hover-v2">
										<a href="assets/img-temp/gallery3.jpg" className="cbp-caption cbp-lightbox" title="Image 3">
											<span><img className="img-responsive" src="assets/img-temp/footer__gallery3.jpg" alt=""/></span>
										</a>
									</li>
									<li className="img-hover-v2">
										<a href="assets/img-temp/gallery4.jpg" className="cbp-caption cbp-lightbox" title="Image 4">
											<span><img className="img-responsive" src="assets/img-temp/footer__gallery4.jpg" alt=""/></span>
										</a>
									</li>
									<li className="img-hover-v2">
										<a href="assets/img-temp/gallery5.jpg" className="cbp-caption cbp-lightbox" title="Image 5">
											<span><img className="img-responsive" src="assets/img-temp/footer__gallery5.jpg" alt=""/></span>
										</a>
									</li>
									<li className="img-hover-v2">
										<a href="assets/img-temp/gallery6.jpg" className="cbp-caption cbp-lightbox" title="Image 6">
											<span><img className="img-responsive" src="assets/img-temp/footer__gallery6.jpg" alt=""/></span>
										</a>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>
		</footer>
    );
  }
}

function mapStateToProps(state) {
  return { posts: state.posts.all };
}

export default connect(mapStateToProps, { fetchPosts })(Footer);



		
