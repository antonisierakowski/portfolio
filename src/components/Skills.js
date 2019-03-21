import React, { Component } from 'react';
import './Skills.scss';
import '../../node_modules/fontisto/sass/fontisto/fontisto.scss'
import typescriptLogo from '../images/icons/typescript.svg'

export default class Skills extends Component {
	render() {
		return (
			<section id='skills'>
				<div className='center-wrapper'>
					<div className='contents'>
						<div className='title-container'><h2 className='title'>MY SKILLS</h2></div>
						<div className='my-skills-section'>
							<h3 className='technologies-caption'>In my projects I've been using following technologies:</h3>
							<div className='logos'>
								<i onMouseEnter={this.handleMouseEnter} key='front' className="fi fi-html5"></i>
								<i className="fi fi-css3"></i>
								<i className="fab fa-js-square"></i>
								<i className="fi fi-jquery"></i>
								<i className="fab fa-git-square"></i>
								<i className="fi fi-git"></i>
								<i className="fi fi-npm"></i>
								<i className="fi fi-gulp"></i>
								<i className="fi fi-webpack"></i>
								<i className="fi fi-sass"></i>
								<i className="fi fi-react"></i>
							</div>
						</div>
						<div className='future-skills-section'>
							<div className='future-skills-captions'>
								<h3>I'm constantly learning to use new tools - in the near future, I'm planning to broaden my knowledge in these areas.<i className="fi fi-arrow-left-l"></i></h3>
								<span>I am able to develop websites responsively, so they work properly and look good on any device, big or small.</span>
								
							</div>
							<div className='future-skills-logos'>
								<div><img alt='typescript-logo' src={typescriptLogo}/></div>
								<i className="fi fi-redux"></i>
								<i className="fi fi-electronjs"></i>
								<i className="fab fa-node-js"></i>
							</div>
						</div>
					</div>
				</div>
			</section>
		);
	}
}