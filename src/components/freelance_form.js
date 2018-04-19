import React, { Component } from 'react';
import _ from 'lodash';

function ProposalInputs(props) {
    return (
        <div>
            <div>
                {props.placeholder}:   
                <input placeholder={props.placeholder} value={props.state} type='text' onChange={props.onChange} />
            </div>
        </div>
    );
}

class FreeLanceForm extends Component {

    constructor(props) {
        super(props)

        this.handleChange = this.handleChange.bind(this);

        this.state = {
            customer: '',
            portfolioUrl: '',
            tools: '',
            estimatedHours: '',
            hourlyRate: '',
            weeksToComplete: '',
            clientEmail: ''
        }
  }

    handleChange (props) {
        return function(event) {
        this.setState({ [props.inputTitle]: event.target.value });
        console.log(`value for state ${props.inputTitle} is: ${this.state[props.inputTitle]}`);
        }.bind(this)
    }

    render() {
        this.inputData = [
            { placeholder: 'Customer', prop: 'customer' },
            { placeholder: 'Portfolio Url', prop: 'portfolioUrl' },
            { placeholder: 'Tools', prop: 'tools' },
            { placeholder: 'Estimated Hours', prop: 'estimatedHours' },
            { placeholder: 'Hourly Rate', prop: 'hourlyRate' },
            { placeholder: 'Weeks to Complete', prop: 'weeksToComplete' },
            { placeholder: 'Client Email', prop: 'clientEmail' },
        ]

        return(
            <div>
                <h3>Proposal Inputs</h3>
                {
                    _.map(this.inputData, (data, indexKey) => {
                        return <ProposalInputs key={indexKey} index={indexKey + 1} state={data.state} placeholder={data.placeholder} onChange={this.handleChange({inputTitle: data.prop})} />
                    })
                }


                {/* <div>
                    <input placeholder='Porfolio Url' type='text' onChange={this.handleChange({ inputTitle: 'portfolioUrl'})} />
                    Porfolio Url
                </div>
                <div>
                    <input placeholder='Tools' type='text' onChange={this.handleChange({ inputTitle: 'tools'})} />
                    Tools
                </div>
                <div>
                    <input placeholder='Estimated Hours' type='text' onChange={this.handleChange({ inputTitle: 'estimatedHours'})} />
                    Estimated Hours
                </div>
                <div>
                    <input placeholder='Hourly Rate' type='text' onChange={this.handleChange({ inputTitle: 'hourlyRate'})} />
                    Hourly Rate
                </div>
                <div>
                    <input placeholder='Weeks to Complete' type='text' onChange={this.handleChange({ inputTitle: 'weeksToComplete'})} />
                    Weeks to Complete
                </div>
                <div>
                    <input placeholder='Client Email' type='text' onChange={this.handleChange({ inputTitle: 'clientEmail'})} />
                    Client Email
                </div> */}

                <div>
                    Hi ,

                    It was a pleasure getting to meet with you and review your project requirements. I believe it is a great fit for the types of applications that I build out. Please feel free to check out some of my past projects here.<br/>

                    To successfully build out the application, I will be utilizing , and a number of other tools to ensure that the project follows industry wide best practices.<br/>
                    <br/>

                    Ensuring that you are fully informed is one of my top priorities, so in addition to incorporating everything that we discussed, I will also be creating a project management dashboard and sending you a project update message dialy so that you can have a transparent view of the development as it takes place.<br/>
                    <br/>

                    To accomplish the project and meet the requirements that we discussed, I am estimating that it will take _ hours in development time to complete. The project should take _ weeks to complete and with my hourly rate of _/hour, the estimated total will be _.<br/>
                    <br/>

                    The next step from here is to set up a meeting to finalize the project and sign contracts.<br/>
                    <br/>

                    I am excited to be working with you and build out this project.<br/>
                    <br/>
                </div>
            </div>
        );
    }
}

export default FreeLanceForm;