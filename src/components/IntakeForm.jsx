import React from "react";
import axios from "axios";

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

  handleSubmit(e){
    e.preventDefault();
    axios({
      method: "POST",
      url: "http://localhost:3002/send",
      data: this.state

    }).then((response) => {
      if (response.data.status === "success") {
        alert("Message Sent.");
        this.resetForm()
      } else if (response.data.status === "fail") {
        alert("Message failed to send.");
      }
    })
  }

  resetForm(){
    this.setState({
      name: "",
      address: "",
      phone: "",
      city: "",
      states: "",
      yourTaxProblem: ""
    })
  }

  render() {
    return(
      <div className="Intake">
        <form id="intake-form" onSubmit={this.handleSubmit.bind(this)} method="POST">
          <div className="name-group">
            <input 
              type="text" 
              className="name-control"
              placeholder="Name" 
              value={this.state.name}
              onChange={this.onNameChange.bind(this)}
            />
          </div>
          <div className="email-group">
            <input 
              type="email" 
              className="email-control"
              id="email"
              aria-describedby="emailHelp"
              placeholder="Email" 
              value={this.state.email}
              onChange={this.onEmailChange.bind(this)}
            />
          </div>
          <div className="address-group">
            <input 
              type="text" 
              className="address-control"
              placeholder="Address" 
              value={this.state.address}
              onChange={this.onAddressChange.bind(this)}
            />
          </div>
          <div className="phone-group">
            <input 
              type="text" 
              className="phone-control"
              placeholder="Phone Number" 
              value={this.state.phone}
              onChange={this.onPhoneChange.bind(this)}
            />
          </div>
          <div className="city-group">
            <input 
              type="text" 
              className="city-control"
              placeholder="City" 
              value={this.state.city}
              onChange={this.onCityChange.bind(this)}
            />
          </div>
          <div className="states-group">
            <input 
              type="text" 
              className="states-control"
              placeholder="State" 
              value={this.state.states}
              onChange={this.onStatesChange.bind(this)}
            />
          </div>
          <div className="tax-problem-group">
            <textarea 
              className="taxProblemForm"
              placeholder="What is the nature of your tax problem?" 
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

  onEmailChange(event) {
    this.setState({
      email: event.target.value
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
}
  
  export default IntakeForm;