import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import QuoteFormTemp from './quoteform.jsx';
import Formular from './folder.jsx';
import Button from 'react-bootstrap/lib/Button';
import { Grid, Row, Col } from 'react-flexbox-grid';

class Navbar extends Component {
  constructor(props){
    super(props);

    this.state = {
      optionStage: ""
    };
  }
  componentWillReceiveProps (nextProps){
    this.setState({
      optionStage: nextProps.optionStage
    });
  }
  chooseButtons = () =>{
    if (this.state.optionStage < 6){
      return (
        <Col xs={8} sm={6} md={2} lg={2}>
          <Button
            onClick={this.props.onClick}>NEXT
          </Button>
        </Col>);
    }else{
      return (
        <Col xs={12} sm={12} md={12} lg={10}>
          <Formular
            optionStage={this.props.optionStage}/>
        </Col> );
    }
  }
  render(){
    return(
      <aside>
        <Row className="show-grid">
        <QuoteFormTemp
            value={this.props.value}
            optionStage={this.props.optionStage}
            onClick={this.props.onClick}
            choosen={this.props.choosen}/>

        </Row>
        <Row className="show-grid">
          {' '}
            {this.chooseButtons()}
          {' '}
          <Col xs={8} sm={6} md={2} lg={2}>
            <Button bsStyle="danger" onClick={this.props.reset}>Reset</Button>
          </Col>
        </Row>
      </aside>
    );
  }
}

export default Navbar;
