import React from 'react';
import './AboutMeParagraph.scss';
import { Fade } from 'react-reveal'

const AboutMeParagraph = props => {
    return (
        <p className='paragraph-content'>
            {props.content}
        </p>
    )
}

export default AboutMeParagraph;