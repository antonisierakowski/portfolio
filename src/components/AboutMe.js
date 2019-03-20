import React, { Component } from 'react';
import './AboutMe.scss';
import portrait from '../images/portrait.png';
import AboutMeParagraph from './AboutMeParagraph';

const p1 = <span><i className="fas fa-hand-point-right"></i> <span className='emphasized'>My name is Antoni.</span> I'm a graduate of Coders' Lab programming bootcamp held here in Poland, where I've learned solid fundamentals of web development. It pushed me to hone my newly acquired skills on my own - which I'm currently doing every day. Im dedicated at getting better in <span className='emphasized'>developing fast, dynamic, intuitive and responsive web apps.</span></span>
const p2 = <span><i className="fas fa-hand-point-right"></i> Since I can remember, I've always had an interest in, forgive the term, 'nerdy' stuff: when I was 10 years old, I'd write simple programs in BASIC on an 80's computer, or write turbo pascal apps on MS-DOS PC. I remember creating my first website when I was around 12, it was back when you had to design your layout around tables, crazy stuff. Recently I've even been trying to make a game for 90's gaming console using its assembly language! What I'm trying to say, is that programming has always been somewhere back in my mind - until I actually took up the challenge to become a developer. That's a lot of fun, but for now I prefer to stick to, let's say, more current stuff...</span>
const p3 = <span><i className="fas fa-hand-point-right"></i> Right now, I'm looking for <span className='emphasized'>steady employment as a junior front-end developer</span>, which would open up ways for me to develop my skills and contribute to exciting projects. If you're interested, I'd be thrilled to hear from you!</span>;
const p4 = <span><i className="fas fa-hand-point-right"></i> Fun fact! I'm also an actively working electronic music producer. I've spent many years developing my skills in sound design, mixing, mastering and composition - and see a lot of parallels between making music and programming. If you're interested in my music, check out my <a href='https://soundcloud.com/sieraque'>soundcloud!</a></span>;

export default class AboutMe extends Component {
	constructor(props) {
		super(props);
		this.state = {

		}
	}
	render() {
		return (
			<section id='aboutMe'>
				<div className='center-wrapper'>
					<div className='contents'>
						<div className='upper-section'>
							<h2 className='title'>About me.</h2>
							<div><img src={portrait} alt='portrait'></img></div>
						</div>
						<div className='paragraphs'>
							<AboutMeParagraph content={p1} collapsed={false} /> 							
							<AboutMeParagraph content={p2} collapsed={true} /> 	
							<AboutMeParagraph content={p3} collapsed={false} /> 	
							<AboutMeParagraph content={p4} collapsed={true} /> 	
						</div>
					</div>
				</div>
			</section>
		);
	}
}