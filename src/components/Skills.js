import React, { Component } from 'react';
import './Skills.scss';
import '../../node_modules/fontisto/sass/fontisto/fontisto.scss'
import webpackIcon from '../images/icons/webpack.svg';
import reduxIcon from '../images/icons/redux.svg';
import jqueryIcon from '../images/icons/jquery.svg';
import electronIcon from '../images/icons/electronjs.svg';
import typescriptLogo from '../images/icons/typescript.svg'


export default class Skills extends Component {
	render() {
		return (
			<section id='skills'>
				<div className='center-wrapper'>
					<div className='contents'>
						<div className='title-container'><h2 className='title'>My skills</h2></div>
						<div className='my-skills-section'>
							<h3 className='technologies-caption'>In my projects I've been using following technologies:</h3>
							<div className='logos'>
								<i class="fi fi-html5"></i>
								<i class="fi fi-css3"></i>
								<i className="fab fa-js-square"></i>
								<i class="fi fi-jquery"></i>
								<i className="fab fa-git-square"></i>
								<i class="fi fi-git"></i>
								<i class="fi fi-npm"></i>
								<i class="fi fi-gulp"></i>
								<i class="fi fi-webpack"></i>
								<i class="fi fi-sass"></i>
								<i class="fi fi-react"></i>
								
							</div>
						</div>
						<div className='future-skills-section'>
							<div className='future-skills-captions'>
								<span>I develop websites responsively, so they work properly and look good on any device, big or small.</span>
								<h3>In the near future, I'm planning to broaden my knowledge a few areas.</h3>
							</div>
							<div className='future-skills-logos'>
								<div><img src={typescriptLogo}/></div>
								<i class="fi fi-redux"></i>
								<i class="fi fi-electronjs"></i>
								<i className="fab fa-node-js"></i>
							</div>
						</div>
					</div>
				</div>
			</section>
		);
	}
}