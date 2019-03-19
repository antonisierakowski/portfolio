import React, { Component } from 'react';
import './LandingPage.scss';


export default class LandingPage extends Component {
	render() {
		return (
				<div className='landing-page'>
						<div className='container'>
								<span>Hi. My name is <p className='emphasized'>Antoni Sierakowski</p> and I'm a front-end web developer.</span>
								<a href='#about-me'><div className='view-more-button'>Show me more! <i className="fas fa-arrow-alt-circle-right"></i></div></a>
						</div>
				</div>
		);
	}
}


