import React, { Component } from 'react';
import './Header.scss';
import DropdownMenu from './DropdownMenu';


export default class Header extends Component {
	constructor(props) {
		super(props);
		this.state = {
			displayDropdown: false,
			position: 'static'
		}
	}

	menuClickHandler = () => {
		this.setState( prevstate => {
			return {displayDropdown: !prevstate.displayDropdown};
		})
	}

	componentDidMount() {
		window.addEventListener('scroll', (event) => {
			if (window.pageYOffset >= document.getElementById('landingPage').clientHeight) {
				this.setState({
					position: 'fixed',
				})
			}
			else {
				this.setState({
					position: 'relative',
				})
				
			}
		});
	}
	
	render() {
		console.log(this.positon)
		return (
			<section id='header' style={ { position: this.state.position, } }>
				<div className='center-wrapper'>
					<div className='contents'>
						<div className='left-side'>
							{/* <span>Antoni Sierakowski</span> */}
						</div>
						<div className='right-side'>
							<i className="fas fa-bars fa-lg" onClick={this.menuClickHandler}></i>
						</div>
					</div>
					{/* {this.state.displayDropdown && <DropdownMenu />} */}
				</div>
			</section>
		);
  	}
}


