import React, { Component } from 'react';
import './AboutMe.scss';
import portrait from '../images/portrait.png';

export default class AboutMe extends Component {
	render() {
		// const style = {
		// 	backgroundImage: `url(${portrait})`,
		// 	backgroundSize: 'cover',
		// 	backgroundPosition: 'center bottom',
		// 	backgroundRepeat: 'no-repeat',
		// }

		return (
				<section id='aboutMe'>
					<div className='center-wrapper'>
						<div className='contents'>
							<div className='upper-section'>
								<h2 className='title'>About me.</h2>
								<div><img src={portrait} alt='portrait'></img></div>
							</div>
							<div className='lower-section'>
								<p>Ice cream gummi bears marshmallow tiramisu danish tootsie roll apple pie. Bear claw ice cream icing caramels chocolate ice cream. Pudding marzipan jelly-o candy apple pie chocolate sugar plum carrot cake. Toffee wafer sweet cotton candy. Toffee danish gummi bears halvah jelly-o sugar plum bear claw muffin. Lemon drops bear claw bonbon. Marshmallow jelly dragée. Cookie cake halvah tiramisu fruitcake chocolate bar cake donut donut. Bonbon cake fruitcake topping jelly-o pastry sugar plum jelly-o chocolate. Wafer cupcake danish candy canes jelly beans. Cheesecake gummies tiramisu cake oat cake dragée dessert. Candy gummies gingerbread chocolate.</p>
								<p>Wafer tart jelly-o tootsie roll fruitcake tiramisu. Gummies candy canes bear claw cake macaroon gummies candy canes cake jelly-o. Wafer chocolate bar chupa chups cupcake pie cotton candy.</p>
								<p>Topping cake cheesecake pudding candy. Oat cake chocolate chupa chups topping apple pie. Sugar plum chocolate bar chupa chups. Pudding oat cake gingerbread cotton candy oat cake cake chocolate cake danish.</p>
							</div>
						</div>
					</div>
				</section>
		);
	}
}