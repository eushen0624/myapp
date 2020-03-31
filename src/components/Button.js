import React, { Component } from 'react';

class Button extends Component {
	render(){
		return(
			//Step 4: Use the function we received as property in our event listener property(onClick)
			<button className = { this.props.color } onClick = { this.props.handleOnclick }>
				{ this.props.text }
			</button>
			)
	}
}

export default Button;