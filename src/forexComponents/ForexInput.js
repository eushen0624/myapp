import React, { Component } from 'react';
import { FormGroup, Label, Input} from 'reactstrap';

class ForexInput extends Component{
	render(){
		return(
				<FormGroup>
					<Label>{ this.props.label }</Label>
					<Input 
						placeholder = { this.props.placeholder }
						defaultValue = { this.props.defaultValue}
						onChange = { this.props.onChange}
						type = 'number'/>
				</FormGroup>
			)
	}
}
export default ForexInput;