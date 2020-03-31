import React, { Component } from 'react';
import Button from './Button';

class Buttons extends Component {
	render(){
		return(
			<div 
			className='d-flex justify-content-around align-items-center' style ={{ margin: '100px 200px'
				}}
				>

			<Button 
				color = { 'btn-info'}
				text = { '+1' }
				//Step 3: pass the function we received as a property to Button Component
				handleOnclick = { this.props.handleAdd }
				/>
			<Button
				color = { 'btn-warning'}
				text = { '-1' }
				handleOnclick = { this.props.handleSubtract }
				
			 />
			<Button 
				color = { 'btn-success'}
				text = { 'Reset' }
				handleOnclick = { this.props.handleReset }
			/>
			<Button 
				color = { 'btn-secondary'}
				text = { 'x2' }
				handleOnclick = { this.props.handleMultiply }
			/>
			</div>
			)
	}
}

export default Buttons;