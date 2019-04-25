import React from 'react';
import './LandingPage.scss';
import { Fade } from 'react-reveal'
import Pulse from 'react-reveal/Pulse';

const LandingPage = () => {
	return (
		<div id='landingPage'>
			<Fade duration={2000}>
				<div className='container'>
					<span>Hi. My name is <Pulse delay={1000}><p className='emphasized'>Antoni Sierakowski</p></Pulse> and I'm a junior front-end web developer.</span>
					<a href='#aboutMe'><div className='view-more-button'>Show me more! <i className="fas fa-arrow-alt-circle-right"></i></div></a>
				</div>
			</Fade>
		</div>
	);
}

export default LandingPage;