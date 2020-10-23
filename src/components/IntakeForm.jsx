import React from 'react';

class IntakeForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      address: "",
      phone: "",
      city: "",
      states: "",
      yourTaxProblem: ""
    }
  }

  render() {
    return(
      <div className="Intake">
        <form id="intake-form" onSubmit={this.handleSubmit.bind(this)} method="POST">
          <div className="name-group">
            <label htmlFor="name">Name</label>
            <input 
              type="text" 
              className="name-control" 
              value={this.state.name}
              onChange={this.onNameChange.bind(this)}
            />
          </div>
          <div className="address-group">
            <label htmlFor="address">Address</label>
            <input 
              type="text" 
              className="address-control" 
              value={this.state.address}
              onChange={this.onAddressChange.bind(this)}
            />
          </div>
          <div className="phone-group">
            <label htmlFor="phone">Phone</label>
            <input 
              type="text" 
              className="phone-control" 
              value={this.state.phone}
              onChange={this.onPhoneChange.bind(this)}
            />
          </div>
          <div className="city-group">
            <label htmlFor="city">City</label>
            <input 
              type="text" 
              className="city-control" 
              value={this.state.city}
              onChange={this.onCityChange.bind(this)}
            />
          </div>
          <div className="states-group">
            <label htmlFor="states">State</label>
            <input 
              type="text" 
              className="states-control" 
              value={this.state.states}
              onChange={this.onStatesChange.bind(this)}
            />
          </div>
          <div className="tax-problem-group">
            <label htmlFor="taxProblem">Tax Problem</label>
            <textarea 
              className="taxProblemForm" 
              rows="8"
              value={this.state.yourTaxProblem}
              onChange={this.onProblemChange.bind(this)}
            />
          </div>
        </form>
        <button type="submit" className="btn btn-primary">Submit</button>
      </div>
    )
  }

  onNameChange(event) {
    this.setState({
      name: event.target.value
    })
  }

  onAddressChange(event) {
    this.setState({
      address: event.target.value
    })
  }

  onPhoneChange(event) {
    this.setState({
      phone: event.target.value
    })
  }

  onCityChange(event) {
    this.setState({
      city: event.target.value
    })
  }

  onStatesChange(event) {
    this.setState({
      states: event.target.value
    })
  }

  onProblemChange(event) {
    this.setState({
      yourTaxProblem: event.target.value
    })
  }

  handleSubmit(event) {
  }
}
  
  export default IntakeForm;