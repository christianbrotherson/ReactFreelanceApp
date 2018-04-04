import React, { Component } from 'react';

class FreeLanceForm extends Component {

  constructor(props) {
    super(props)

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange() {
    console.log('trying to handle change');
  }

  render() {
    this.inputData = [
      { placeholder: 'Customer', prop: 'customer' },
      { placeholder: 'Portfolio URL', prop: 'portfolioUrl' },
      { placeholder: 'Tools', prop: 'tools' },
      { placeholder: 'Estimated Hours', prop: 'estimatedHours' },
      { placeholder: 'Hourly Rate', prop: 'hourlyRate' },
      { placeholder: 'Weeks to Complete', prop: 'weeksToComplete' },
    ]

    return(
      <div>
        <div>Proposal Inputs</div>
        <div>
          <input placeholder={this.inputData[0].placeholder} onChange={this.handleChange} />
          <input placeholder={this.inputData[1].placeholder} onChange={this.handleChange} />
          <input placeholder={this.inputData[2].placeholder} onChange={this.handleChange} />
          <input placeholder={this.inputData[3].placeholder} onChange={this.handleChange} />
          <input placeholder={this.inputData[4].placeholder} onChange={this.handleChange} />
          <input placeholder={this.inputData[5].placeholder} onChange={this.handleChange} />
        </div>
      </div>
    );
  }
}

export default FreeLanceForm;