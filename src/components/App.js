import React, { Component } from 'react';
import './App.scss';
import Header from './Header.js';
import LandingPage from './LandingPage';
import AboutMe from './AboutMe';
import Skills from './Skills';
import Projects from './Projects';
import Footer from './Footer';

class App extends Component {
	render() {
		return (
			<div className="App">
				<LandingPage />
				<Header />
				<AboutMe />
				<Skills />
				<Projects />
				<Footer />
			</div>
		);
	}
}

export default App;