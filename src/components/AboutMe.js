import React, { Component } from 'react';
import './AboutMe.scss';
import portrait from '../images/portrait.png';

export default class AboutMe extends Component {
	render() {
		const style = {
			backgroundImage: `url(${portrait})`,
			backgroundSize: 'cover',
			backgroundPosition: 'center bottom',
			backgroundRepeat: 'no-repeat',
		}

		return (
				<div id='about-me' style={style}>
					<div className='center-wrapper'>
						<div className='contents'>
							hejo
						</div>
					</div>
				</div>
		);
	}
}