import React from 'react';
import './MenuList.scss';


const MenuList = props => {
	return (
		<div className={'menu-list'}>
			<ul>
				<li><a onClick={props.clickHandler} href='#landingPage'>MAIN</a></li>
				<li><a onClick={props.clickHandler} href='#aboutMe'>ABOUT ME</a></li>
				<li><a onClick={props.clickHandler} href='#skills'>MY SKILLS</a></li>
				<li><a onClick={props.clickHandler} href='#projects'>MY PROJECTS</a></li>
				<li><a onClick={props.clickHandler} href='#footer'>CONTACT</a></li>
			</ul>
		</div>
	);
}

export default MenuList;