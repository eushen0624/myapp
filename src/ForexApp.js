import React, { Component } from 'react';
import Forex from './forexComponents/Forex'

class ForexApp extends Component {
	render(){
		return(
			<div className ='bg-secondary d-flex justify-content-center align-items-center vh-100'>
				<Forex />
			</div>
			)
	}
}

export default ForexApp;