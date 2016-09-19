import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

class Footer extends Component {
 
  renderPosts(){
  	const { h2, latest_posts } = this.props.footer;
  	return (
  		<div className="col-md-4 col-sm-6 col-xs-8 col-xs-offset-2 col-sm-offset-0 text-left">
			<h2 className="footer__subtitle font-main">{h2}</h2>
			{
				latest_posts.map((post, i)=>{
					return (
						<div className="media" key={i}>
						  <div className="media-left">
						    <a href={post.link}>
						      <img className="media-object footer-post__img" src={post.img} alt=""/>
						    </a>
						  </div>
						  <div className="media-body">
						  	<span className="footer-post__date">{post.date}</span>
						    <h3 className="footer-post__title font-main"><a href={post.link}>{post.title}</a></h3>
						  </div>
						</div>
					)
				})
			}
		</div>
  	)
  }

  renderPhotos(){
  	const { pics_title, pics } = this.props.footer;
  	return(
	  	<div className="col-md-4 pull-right col-sm-6 col-xs-8 col-xs-offset-2 col-sm-offset-0 text-left ">
			<h2 className="footer__subtitle font-main">{pics_title}</h2>

			<ul className="list-inline blog-photostream">
			{
				pics.map((pic, i)=>{
					return (
						<li className="img-hover-v2" key={i}>
							<a href={pic.thumbnails} className="cbp-caption cbp-lightbox" title={pic.title}>
								<span><img className="img-responsive" src={pic.img} alt=""/></span>
							</a>
						</li>
				)
				})
			}	
			</ul>
		</div>
	)
  }

  render() {
  	const { footer } = this.props;
    return (
		<footer className="footer">
			<div className="container-fluid pattern-v1--color no-padding">
				<div className="g-pt-60 g-pb-40">
					<div className="container">
						<div className="row">
							<div className="col-md-4 col-sm-6 col-xs-8 col-xs-offset-2 col-sm-offset-0 text-left g-pt-10">
								<img className="img-responsive g-mb-20 footer-logo__img" src={ footer.logo } alt=""/>
								<p className="footer__text g-mb-20">{ footer.description}</p>
								<ul className="list-inline">
								{
									footer.socials.map((social, i) => {
										return (
											<li key={i}>
												<a href={social.link} className="footer__social">
													<i className={"icon-custom icon-sm rounded-x fa fa-" + social.type}></i>
												</a>
											</li>
										)
									})
								}
								</ul>
							</div>

							{/*this.renderPosts()*/}

							{this.renderPhotos()}

						</div>
					</div>
				</div>
			</div>
		</footer>
    );
  }
}

function mapStateToProps(state) {
  return { footer: state.data.all.footer };
}

export default connect(mapStateToProps, null)(Footer);



		
