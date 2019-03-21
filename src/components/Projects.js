import React, { Component } from 'react';
import './Projects.scss';
import ExampleProject from './ExampleProject';
import pokedex from '../images/pokedex.png';
import basicSynth from '../images/basic-synth.png';
import weatherApp from '../images/weather-app.png';
import gameOfLife from '../images/game-of-life.png';

const projects = [];
projects[0] = {
    name: 'Pokédex',
    urlLive: 'https://antonisierakowski.github.io/pokedex/',
    urlGithub: 'https://github.com/antonisierakowski/pokedex',
    tools: ['HTML', 'CSS', 'SASS', 'React', 'Webpack', 'RWD'],
    description: 'Simple Pokédex app made with React.js, using info from PokéAPI.',
    pic: pokedex,
}
projects[1] = {
	name: 'basic_synth',
    urlLive: 'https://antonisierakowski.github.io/basic_synth/build/index.html',
    urlGithub: 'https://github.com/antonisierakowski/basic_synth',
    tools: ['HTML', 'CSS', 'SASS', 'jQuery', 'Webpack'],
    description: 'Basic synthesizer made using jQuery and tone.js pack.',
    pic: basicSynth,
}
projects[2] = {
	name: 'Weather App',
    urlLive: 'https://antonisierakowski.github.io/TwojaPogoda.pl/build/index.html',
    urlGithub: 'https://github.com/antonisierakowski/TwojaPogoda.pl',
    tools: ['HTML', 'CSS', 'SASS', 'jQuery', 'Webpack'],
    description: "App showing you current weather and one-week forecast for selected city. Made during Coders' Lab bootcamp.",
    pic: weatherApp,
}
projects[3] = {
	name: 'Game of Life',
    urlLive: 'https://antonisierakowski.github.io/GAME-OF-LIFE/',
    urlGithub: 'https://github.com/antonisierakowski/GAME-OF-LIFE',
    tools: ['HTML', 'CSS', 'Vanilla JS'],
    description: "One of my very first projects. Showcased here to show you how quickly I've progressed ...and also because I got a soft spot for this one.",
    pic: gameOfLife,
}


export default class Projects extends Component {
	constructor(props) {
		super(props);
		this.state = {
			currentProjectShown: 0,
		}
	}

	handleArrowClick = dir => {
		if (dir === 'left') {
			this.setState({
				currentProjectShown: (this.state.currentProjectShown === 0) ? projects.length - 1 : this.state.currentProjectShown - 1,
			})
		}
		if (dir === 'right') {
			this.setState({
				currentProjectShown: (this.state.currentProjectShown === projects.length - 1) ? 0 : this.state.currentProjectShown + 1,
			})
		}
	}

	render() {
		return (
			<section id='projects'>
				<div className='center-wrapper'>
					<div className='contents'>
						<h2 className='title'>MY PROJECTS</h2>
						<span>These were made by me to showcase my web development abilities. I'm constatly working on new projects, so this section will grow. A few of these were made during Coders' Lab bootcamp, specified if true.</span>
						<div className='entries'>
							<i onClick={ () => this.handleArrowClick('left') } className="fi fi-angle-left"></i>
							<i onClick={ () => this.handleArrowClick('right') } className="fi fi-angle-right"></i>
							<ExampleProject data={projects[this.state.currentProjectShown]}/>
						</div>
					</div>
				</div>
			</section>
		);
	}
}