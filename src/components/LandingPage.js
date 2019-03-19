import React, { Component } from 'react';
import './LandingPage.scss';
import portrait from '../images/portrait.png';

export default class LandingPage extends Component {
	render() {
		const style = {
			backgroundImage: `url(${portrait})`,
			backgroundSize: 'cover',
			backgroundPosition: 'center bottom',
			backgroundRepeat: 'no-repeat',
		}
		return (
				<div className='landing-page' style={style}>
						<div className='container'>
								<span>Hi. My name is <p className='emphasized'>Antoni Sierakowski</p> and I'm a front-end web developer.</span>
								<div className='view-more-button'>Show me more! <i className="fas fa-arrow-alt-circle-right"></i></div>
						</div>
				</div>
		);
	}
}


