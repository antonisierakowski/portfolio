import React, { Component } from 'react';
import './Skills.scss';


export default class Skills extends Component {
	render() {
		return (
			<section id='skills'>
				<div className='center-wrapper'>
					<div className='contents'>
						<h2 className='title'>Skills</h2>
						<h3>In my projects I've been using following technologies:</h3>
						<div className='logos'>
							<i className="fab fa-html5 fa-6x"></i>
							<i className="fab fa-css3-alt fa-6x"></i>
							<i className="fab fa-js-square fa-6x"></i>
							<i className="fi fi-jquery fi-6x"></i>
							<i className="fab fa-git-square fa-6x"></i>
							<i className="fab fa-npm fa-6x"></i>
							<i className="fab fa-node-js fa-6x"></i>
							<i className="fab fa-gulp fa-6x"></i>
							<i className="fi fi-webpack"></i>
							<i className="fab fa-sass fa-6x"></i>
							<i className="fab fa-react fa-6x"></i>
						</div>
						<span>I develop web sites responsively, so they work properly and look good on any device, big or small.</span>
						<h3>In the near future, I'm planning to broaden my knowledge in the following areas:</h3>
						<ul>
							<li>
								Typescript
							</li>
							<li>
								Redux
							</li>
							<li>
								Reakt Native
							</li>
							<li>
								Elektron
							</li>
							<li>
								Node.js
							</li>
						</ul>
					</div>
				</div>
			</section>
		);
	}
}