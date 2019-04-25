import React from 'react';
import './Skills.scss';
import '../../node_modules/fontisto/sass/fontisto/fontisto.scss'
import typescriptLogo from '../images/icons/typescript.svg'
import { Tooltip } from '@material-ui/core'
import { Fade } from 'react-reveal'

const Skills = () => {
	return (
		<section id='skills'>
			<div className='center-wrapper'>
				<div className='contents'>
					<Fade right><div className='title-container'><h2 className='title'>MY SKILLS</h2></div></Fade>
					<div className='my-skills-section'>
						<Fade left><h3 className='technologies-caption'>In my projects I've been using following technologies:</h3></Fade>
						<Fade right><div className='logos'>
							<Tooltip title='HTML5'><i className="fi fi-html5"></i></Tooltip>
							<Tooltip title='CSS3'><i className="fi fi-css3"></i></Tooltip>
							<Tooltip title='JavaScript ES6'><i className="fab fa-js-square"></i></Tooltip>
							<Tooltip title='jQuery'><i className="fi fi-jquery"></i></Tooltip>
							<Tooltip title='GIT'><i className="fi fi-git"></i></Tooltip>
							<Tooltip title='NPM'><i className="fi fi-npm"></i></Tooltip>
							<Tooltip title='Gulp'><i className="fi fi-gulp"></i></Tooltip>
							<Tooltip title='Webpack'><i className="fi fi-webpack"></i></Tooltip>
							<Tooltip title='SASS'><i className="fi fi-sass"></i></Tooltip>
							<Tooltip title='React (including hooks API)'><i className="fi fi-react"></i></Tooltip>
							<Tooltip title='Redux'><i className="fi fi-redux"></i></Tooltip>
						</div></Fade>
					</div>
					<div className='future-skills-section'>
						<Fade right><div className='future-skills-captions'>
							<h3>I'm constantly learning to use new tools - in the near future, I'm planning to broaden my knowledge in these areas.<i className="fi fi-arrow-left-l"></i></h3>
							<span>I am able to develop websites responsively, so they work properly and look good on any device, big or small.</span>
							
						</div></Fade>
						<Fade left><div className='future-skills-logos'>
							<Tooltip title='TypeScript'><div><img alt='typescript-logo' src={typescriptLogo}/></div></Tooltip>
							<Tooltip title='ElectronJS'><i className="fi fi-electronjs"></i></Tooltip>
							<Tooltip title='Node.js'><i className="fab fa-node-js"></i></Tooltip>
						</div></Fade>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Skills;