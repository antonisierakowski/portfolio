import React, { Component } from 'react';
import './Header.scss';
import DropdownMenu from './DropdownMenu';


export default class Header extends Component {
	constructor(props) {
		super(props);
		this.state = {
			displayDropdown: false,
		}
	}

	menuClickHandler = () => {
		this.setState( prevstate => {
			return {displayDropdown: !prevstate.displayDropdown};
		})
	}
	
	render() {
		return (
			<div className='header'>
				<div className='center-wrapper'>
					<div className='contents'>
						<div className='left-side'>
							{/* <span>Antoni Sierakowski</span> */}
						</div>
						<div className='right-side'>
							<i className="fas fa-bars fa-lg" onClick={this.menuClickHandler}></i>
						</div>
					</div>
				</div>
				{this.state.displayDropdown && <DropdownMenu />}
			</div>
		);
  	}
}


