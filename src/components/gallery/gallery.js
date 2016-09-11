import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../../actions/index';
import { Link } from 'react-router';

class Gallery extends Component {
  componentWillMount() {
    //this.props.fetchPosts();
  }

  render() {
    return (
		<section id="gallery">
			<div className="g-pb-100">
				<div className="container">
					<div className="g-pr-40 g-pl-40">
						<div className="heading-v13 g-pl-100 heading-v13--left text-left g-mb-60">
								<div className="row">
									<div className="col-md-12">
										<span className="heading-v13__block-name">Gallery</span>
										<h1 className="heading-v13__title font-main g-mb-15">View how it looks</h1>
									</div>
								</div>
						</div>
					</div>
				</div>

				<div className="container-fluid">
					<div className="cube-portfolio cube-portfolio--mod">
						<div id="grid-container" className="cbp-l-grid-gallery">
							<div className="cbp-item">
								<a href="assets/img-temp/gallery1.jpg" className="cbp-caption cbp-lightbox" data-title="	custom title 1">
									<div className="cbp-caption-defaultWrap">
										<img src="assets/img-temp/gallery1.jpg" alt=""/>
									</div>
									<div className="cbp-caption-activeWrap">
										<div className="cbp-l-caption-alignCenter">
											<div className="cbp-l-caption-body">
												<div className="cbp-l-caption-title">Courses for kids</div>
												<p>Nam ullamcorper mauris ex, ut efficitur est convallis nec</p>
											</div>
										</div>
									</div>
								</a>
							</div>

							<div className="cbp-item">
								<a href="assets/img-temp/gallery2.jpg" className="cbp-caption cbp-lightbox" data-title="custom title 2">
									<div className="cbp-caption-defaultWrap">
										<img src="assets/img-temp/gallery2.jpg" alt=""/>
									</div>
									<div className="cbp-caption-activeWrap">
										<div className="cbp-l-caption-alignCenter">
											<div className="cbp-l-caption-body">
												<div className="cbp-l-caption-title">Cooking class</div>
												<p>Nam ullamcorper mauris ex, ut efficitur est convallis nec</p>
											</div>
										</div>
									</div>
								</a>
							</div>

							<div className="cbp-item">
								<a href="assets/img-temp/gallery3.jpg" className="cbp-caption cbp-lightbox" data-title="custom title 3">
									<div className="cbp-caption-defaultWrap">
										<img src="assets/img-temp/gallery3.jpg" alt=""/>
									</div>
									<div className="cbp-caption-activeWrap">
										<div className="cbp-l-caption-alignCenter">
											<div className="cbp-l-caption-body">
												<div className="cbp-l-caption-title">Personalized lessons</div>
												<p>Nam ullamcorper mauris ex, ut efficitur est convallis nec</p>
											</div>
										</div>
									</div>
								</a>
							</div>

							<div className="cbp-item">
								<a href="assets/img-temp/gallery4.jpg" className="cbp-caption cbp-lightbox" data-title="custom title 4">
									<div className="cbp-caption-defaultWrap">
										<img src="assets/img-temp/gallery4.jpg" alt=""/>
									</div>
									<div className="cbp-caption-activeWrap">
										<div className="cbp-l-caption-alignCenter">
											<div className="cbp-l-caption-body">
												<div className="cbp-l-caption-title">Discussions in class</div>
												<p>Nam ullamcorper mauris ex, ut efficitur est convallis nec</p>
											</div>
										</div>
									</div>
								</a>
							</div>

							<div className="cbp-item">
								<a href="assets/img-temp/gallery5.jpg" className="cbp-caption cbp-lightbox" data-title="custom title 5">
									<div className="cbp-caption-defaultWrap">
										<img src="assets/img-temp/gallery5.jpg" alt=""/>
									</div>
									<div className="cbp-caption-activeWrap">
										<div className="cbp-l-caption-alignCenter">
											<div className="cbp-l-caption-body">
												<div className="cbp-l-caption-title">Gymnastics for elderly</div>
												<p>Nam ullamcorper mauris ex, ut efficitur est convallis nec</p>
											</div>
										</div>
									</div>
								</a>
							</div>

							<div className="cbp-item">
								<a href="assets/img-temp/gallery6.jpg" className="cbp-caption cbp-lightbox" data-title="custom title 6">
									<div className="cbp-caption-defaultWrap">
										<img src="assets/img-temp/gallery6.jpg" alt=""/>
									</div>
									<div className="cbp-caption-activeWrap">
										<div className="cbp-l-caption-alignCenter">
											<div className="cbp-l-caption-body">
												<div className="cbp-l-caption-title">Arts for elderly</div>
												<p>Nam ullamcorper mauris ex, ut efficitur est convallis nec</p>
											</div>
										</div>
									</div>
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
    );
  }
}

function mapStateToProps(state) {
  return { posts: state.posts.all };
}

export default connect(mapStateToProps, { fetchPosts })(Gallery);



		
