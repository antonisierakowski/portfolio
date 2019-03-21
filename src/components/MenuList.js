import React, { Component } from 'react';
import './MenuList.scss';


export default class MenuList extends Component {
	render() {
		return (
				<div className={'menu-list'}>
					<ul>
						<li><a href='#landingPage'>MAIN</a></li>
						<li><a href='#aboutMe'>ABOUT ME</a></li>
						<li><a href='#skills'>MY SKILLS</a></li>
						<li><a href='#projects'>PROJECTS</a></li>
						<li><a href='#footer'>CONTACT</a></li>
					</ul>
				</div>
		);
	}
}