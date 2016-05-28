//************************************************************************
//																		M O D U L E     I M P O R T S
//************************************************************************
import React from "react";

//***************************************************
//																C O M P O N E N T
//***************************************************
const Input = (props) => {
	const { type, name, value } = props;

	return (
		<input
			type={type}
			name={name}
			value={value}
		/>
	)
};

//************************************************************************
//									E X P O R T 
//************************************************************************
export default Input;