import React, { Component } from 'react';
import ForexDropdown from './ForexDropdown';
import ForexInput from './ForexInput';
import { Button } from 'reactstrap';
import { Table } from 'reactstrap';

class Forex extends Component {
	state = {
		amount: 0,
		baseCurrency: null,
		targetCurrency: null,
		convertedAmount: null,
		currencyError: "",
		amountError: "",
		tableRates: []
	}

	handleAmount = e => {
		this.setState({
			amount: e.target.value
		});
	}

	handleBaseCurrency = currency =>{
		this.setState({
			baseCurrency: currency
		});
	}

	handleTargetCurrency = currency => {
		this.setState({
			targetCurrency: currency
		});
	}

	handleValidation = () => {
		let currencyError = "";
		let amountError = "";

		if(this.state.baseCurrency == null || this.state.targetCurrency == null){
			currencyError = "Please Select the Base and Target Currencies!";
		}

		if(this.state.amount <= 0){
			amountError = "Please a valid amount!";
		}
 
		if(currencyError){
			this.setState({currencyError});
			return false;
		}

		if(amountError){
			this.setState({amountError});
			this.setState({currencyError: ""});
			this.setState({convertedAmount: 0});
			return false;
		}


		return true;
	}

	handleConvert = () => {
		
		const isVAlid = this.handleValidation();

		if(isVAlid){
			const code = this.state.baseCurrency.code;
			fetch('https://api.exchangeratesapi.io/latest?base=' + code)
			.then( res => res.json())
			.then( res => {
				const targetCode = this.state.targetCurrency.code;

				const rates = res.rates;

				const rate = res.rates[targetCode];

				this.setState({})
				this.setState({convertedAmount: (this.state.amount * rate) + " " + targetCode });
				this.setState({currencyError: ""});
				this.setState({amountError: ""});

		});
		}

	}

	render(){

		console.log(this.state.amount);
		return(
			<div style={{ width: "70%"}}>
				<h1 className="text-center my-5">
					Forex Calculator
				</h1>
				<div className='d-flex justify-content-around' style={{margin: '0 200px'}}>
					<ForexDropdown 
						label = {'Base Currency'} 
						onClick = { this.handleBaseCurrency} 
						currency = { this.state.baseCurrency}/>
						
					<ForexDropdown 
						label = {'Target Currency'} 
						onClick = { this.handleTargetCurrency}
						currency = { this.state.targetCurrency}/>
						
				</div>

				<div className='d-flex justify-content-around' >
					<ForexInput 
						label = { 'Amount' }
						placeholder = { 'Amount to Convert'} 
						onChange = { this.handleAmount } />

						<Button 
							color='info' 
							onClick = { this.handleConvert }>
							Convert
						</Button>
					
				</div>
				<div>
					<div>
						{this.state.currencyError}
						{this.state.amountError}
						
					</div>
					<h1 className='text-center'>
					{this.state.convertedAmount}
					</h1>


				</div>

				<div className='d-flex justify-content-center' style={{width: '50%'}}>
					<Table>
						<thead>
							<tr>
								<th>
									Currency:
								</th>
								<th>
									Rate:
								</th>
							</tr>

						</thead>
						<tbody>
							<tr>
								<td>
									
								</td>
								<td>
									
								</td>
							</tr>
						</tbody>
					</Table>
				</div>
			</div>

		)
	}
}

export default Forex;