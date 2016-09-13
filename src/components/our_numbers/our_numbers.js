import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

class OurNumbers extends Component {
  
  renderItem(advantage, i){
  	return (
	  	<div className="counters col-sm-6" key={i}>
			<div className="row">
				<div className="col-md-4 g-pl-30">
					<div className="counter-circle rounded-x">
						<span className="counter">{advantage.counter}</span>
					</div>
				</div>
				<div className="col-md-8 text-left g-pt-40">
					<h4 className="g-mb-10 font-main counters__title">{advantage.h4}</h4>
					<p className="counters__text">{advantage.details}</p>
				</div>
			</div>
		</div>
	);
  }

  renderRow(index){
  	return(
  			<div className="row g-mb-40">
				{index.map((advantage, i) => 
				{return this.renderItem(advantage, i)})}
			</div>
	);
  } 

  render() {
  	const { ourNumbers } = this.props;
    return (
		<section id="numbers">
			<div className="container">
				<div className="content-lg g-pb-80 g-pr-30 g-pl-30">
					<div className="heading-v13 g-pl-100 heading-v13--left text-left g-mb-60">
						<div className="row">
							<div className="col-md-6">
								<span className="heading-v13__block-name">{ourNumbers.title}</span>
								<h1 className="heading-v13__title font-main g-mb-15">{ourNumbers.h1}</h1>
							</div>

							<div className="col-md-6">
								<p className="heading-v13__text">{ourNumbers.description}</p>
							</div>
						</div>
					</div>

						{this.renderRow(ourNumbers.advantages.slice(0,2))}
						{this.renderRow(ourNumbers.advantages.slice(2,4))}
				</div>
			</div>
		</section>
    );
  }
}

function mapStateToProps(state) {
  return { ourNumbers: state.data.all.ourNumbers};
}

export default connect(mapStateToProps, null)(OurNumbers);



		
