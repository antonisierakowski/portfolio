import React, { Component } from 'react';
import './Header.scss';
import DropdownMenu from './DropdownMenu';


export default class Header extends Component {
	constructor(props) {
		super(props);
		this.state = {
			displayDropdown: false,
			opacity: '0',
		}
	}

	menuClickHandler = () => {
		this.setState( prevstate => {
			return {displayDropdown: !prevstate.displayDropdown};
		})
	}

	componentDidMount() {
		window.addEventListener('scroll', () => {
			if (window.pageYOffset >= document.getElementById('landingPage').clientHeight) {
				this.setState({
					opacity: '1',
				})
			}
			else {
				this.setState({
					opacity: '0',
				})
				
			}
		});
	}
	
	render() {
		return (
			<section id='header' style={ { opacity: this.state.opacity, } }>
				{/* <div className='center-wrapper'>
					<div className='contents'>
						<div className='left-side'>
							
						</div>
						<div className='right-side'>
							<i className="fas fa-bars fa-lg" onClick={this.menuClickHandler}></i>
						</div>
					</div>
					{this.state.displayDropdown && <DropdownMenu />}
				</div> */}
				<div className='hamburger-icon'>
					<i className="fas fa-bars fa-3x" onClick={this.menuClickHandler}></i>
				</div>
			</section>
		);
  	}
}


