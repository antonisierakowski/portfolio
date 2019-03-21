import React, { Component } from 'react';
import './ExampleProject.scss';

export default class ExampleProject extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hovered: false,
        }
    }

    mouseEnterHandler = () => {
        this.setState({
            hovered: true,
        })
    }
    
    mouseLeaveHandler = () => {
        this.setState({
            hovered: false,
        })
    }

	render() {
        const style = {
            backgroundImage: `url(${this.props.data.pic})`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center center',
            // backgroundColor: 'rgba(0, 0, 0, 0.315);'
        }

        const technologiesUsed = this.props.data.tools.map(e => <li key={e}>{e}</li>)

        const opacity = {opacity: 0,}
        opacity.opacity = (this.state.hovered) ? '1': '0';

		return (
			<div className='project' style={style} onMouseEnter={this.mouseEnterHandler} onMouseLeave={this.mouseLeaveHandler}>
                <div className='shadow-layer' style={opacity}>
                    <div className='project-content'>
                        <div className='top-section'>
                            
                            <span className='description'>{this.props.data.description}</span>
                        </div>
                        <div className='mid-section'>
                            <i onClick={ () => this.props.clickHandler('left') } className="fi fi-angle-left"></i>
                            <span className='name'>{this.props.data.name}</span>
                            <i onClick={ () => this.props.clickHandler('right') } className="fi fi-angle-right"></i>
                        </div>
                        <div className='bottom-section'>
                            <ul className='technologies-used'>{technologiesUsed}</ul>
                            <div className='links'>
                                <a className='link' href={this.props.data.urlLive}>LIVE</a>
                                <a className='link' href={this.props.data.urlGithub}>GITHUB</a>
                            </div>
                        </div>
                    </div>
                </div>
			</div>
		);
	}
}