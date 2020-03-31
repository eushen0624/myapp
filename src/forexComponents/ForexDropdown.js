import React, { Component } from 'react';
import { FormGroup, Label, Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import Currencies from './ForexData';

class ForexDropdown extends Component{

	state = {
		dropdownIsOpen: false,
		currency: null
	}
	render(){
		// console.log(Currencies);

		return(
				<FormGroup>
					<Label>
						{this.props.label}
					</Label>
					<Dropdown 
						isOpen = { this.state.dropdownIsOpen }
						toggle = { () => this.setState({ dropdownIsOpen: !this.state.dropdownIsOpen})}>
						<DropdownToggle caret> {!this.props.currency ? "Choose Currency" : this.props.currency.currency}
						</DropdownToggle>
						<DropdownMenu>
							{Currencies.map((currency, index) => (
									<DropdownItem 
									key = { index }
									onClick = { () => this.props.onClick(currency)	}>
 
									{currency.currency }
									</DropdownItem>
								))}

						</DropdownMenu>
					</Dropdown>
				</FormGroup>
			);
	}
}

export default ForexDropdown;