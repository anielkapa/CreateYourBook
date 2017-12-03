import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Form from 'react-bootstrap/lib/Form';
import FormGroup from 'react-bootstrap/lib/FormGroup';
import FormControl from 'react-bootstrap/lib/FormControl';
import ControlLabel from 'react-bootstrap/lib/ControlLabel';
import Button from 'react-bootstrap/lib/Button';
import { Grid, Row, Col } from 'react-flexbox-grid';

class Formular extends Component {
  constructor(props){
    super(props);
    this.state = {
      company: '',
      name: '',
      email: '',
      quantity: [],
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
  validate = (event) => {
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
    let errors = this.validate(e);
    if(Object.keys(errors).length !== 0) {
      this.setState({
        errors: errors
      });
      return false;
    } else {
      this.setState({
        errors: ""
      });
    this.props.reset();
    }
  }
  render(){
    return(
      <Row className="show-grid" between="xs">
      <Form inline >
        <Row className="show-grid">
          <Col xs={12} sm={12} md={4} lg={4}>
            <FormGroup controlId="formInlineName">
              <ControlLabel >Company Name</ControlLabel>
              {' '}
              <FormControl type="text" name="company" value={this.state.company} placeholder="type company name" onChange={this.handleComanyChange}/>
              <span className="help-block">{this.state.errors.company}</span>
            </FormGroup>
            {' '}
            <FormGroup controlId="formInlineName">
              <ControlLabel >Your Name and Surname</ControlLabel>
              {' '}
              <FormControl type="text" name="name" value={this.state.name} placeholder="type name and surname" onChange={this.handleNameChange}/>
              <span className="help-block">{this.state.errors.name}</span>
            </FormGroup>
            {' '}
            <FormGroup controlId="formInlineEmail">
              <ControlLabel >Email Address</ControlLabel>
              {' '}
              <FormControl type="email" name="email" value={this.state.email} placeholder="jane.doe@example.com" onChange={this.handleEmailChange}/>
              <span className="help-block">{this.state.errors.email}</span>
            </FormGroup>
            {' '}
          </Col>
          <Col xs={12} sm={12} md={4} lg={4}>
            <FormGroup controlId="formControlsSelectMultiple">
              <ControlLabel >Quantity:how many notebooks?</ControlLabel>
              <FormControl  name="quantity" componentClass="select" multiple onChange={this.handleQuantity} value={this.state.quantity}>
                <option value="select">select (multiple)</option>
                {this.quantityOption()}
              </FormControl>
              <span className="help-block">{this.state.errors.quantity}</span>
            </FormGroup>
            {' '}
              <Button type="submit" value="Send" onClick={this.handleSubmit} >
                Send Your inquiry!
              </Button>
              {' '}
          </Col>
        </Row>
      </Form>
    </Row>
    );
  }
}

export default Formular ;
