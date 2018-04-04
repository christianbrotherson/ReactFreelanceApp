import React, { Component } from 'react';
import {
  Col,
  Row
} from 'reactstrap';

class FreeLanceForm extends Component {

  constructor(props) {
    super(props)

    this.handleChange = this.handleChange.bind(this);

    this.state = {
      customer: '',
      portfolioUrl: '',
      tools: '',
      hourlyRate: '',
      weeksToComplete: '',
    }
  }

  handleChange (props) {
    return function(event) {
      this.setState({ [props.inputTitle]: event.target.value });
      console.log(`value for state ${props.inputTitle} is: ${this.state[props.inputTitle]}`);
    }.bind(this)
  }

  render() {
    return(
      <div>
        <div><h3>Proposal Inputs</h3></div>
        <Row>
          <Col md='12'>
            <input placeholder='customer' type='text' onChange={this.handleChange({inputTitle: 'customer'})} />
          </Col>
        </Row>
        <Row>
          <Col md='12'>
            <div>Customer</div>
          </Col>
        </Row>
      </div>
    );
  }
}

export default FreeLanceForm;