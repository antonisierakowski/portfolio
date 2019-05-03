import React, { useState } from 'react';
import './Projects.scss';
import ExampleProject from './ExampleProject';
import customCountdown from '../images/custom-countdown.png';
import splitTheChores from '../images/split-the-chores.png';
import pokedex from '../images/pokedex.png';
import basicSynth from '../images/basic-synth.png';
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
					<Fade right><span>These were made by me to showcase my web development abilities. As I'm constatly working on new projects, this section is subject to dynamically change.</span></Fade>
					<Fade left><div className='entries'>
						<ExampleProject data={projects[currentProjectShown]} clickHandler={handleArrowClick}/>
					</div></Fade>
				</div>
			</div>
		</section>
	);
}