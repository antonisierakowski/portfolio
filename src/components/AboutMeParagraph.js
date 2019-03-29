import React from 'react';
import './AboutMeParagraph.scss';

const AboutMeParagraph = props => {
    return (
        <p className='paragraph-content'>
            {props.content}
        </p>
    )
}

export default AboutMeParagraph;