import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import FormGroup from 'react-bootstrap/lib/FormGroup';
import ControlLabel from 'react-bootstrap/lib/ControlLabel';
import FormControl from 'react-bootstrap/lib/FormControl';



class Choose extends Component {
  constructor(props){
    super(props);
    this.state = {
      optionStage:1,
      stageTitle:["Select Book Type", "Select Size", "Choose Spine", "Choose corners", "Select branding"],
      stageAnswer:{
        bookType: ["select option", "hardcover pu", "hardcover paper", "hardcover textile"],
        size: ["select option","A6", "A5", "A4"],
        spine: ["select option","hardback", "softback"],
        corners: ["select option","straight", "half-rounded"],
        branding: ["select option","printed", "debossed"]
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
             <ControlLabel>{stageTitletoShow}:</ControlLabel>
             <FormControl componentClass="select" placeholder="select" value={this.props.value} onChange={this.props.onChange}>
               {optionsToShow}
             </FormControl>
           </FormGroup>
      </section>
      );
    }else{
      return null;
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
