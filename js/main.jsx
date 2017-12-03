import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Navbar from './navbar.jsx';
import Book from './book.jsx';
import Choose from './choose.jsx';
import Well from 'react-bootstrap/lib/Well';
import { Grid, Row, Col } from 'react-flexbox-grid';

class Body extends Component {
  render(){
    return(
      <Grid fluid >
        <Row className="show-grid" around="xs" middle="xs">
          <Col xs={12} sm={12} md={8} lg={8}>
            <Book
              styleClass={this.props.styleClass}
              choosen={this.props.choosen}
              generateText={this.props.generateText}
              />
          </Col>
          <Col xs={12} sm={12} md={4} lg={4}>
          <Choose
            value={this.props.value}
            onChange={this.props.onChange}
            optionStage={this.props.optionStage}
          />
          </Col>

          <Col xs={12} sm={12} md={12} lg={12} className="middle-section">
          <Navbar
            onClick={this.props.onClick}
            optionStage={this.props.optionStage}
            choosen={this.props.choosen}
            reset={this.props.reset}/>
          </Col>
        </Row>
      </Grid>
    );
  }
}

class Footer extends Component {
  constructor(props){
    super(props);
    this.state = {
      optionStage : 1
    };
  }
  componentWillReceiveProps (nextProps){
    this.setState({optionStage: nextProps.optionStage})
  }
  render(){
    const style={
      margin: "10px",
      width: "100px"
    }
    return(
      <Well bsSize="small" style={style}>stage: {this.state.optionStage} of 7</Well>
    )
  }
}

class Main extends Component {
  constructor(props){
    super(props);
    this.state = {
      selectedOption: '',
      optionStage: 1,
      choosen:{
        bookType: '',
        size: '',
        spine: '',
        corners: '',
        branding: '',
        elastic: ''
      },
      styleclass: ""
    };
  }
  classAdd = (type, value) =>{
    let choosenvalues = Object.values(this.choosenTemp(type,value));
    let replaceCss= choosenvalues.map((element,index) =>{
      return  element.replace(" ", "_");
    });
    replaceCss.push("main");
    let newclass = replaceCss.join(" ");
    this.setState({
      styleclass:newclass
    });
  }
  choosenTemp =(type,value) => {
    let choosenTemp = Object.assign({}, this.state.choosen);
    choosenTemp[type] = value;
    return choosenTemp;
  }
  update =(type, value)=>{
    this.setState({
      choosen:this.choosenTemp(type,value)
    });
  }
  changeType =()=>{
    let typeArr = ['bookType', 'size', 'spine', 'corners','branding','elastic'];
    return typeArr[this.state.optionStage-1];
  }
  changeSelectedOption = (event) =>{
   this.setState({
     selectedOption: event.target.value
    })
    let type = this.changeType();
    this.update(type, event.target.value);
    this.classAdd(type, event.target.value);
    }
  generateText = () =>{
      if (this.state.selectedOption === ""){
        return (`Let's create Your bespoke notebook! Make a choice and follow next steps to send us Your inquiry.`)
      }else if (this.state.optionStage === 6){
        return (`Look, my elastic band colour is... ${this.state.choosen.elastic}!`)
      }else if (this.state.optionStage === 7){
        return (`Well, here I am - your personal Notebook!`)
      }else {
        return (`Look I'm ${this.state.selectedOption} notebook!`)
      }
  }
  showNextOption = (event) =>{
    this.setState({ optionStage: this.state.optionStage+1});
    return true;
  }
  reset = (event) => {
    let defaultChoosen = {
      bookType: '',
      size: '',
      spine: '',
      corners: '',
      branding: '',
      elastic: ''
    };
    this.setState({
      selectedOption:"",
      optionStage: 1,
      choosen:defaultChoosen,
      styleclass: 'main'
    });
  }
  render(){
    return(
      <div>
        <Body
          value={this.state.selectedOption}
          onChange={this.changeSelectedOption}
          onClick={this.showNextOption}
          optionStage={this.state.optionStage}
          choosen={this.state.choosen}
          reset={this.reset}
          styleClass={this.state.styleclass}
          classAdd={this.classAdd}
          generateText={this.generateText}
          />
        <Footer
          optionStage={this.state.optionStage}/>
    </div>
    );
  }
}

export default Main;
