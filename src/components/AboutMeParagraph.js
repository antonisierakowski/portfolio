import React, { Component } from 'react';
import './AboutMeParagraph.scss';

export default class AboutMeParagraph extends Component {
	constructor(props) {
		super(props);
		this.state = {
            collapsed: this.props.collapsed,
		}
    }
    
    handleClick = () => {
        this.setState(prevstate => {
            return { collapsed: !prevstate.collapsed, }
        })
    }

	render() {
        const collapsedContent = this.props.content;
        console.log(this.props.content)
        if (this.state.collapsed === false) {
            return ( 
                <p onClick={this.handleClick} className='paragraph-content'>
                    {this.props.content}
                </p>
            );
        } else {
            return (
                <p onClick={this.handleClick} className={'paragraph-content collapsed'}>
                    {this.props.content}
            </p>
            )
        }


        
		// return ( 
        //     <p onClick={this.handleClick} className={!this.state.collapsed ? 'paragraph-content' : 'paragraph-content collapsed'}>
        //         {this.props.content}
        //     </p>
		// );
	}
}