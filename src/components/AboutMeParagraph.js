import React, { Component } from 'react';
import './AboutMeParagraph.scss';

export default class AboutMeParagraph extends Component {
	render() {
        return (
            <p className='paragraph-content'>
                {this.props.content}
            </p>
        )
	}
}