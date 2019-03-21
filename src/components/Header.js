import React, { Component } from 'react';
import './Header.scss';
import MenuList from './MenuList';


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
			<section id='header' className={this.state.displayDropdown && 'menu-expanded'} style={ { opacity: this.state.opacity, } }>
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
				<div className='hamburger-icon' onClick={this.menuClickHandler}>
					{this.state.displayDropdown ? <i className="fas fa-times"></i> : <i className="fas fa-bars" ></i> }
				</div>
				{this.state.displayDropdown && <MenuList />}
			</section>
		);
  	}
}


