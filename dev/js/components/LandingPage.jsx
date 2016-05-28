//************************************************************************
//																		M O D U L E     I M P O R T S
//************************************************************************
import React from 'react';
//************************************************************************
//																	C O M P O N E N T    I M P O R T S
//************************************************************************
import Button from './Button.jsx';


//***************************************************
//																C O M P O N E N T
//***************************************************
const LandingPage = (props) => {
	const { onClick } = props;
	return (
		<section className="contentContainer">
			<div className="contentContainer__descriptionWrapper">
			  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos modi, nulla necessitatibus praesentium, corporis dolores officia. Dicta enim aliquam dolorem voluptatibus, minus qui nesciunt, amet deleniti natus ducimus perspiciatis corrupti.
			  </p>
			</div>
			<div className="contentContainer__heroButtonWrapper">
			  <Button 
			    text="button test"
			    classes="heroButtonWrapper__heroButton"
			    onClick={onClick}
			  />
			</div>
		</section>
	)
}

//************************************************************************
//																	C O M P O N E N T   E X P O R T
//************************************************************************
export default LandingPage;