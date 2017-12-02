import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import QuoteFormTemp from './quoteform.jsx';
import Formular from './folder.jsx';
import { Grid, Row, Col } from 'react-flexbox-grid';

class Navbar extends Component {
  constructor(props){
    super(props);
    this.state = {
      optionStage: "",
      choosen: {}
    };
  }
  componentWillReceiveProps (nextProps){
    this.setState({
      optionStage: nextProps.optionStage,
      choosen: nextProps.choosen

    });
    console.log("navbar will receive props")
  }
  createEmailForm =()=>{
    let valuesOfChoosen = Object.values(this.state.choosen);
    let keysOfChoosen = Object.keys(this.state.choosen);
      let toEmail = keysOfChoosen.map((element,index)=>{
        return (<tr key={index}><td>{element}</td><td>{valuesOfChoosen[index]}</td></tr>)
      });
        return toEmail;
  }
  chooseButtons = () =>{
    if (this.state.optionStage < 7){
      return (
        <Col xs={8} sm={8} md={2} lg={2} xsOffset={10} >
          <button className="next-button"
            onClick={this.props.onClick}>NEXT
          </button>
        </Col>);
    }else{
      return (
        <Col xs={12} sm={12} md={8} lg={8}>
          <Formular
            optionStage={this.props.optionStage}
            createEmailForm={this.createEmailForm()}
            reset={this.props.reset}/>
        </Col> );
    }
  }
  render(){
    return(
      <aside >
        <Row className="show-grid" middle="xs">
          {' '}
            {this.chooseButtons()}
          {' '}
          <Col xs={12} sm={12} md={4} lg={4}>
            <QuoteFormTemp
                value={this.props.value}
                optionStage={this.props.optionStage}
                onClick={this.props.onClick}
                choosen={this.props.choosen}/>
          </Col>
        </Row>
        <Row className="show-grid" middle="xs" >
          <Col xs={12} sm={12} md={12} lg={12} xsOffset={10} >
            <button className='reset-button' onClick={this.props.reset}>RESET</button>
          </Col>
        </Row>
      </aside>
    );
  }
}
export default Navbar;
