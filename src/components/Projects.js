import React, { useState } from 'react';
import './Projects.scss';
import ExampleProject from './ExampleProject';
import customCountdown from '../images/custom-countdown.png';
import splitTheChores from '../images/split-the-chores.png';
import pokedex from '../images/pokedex.png';
import basicSynth from '../images/basic-synth.png';
import weatherApp from '../images/weather-app.png';
import gameOfLife from '../images/game-of-life.png';
import { Fade } from 'react-reveal'

const projects = [];

projects[0] = {
    name: 'Custom countdown',
    urlLive: 'https://custom-countdown-a5f02.firebaseapp.com/',
    urlGithub: 'https://github.com/antonisierakowski/custom-countdown',
    tools: ['React Hooks', 'React-router', 'Firebase', 'Material UI', 'styled-components', 'RWD'],
    description: 'App that lets you create customized countdown page, and then share it with anybody, as each created countdown stays on a newly generated unique URL.',
    pic: customCountdown,
}
projects[1] = {
    name: 'Pokédex',
    urlLive: 'https://antonisierakowski.github.io/pokedex/',
    urlGithub: 'https://github.com/antonisierakowski/pokedex',
    tools: ['HTML', 'CSS', 'SASS', 'React', 'Webpack', 'RWD'],
    description: 'Simple Pokédex app made with React.js, using information retrieved from PokéAPI.',
    pic: pokedex,
}
projects[2] = {
	name: 'basic_synth',
    urlLive: 'https://antonisierakowski.github.io/basic_synth/build/index.html',
    urlGithub: 'https://github.com/antonisierakowski/basic_synth',
    tools: ['HTML', 'CSS', 'SASS', 'jQuery', 'Webpack'],
    description: 'Basic sound synthesizer made using jQuery and tone.js package.',
    pic: basicSynth,
}
projects[3] = {
	name: 'Split the Chores',
    urlLive: 'https://antonisierakowski.github.io/split-the-chores/',
    urlGithub: 'https://github.com/antonisierakowski/split-the-chores',
    tools: ['React Hooks', 'Firebase', 'styled-components'],
    description: 'Another boring to-do app? Except it saves the data in Firebase Firestore, and updates in real-time when anything changes. So the chores persist, and anybody accessing the URL can add or remove them.',
    pic: splitTheChores,
}
projects[4] = {
	name: 'Weather App',
    urlLive: 'https://antonisierakowski.github.io/TwojaPogoda.pl/build/index.html',
    urlGithub: 'https://github.com/antonisierakowski/TwojaPogoda.pl',
    tools: ['HTML', 'CSS', 'SASS', 'jQuery', 'Webpack'],
    description: "This apps shows you info about current weather and a 5-day forecast for selected city. Made during Coders' Lab bootcamp.",
    pic: weatherApp,
}
projects[5] = {
	name: 'Game of Life',
    urlLive: 'https://antonisierakowski.github.io/GAME-OF-LIFE/',
    urlGithub: 'https://github.com/antonisierakowski/GAME-OF-LIFE',
    tools: ['HTML', 'CSS', 'Vanilla JS'],
    description: "One of my very first projects. Showcased here to show you how quickly I've progressed ...and also because I got a soft spot for this one.",
    pic: gameOfLife,
}

export default function Projects(_props) {
	const [currentProjectShown, setCurrentProject] = useState(0);

	const handleArrowClick = dir => {
		if (dir === 'left') {
			setCurrentProject((currentProjectShown === 0) ? projects.length - 1 : currentProjectShown - 1)
		}
		if (dir === 'right') {
			setCurrentProject((currentProjectShown === projects.length - 1) ? 0 : currentProjectShown + 1)
		}
	}

	return (
		<section id='projects'>
			<div className='center-wrapper'>
				<div className='contents'>
					<h2 className='title'>MY PROJECTS</h2>
					<Fade right><span>These were made by me to showcase my web development abilities. As I'm constatly working on new projects, this section is definietely going to grow. A few of the older ones here were made during Coders' Lab bootcamp.</span></Fade>
					<Fade left><div className='entries'>
						<ExampleProject data={projects[currentProjectShown]} clickHandler={handleArrowClick}/>
					</div></Fade>
				</div>
			</div>
		</section>
	);
}