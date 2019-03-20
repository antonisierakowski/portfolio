import React, { Component } from 'react';
import './Footer.scss';


export default class Footer extends Component {
	render() {
		return (
			<section id='footer'>
				<div className='center-wrapper'>
					<div className='contents'>
						<div className='main-info'>
							<h3 className='title'>Kontakt</h3>
							<span><i class="fas fa-phone"></i> 516 077 385</span>
							<span><i class="fas fa-envelope"></i> antonisierakowski@gmail.com</span>
						</div>
						<div className='social-links'>
							<a href='https://github.com/antonisierakowski'><i class="fab fa-github-square fa-2x"></i></a>
							<a href='https://www.linkedin.com/in/antoni-sierakowski/'><i class="fab fa-linkedin fa-2x"></i></a>
						</div>
						<div className='copyright'>Copyright © 2019 Antoni Sierakowski</div>
					</div>
				</div>
			</section>
		);
	}
}