import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Navbar from './navbar.jsx';
import Book from './book.jsx';
import Choose from './choose.jsx';
import { Grid, Row, Col } from 'react-flexbox-grid';


class Body extends Component {
  render(){
    return(
      <Grid fluid>
        <Row className="show-grid" >
          <Choose
            value={this.props.value}
            onChange={this.props.onChange}
            onClick={this.props.onClick}
            optionStage={this.props.optionStage}
            type={this.props.type}
            update={this.props.update}
            choosen={this.props.choosen}/>
        </Row>
        <Row className="show-grid" around="xs">
          <Book
            value={this.props.value}
            onChange={this.props.onChange}
            styleClass={this.props.styleClass}
            choosen={this.props.choosen}

            />
        </Row>
        <Row className="show-grid" around="xs">
          <Navbar
            value={this.props.value}
            onChange={this.props.onChange}
            onClick={this.props.onClick}
            quoteFormArr={this.props.quoteFormArr}
            optionStage={this.props.optionStage}
            choosen={this.props.choosen}
            reset={this.props.reset}/>
        </Row>
      </Grid>
    );
  }
}
class Footer extends Component {
  constructor(props){
    super(props);
    this.state = {
      stage: "main",
      optionStage : 1
    };
  }
  componentWillReceiveProps (nextProps){
    this.setState({optionStage: nextProps.optionStage})
  }
  render(){
    return(
      <div>
        stage: {this.state.optionStage} of 6
      </div>
    );
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
        branding: ''
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
     console.log(newclass)
     console.log(value)
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
    let typeArr = ['bookType', 'size', 'spine', 'corners','branding'];
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
      branding: ''
    };
    this.setState({
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
          />
        <Footer
          value={this.state.selectedOption}
          optionStage={this.state.optionStage}/>
      </div>
    );
  }
}

export default Main;