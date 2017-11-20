import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Form from 'react-bootstrap/lib/Form';
import FormGroup from 'react-bootstrap/lib/FormGroup';
import FormControl from 'react-bootstrap/lib/FormControl';
import ControlLabel from 'react-bootstrap/lib/ControlLabel';
import Button from 'react-bootstrap/lib/Button';

class Formular extends Component {
  quantityOption =() =>{
    let quantity = [100, 250, 500, 1000, 1500, 2500, 5000, 7500, 10000, 'other'];
    let optionsReturn = quantity.map((element,index)=>{
      return (<option value={element} key={index}>{element}</option>)
    });
    return optionsReturn;
  }
  render(){
    return(
      <Form inline>
        <FormGroup controlId="formInlineName">
          <ControlLabel>Company Name</ControlLabel>
          {' '}
          <FormControl type="text" placeholder="type company name" />
        </FormGroup>
        {' '}
        <FormGroup controlId="formInlineName">
          <ControlLabel>Your Name and Surname</ControlLabel>
          {' '}
          <FormControl type="text" placeholder="type name and surname" />
        </FormGroup>
        {' '}
        <FormGroup controlId="formInlineEmail">
          <ControlLabel>Email</ControlLabel>
          {' '}
          <FormControl type="email" placeholder="jane.doe@example.com" />
        </FormGroup>
        {' '}
        <FormGroup controlId="formControlsSelectMultiple">
          <ControlLabel>Quantity</ControlLabel>
          <FormControl componentClass="select" multiple>
            <option value="select">select (multiple)</option>
            {this.quantityOption()}
          </FormControl>
        </FormGroup>
      {' '}
        <Button type="submit">
          Send Your inquiry!
        </Button>
        {' '}
  </Form>
    );
  }
}

export default Formular;
