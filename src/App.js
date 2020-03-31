import React, { Component } from 'react';
//import Box Component
import Box from './components/Box';
//import Buttons Component
import Buttons from './components/Buttons';

class App extends Component{

  state = {
    count: 0
  }
  //Step 1: create the function
  handleAdd = () => {
    //Step 5: 
      this.setState({
        count : this.state.count + 1
      });
  }

  handleSubtract = () => {
    this.setState({
      count: this.state.count -1
    });

  }

  handleReset = () => {
    this.setState({
      count: 0
    });
  }


  handleMultiply = () => {
    this.setState({
      count: this.state.count * 2
    });
  }
 
    render() {
      return(
          <React.Fragment>
            <Box 
              count = { this.state.count }
            />

            <Buttons 
              //Step 2: 
              handleAdd = { this.handleAdd }
              handleSubtract = { this.handleSubtract }
              handleReset = { this.handleReset }
              handleMultiply = { this.handleMultiply }
            />
          </React.Fragment>
        )
    }
}

export default App;