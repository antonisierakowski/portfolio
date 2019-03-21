import React, { Component } from 'react';
import './MenuList.scss';


export default class MenuList extends Component {
	render() {
		return (
			<div className={'menu-list'}>
				<ul>
					<li><a onClick={this.props.clickHandler} href='#landingPage'>MAIN</a></li>
					<li><a onClick={this.props.clickHandler} href='#aboutMe'>ABOUT ME</a></li>
					<li><a onClick={this.props.clickHandler} href='#skills'>MY SKILLS</a></li>
					<li><a onClick={this.props.clickHandler} href='#projects'>MY PROJECTS</a></li>
					<li><a onClick={this.props.clickHandler} href='#footer'>CONTACT</a></li>
				</ul>
			</div>
		);
	}
}