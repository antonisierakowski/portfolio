import React, { Component } from 'react';
import './Skills.scss';


export default class Skills extends Component {
	render() {
		return (
			<section id='skills'>
				<div className='center-wrapper'>
					<div className='contents'>
						<h2 className='title'>Skills</h2>
						<div className='logos'>
							<i class="fab fa-html5 fa-6x"></i>
							<i class="fab fa-css3-alt fa-6x"></i>
							<i class="fab fa-js-square fa-6x"></i>
							<i class="fi fi-jquery fi-6x"></i>
							<i class="fab fa-git-square fa-6x"></i>
							<i class="fab fa-npm fa-6x"></i>
							<i class="fab fa-node-js fa-6x"></i>
							<i class="fab fa-gulp fa-6x"></i>
							<i class="fi fi-webpack"></i>
							<i class="fab fa-sass fa-6x"></i>
							<i class="fab fa-react fa-6x"></i>
						</div>
					</div>
				</div>
			</section>
		);
	}
}