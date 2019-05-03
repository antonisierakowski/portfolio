import React, { useState } from 'react';
import './ExampleProject.scss';

export default function ExampleProject(props) {
    const [hovered, setHovered] = useState(false);

    const style = {
        backgroundImage: `url(${props.data.pic})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center center',
        // backgroundColor: 'rgba(0, 0, 0, 0.315);'
    }

    const technologiesUsed = props.data.tools.map(e => <li key={e}>{e}</li>)

    const opacity = {opacity: 0,}
    opacity.opacity = (hovered) ? '1': '0';

    return (
        <div
            className='project' 
            style={style}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            onTouchStart={() => setHovered(true)}
        >
            <div className={hovered ? 'shadow-layer' : 'unhovered'} >
            <i className="fas fa-hand-point-up"></i>
                <div className='project-content' >
                    <div className='top-section'>
                        <span className='description'>{props.data.description}</span>
                    </div>
                    <div className='mid-section'>
                        <i onClick={ () => props.clickHandler('left') } className="fi fi-angle-left project-arrow"></i>
                        <span className='name'>{props.data.name}</span>
                        <i onClick={ () => props.clickHandler('right') } className="fi fi-angle-right project-arrow"></i>
                    </div>
                    <div className='bottom-section'>
                        <ul className='technologies-used'>{technologiesUsed}</ul>
                        <div className='links'>
                            <a className='link' href={props.data.urlLive}>LIVE</a>
                            <a className='link' href={props.data.urlGithub}>GITHUB</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}