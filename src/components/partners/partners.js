import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../../actions/index';
import { Link } from 'react-router';

class Patterns extends Component {
  componentWillMount() {
    //this.props.fetchPosts();
  }

  render() {
    return (
		<section id="partners">
			<div className="container">
				<div className="content-lg g-pr-30 g-pl-30">
					<div className="heading-v13 g-pl-100 heading-v13--left text-left g-mb-60">
						<div className="row">
							<div className="col-md-6">
								<span className="heading-v13__block-name">Our Partners</span>
								<h1 className="heading-v13__title font-main g-mb-15">Who trusts us</h1>
							</div>

							<div className="col-md-6">
								<p className="heading-v13__text">Etiam dolor tortor, egestas a libero eget, sollicitudin maximus nulla. Nunc vitae maximus ipsum. Vestibulum sodales nisi massa, vitae blandit massa luctus id.</p>
							</div>
						</div>
					</div>

					<div className="partners">
						<ul className="list-unstyled partners__list">
							<li className="partner__cell partner__cell--first">
								<a href="#" className="partner__cell--link">
									<img className="img-responsive partner__img" src="assets/img-temp/partners/img01.png" alt=""/>
								</a>
							</li>
							<li className="partner__cell partner__cell--2">
								<a href="#" className="partner__cell--link">
									<img className="img-responsive partner__img" src="assets/img-temp/partners/img02.png" alt=""/>
								</a>
							</li>
							<li className="partner__cell partner__cell--3">
								<a href="#" className="partner__cell--link">
									<img className="img-responsive partner__img" src="assets/img-temp/partners/img03.png" alt=""/>
								</a>
							</li>
							<li className="partner__cell partner__cell--4">
								<a href="#" className="partner__cell--link">
									<img className="img-responsive partner__img" src="assets/img-temp/partners/img04.png" alt=""/>
								</a>
							</li>
							<li className="partner__cell partner__cell--5">
								<a href="#" className="partner__cell--link">
									<img className="img-responsive partner__img" src="assets/img-temp/partners/img05.png" alt=""/>
								</a>
							</li>
							<li className="partner__cell partner__cell--6">
								<a href="#" className="partner__cell--link">
									<img className="img-responsive partner__img" src="assets/img-temp/partners/img06.png" alt=""/>
								</a>
							</li>
							<li className="partner__cell partner__cell--7">
								<a href="#" className="partner__cell--link">
									<img className="img-responsive partner__img" src="assets/img-temp/partners/img07.png" alt=""/>
								</a>
							</li>
							<li className="partner__cell partner__cell--8">
								<a href="#" className="partner__cell--link">
									<img className="img-responsive partner__img" src="assets/img-temp/partners/img08.png" alt=""/>
								</a>
							</li>
							<li className="partner__cell partner__cell--9">
								<a href="#" className="partner__cell--link">
									<img className="img-responsive partner__img" src="assets/img-temp/partners/img09.png" alt=""/>
								</a>
							</li>
							<li className="partner__cell partner__cell--10">
								<a href="#" className="partner__cell--link">
									<img className="img-responsive partner__img" src="assets/img-temp/partners/img10.png" alt=""/>
								</a>
							</li>
							<li className="partner__cell partner__cell--11">
								<a href="#" className="partner__cell--link">
									<img className="img-responsive partner__img" src="assets/img-temp/partners/img11.png" alt=""/>
								</a>
							</li>
							<li className="partner__cell partner__cell--last">
								<a href="#" className="partner__cell--link">
									<img className="img-responsive partner__img" src="assets/img-temp/partners/img12.png" alt=""/>
								</a>
							</li>
						</ul>
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

export default connect(mapStateToProps, { fetchPosts })(Patterns);



		
