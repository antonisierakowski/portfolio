import React, { Component } from 'react';
import './DropdownMenu.scss';


export default class DropdownMenu extends Component {
	componentWillMount() {
		this.dropdownClass = 'dropdown-menu hidden'
	}

	render() {
		this.dropdownClass = 'dropdown-menu'
		return (
				<div className={this.dropdownClass}>
					<ul>
						<li><a href='#landingPage'>MAIN</a></li>
						<li><a href='#aboutMe'>ABOUT ME</a></li>
						<li><a href='#skills'>MY SKILLS</a></li>
						<li><a href='#projects'>PROJECTS</a></li>
						<li><a href='#contact'>CONTACT</a></li>
					</ul>
				</div>
		);
	}
}