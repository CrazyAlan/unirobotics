import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

class Partners extends Component {
  
  renderPartners(){
  	const { pics } = this.props.partners;

  	return (
  		<div className="partners">
			<ul className="list-unstyled partners__list">
			{
				pics.map((pic, i) => {
					return (
						<li className="partner__cell partner__cell--first" key={i}>
							<a href={pic.link} className="partner__cell--link">
								<img className="img-responsive partner__img" src={pic.img} alt=""/>
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
  	const { partners } = this.props;
    return (
		<section id="partners">
			<div className="container">
				<div className="content-lg g-pr-30 g-pl-30">
					<div className="heading-v13 g-pl-100 heading-v13--left text-left g-mb-60">
						<div className="row">
							<div className="col-md-6">
								<span className="heading-v13__block-name">{ partners.title}</span>
								<h1 className="heading-v13__title font-main g-mb-15">{ partners.h1 }</h1>
							</div>

							<div className="col-md-6">
								<p className="heading-v13__text">{ partners.description }</p>
							</div>
						</div>
					</div>

					{
						this.renderPartners()
					}
				</div>
			</div>
		</section>
    );
  }
}

function mapStateToProps(state) {
  return { partners: state.data.all.partners };
}

export default connect(mapStateToProps, null)(Partners);



		
