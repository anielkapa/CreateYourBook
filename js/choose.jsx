import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import FormGroup from 'react-bootstrap/lib/FormGroup';
import ControlLabel from 'react-bootstrap/lib/ControlLabel';
import FormControl from 'react-bootstrap/lib/FormControl';
import { Grid, Row, Col } from 'react-flexbox-grid';


class Choose extends Component {
  constructor(props){
    super(props);
    this.state = {
      optionStage:1,
      stageTitle:["Select Book Type", "Select Size", "Choose Spine", "Choose corners", "Select branding", "Select elastic band"],
      stageAnswer:{
        bookType: ["select option", "hardcover pu", "hardcover paper", "hardcover textile"],
        size: ["select option","A6", "A5", "A4"],
        spine: ["select option","hardback", "softback"],
        corners: ["select option","straight", "half-rounded"],
        branding: ["select option","printed full-colour", "printed spot-colour", "debossed"],
        elastic: ["select option", "black", "white", "grey","blue", "red", "yellow", "green"]
      },
      choosen: this.props.choosen
    };
  }
  componentWillReceiveProps (nextProps){
      this.setState({optionStage: nextProps.optionStage});
  }
  addclass = () =>{
    if (this.state.optionStage <= this.state.stageTitle.length){
      let stageTitletoShow = this.state.stageTitle[this.state.optionStage-1];
     let keysOfOptions = Object.values(this.state.stageAnswer);
     let keyChoosen = keysOfOptions[this.state.optionStage-1];
     let optionsToShow = keyChoosen.map((element,index)=>{
       return (<option key={index}>{element}</option>)
     });
      return(
        <section>
          <FormGroup controlId="formControlsSelect">
             <Col xs={10} sm={10} md={12} lg={12}>
               <ControlLabel>{stageTitletoShow}:</ControlLabel>
             </Col>
             <Col xs={10} sm={10} md={12} lg={12}>
               <FormControl componentClass="select" placeholder="select" value={this.props.value} onChange={this.props.onChange}>
               {optionsToShow}
                </FormControl>
              </Col>
           </FormGroup>
      </section>
      );
    }else{
      return (
        <Col xs={12} sm={12} md={12} lg={12} className="end-comment" style={{textAlign:"center"}}>
          <h2 style={{margin:"5px"}}>Voilà!</h2>
          <p style={{margin:"5px"}}>Just fill out the form and we will calculate none-binding offer for You!</p>
        </Col>);
    }
  }
  render(){
    return (
      <div>
        {this.addclass()}
      </div>
    );
  }
}

export default Choose;
