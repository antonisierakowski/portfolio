import React, { Component } from 'react';
import './DropdownMenu.scss';


export default class DropdownMenu extends Component {
	componentWillMount() {
		this.dropdownClass = 'dropdown-menu-hidden'
	}

	render() {
		this.dropdownClass = 'dropdown-menu'
		return (
				<div className={this.dropdownClass}>
					asd
				</div>
		);
	}
}