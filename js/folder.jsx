import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Form from 'react-bootstrap/lib/Form';
import FormGroup from 'react-bootstrap/lib/FormGroup';
import FormControl from 'react-bootstrap/lib/FormControl';
import ControlLabel from 'react-bootstrap/lib/ControlLabel';
import Button from 'react-bootstrap/lib/Button';

class Formular extends Component {
  constructor(props){
    super(props);
    this.state = {
      company: '',
      name: '',
      email: '',
      quantity: [],
      loading: false,
      errors: {}
    };
  }
  quantityOption =() =>{
    let quantity = [100, 250, 500, 1000, 1500, 2500, 5000, 7500, 10000, 'other'];
    let optionsReturn = quantity.map((element,index)=>{
      return (<option value={element} key={index}>{element}</option>)
    });
    return optionsReturn;
  }
  handleComanyChange = (event) =>{
    this.setState({company:event.target.value});
  }
  handleNameChange = (event) =>{
    this.setState({name:event.target.value});
  }
  handleEmailChange = (event) =>{
    this.setState({email:event.target.value});
  }
  handleQuantity = (event) =>{
    let options = event.target.options;
    let value = [];
    for (let i = 0, l = options.length; i < l; i++) {
      if (options[i].selected) {
        value.push(options[i].value);
      }
      this.setState({quantity: value})
    }
  }
  validate = () => {
    let errors = {};
    if(this.state.company.length === 0 ) {
      errors.company = "Company name is required";
    }
    if(this.state.name.length === 0 ) {
      errors.name = "Your name and surname is required";
    }
    if(this.state.email === "" && this.state.email.indexOf('@') === -1) {
      errors.email = "Email is required";
    }
    if(this.state.quantity.length === 0) {
      errors.quantity = "Quantity is required";
    }
    return errors;
  }
  handleSubmit = (e) => {
    e.preventDefault();
    let errors = this.validate();
    if(Object.keys(errors).length !== 0) {
      this.setState({
        errors: errors
      });
      return;
    }
  }
  render(){
    return(
      <Form inline onSubmit={this.onSubmit}>
        <FormGroup controlId="formInlineName">
          <ControlLabel>Company Name</ControlLabel>
          {' '}
          <FormControl type="text" name="company" value={this.state.company} placeholder="type company name" onChange={this.handleComanyChange}/>
          <span className="help-block">{this.state.errors.company}</span>
      </FormGroup>
        {' '}
        <FormGroup controlId="formInlineName">
          <ControlLabel>Your Name and Surname</ControlLabel>
          {' '}
          <FormControl type="text" name="name" value={this.state.name} placeholder="type name and surname" onChange={this.handleNameChange}/>
          <span className="help-block">{this.state.errors.name}</span>
      </FormGroup>
        {' '}
        <FormGroup controlId="formInlineEmail">
          <ControlLabel>Email</ControlLabel>
          {' '}
          <FormControl type="email" name="email" value={this.state.email} placeholder="jane.doe@example.com" onChange={this.handleEmailChange}/>
          <span className="help-block">{this.state.errors.email}</span>
      </FormGroup>
        {' '}
        <FormGroup controlId="formControlsSelectMultiple">
          <ControlLabel>Quantity</ControlLabel>
          <FormControl componentClass="select" multiple onChange={this.handleQuantity} value={this.state.quantity}>
            <option value="select">select (multiple)</option>
            {this.quantityOption()}
          </FormControl>
          <span className="help-block">{this.state.errors.quantity}</span>
        </FormGroup>
      {' '}
        <Button type="submit"  onClick={this.handleSubmit}>
          Send Your inquiry!
        </Button>
        {' '}
  </Form>
    );
  }
}

export default Formular;