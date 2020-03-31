import React, { Component } from 'react';

class Box extends Component{

	state = {
		name: 'Brandon'
	}
	
	render(){
		return(
				<div className='d-flex justify-content-center align-items-center'>
	              <div
	                style = {{
	                  width: '300px',
	                  height: '300px',
	                  border: '5px solid black'
	                                }}
	                  className='d-flex justify-content-center align-items-center flex-column'
	              >
	              	<h1 
	              		style={{
	              			fontSize: '60px'
	              		}}>
	              		{this.state.name}:

	              	</h1>
	              	<h1 
		              	style={{
		              		fontSize: '120px'
	              	}}>{this.props.count}</h1>
	              </div>
	            </div>
			)
	}
}

export default Box;