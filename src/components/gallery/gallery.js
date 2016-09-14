import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

class Gallery extends Component {
  
  renderImg(pic){
  	return (
  		<div className="cbp-item">
			<a href={pic.img} className="cbp-caption cbp-lightbox" data-title={pic.data_title}>
				<div className="cbp-caption-defaultWrap">
					<img src={pic.img} alt=""/>
				</div>
				<div className="cbp-caption-activeWrap">
					<div className="cbp-l-caption-alignCenter">
						<div className="cbp-l-caption-body">
							<div className="cbp-l-caption-title">{ pic.title }</div>
							<p>{ pic.description}</p>
						</div>
					</div>
				</div>
			</a>
		</div>
  	);
  }

  render() {
  	const { gallery } = this.props;

    return (
		<section id="gallery">
			<div className="g-pb-100">
				<div className="container">
					<div className="g-pr-40 g-pl-40">
						<div className="heading-v13 g-pl-100 heading-v13--left text-left g-mb-60">
								<div className="row">
									<div className="col-md-12">
										<span className="heading-v13__block-name">{ gallery.title }</span>
										<h1 className="heading-v13__title font-main g-mb-15">{ gallery.description}</h1>
									</div>
								</div>
						</div>
					</div>
				</div>

				<div className="container-fluid">
					<div className="cube-portfolio cube-portfolio--mod">
						<div id="grid-container" className="cbp-l-grid-gallery">
							{
								gallery.pics.map((pic) => {
									return this.renderImg(pic)
								})
							}
						</div>
					</div>
				</div>
			</div>
		</section>
    );
  }
}

function mapStateToProps(state) {
  return { gallery: state.data.all.gallery };
}

export default connect(mapStateToProps,  null)(Gallery);



		
