import React, {Component} from 'react';
import ReactDOM from 'react-dom';
<FormGroup controlId="formControlsSelect">
    <ControlLabel>{stageTitletoShow}:</ControlLabel>
    <FormControl componentClass="select" placeholder="select" value={this.props.value} onChange={this.props.onChange}>
      {optionsToShow}
    </FormControl>
  </FormGroup>



  handleSubmit = (e) => {
    e.preventDefault();
    let errors = " ";
    errors+= this.state.company.length === 0
        ? "Company name is required. "
        :"";
    errors+=this.state.name.length === 0
      ?"Your name and surname is required. "
      : "";
    errors+= this.state.email === "" && this.state.email.indexOf('@') === -1
      ?"Email is required. "
      : "";
    errors+=this.state.quantity.length === 0
      ?"Quantity is required. "
      :"";
    this.setState({errors});
  }

class QuoteFormTemp extends Component {
  constructor(props){
    super(props);
    this.state = {
      optionStage: this.props.optionStage,
      quoteFormArr:[],
      positionKeys: ["Book Type", "Size", "Spine", "Corners", "Branding"]
    };
  }
  componentWillReceiveProps(nextProps){
      let idx = this.state.quoteFormArr.indexOf(nextProps.value);
      if (idx === -1 && this.props.onClick) {
        this.setState({
          quoteFormArr: [nextProps.value, ...this.state.quoteFormArr]
        })
      }
  }

  createForm = (element) =>{
  if (this.state.quoteFormArr.length === this.state.positionKeys.length){
    let lilist = this.state.positionKeys;
    let torender = lilist.map((element,index)=>{
      return (<li key={index}> {element} : {this.state.quoteFormArr[index]} </li>)
      })
      return torender;
  } else {
    return null
  }
  }
  render(){
    return(
      //<div style={{display: "none"}}>
      <div>
        <ul> Your Book Summary
          {this.createForm()}
        </ul>

      </div>
    );
  }
}
class Navbar extends Component {
  render(){
    return(
      <aside>
        <ul>
          <li>My Book <QuoteFormTemp
            value={this.props.value}
            optionStage={this.props.optionStage}
            onClick={this.props.onClick}/></li>
          <button onClick={this.props.onClick}>NEXT</button>
          <li>Reset</li>
        </ul>
      </aside>
    );
  }
}
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
        branding: ["select option","imprint", "debosing"]
      },
      choosen:{
        bookType: '',
        size: '',
        spine: '',
        corners: '',
        branding: ''
      }
    };
  }
  componentWillReceiveProps (nextProps){
      this.setState({optionStage: nextProps.optionStage, choosen[this.state.]: this.state.value});
  }
  render(){
//defaultValue={this.props.value}
    if (this.state.optionStage < this.state.stageTitle.length){
      let stageTitletoShow = this.state.stageTitle[this.state.optionStage-1];
      let keysOfOptions = Object.values(this.state.stageAnswer);
      let keyChoosen = keysOfOptions[this.state.optionStage-1];
      let optionsToShow = keyChoosen.map((element,index)=>{
      let replaceCss= element.replace(" ", "_");
       return (<option type={element} value={replaceCss} key={index}>{element}</option>)
      })
      return(
        <section>
          <h3>{stageTitletoShow}:</h3>
        <select value={this.props.value} onChange={this.props.onChange}>

          {optionsToShow}
        </select>
      </section>
      );
    }else{
      return null;
    }

  }
}
class Book extends Component {
  constructor(props){
    super(props);
    this.state = {
      styleclass: "main"
    };
  }
  componentWillReceiveProps (nextProps){
      let space= ' ';
      let newClassName = this.state.styleclass.concat(space,nextProps.value)
      this.setState({styleclass: newClassName});
  }
  render(){
    return(
      <section>
        MY NOTEBOOK is {this.props.value} notebook
        <div className={this.state.styleclass}></div>
      </section>
    );
  }
}
class Body extends Component {
  render(){
    return(
      <div>
        <Choose
          value={this.props.value}
          onChange={this.props.onChange}
          onClick={this.props.onClick}
          optionStage={this.props.optionStage}/>
        <Book
          value={this.props.value}
          onChange={this.props.onChange}/>
        <Navbar
          value={this.props.value}
          onChange={this.props.onChange}
          onClick={this.props.onClick}
          quoteFormArr={this.props.quoteFormArr}
          optionStage={this.props.optionStage}/>
      </div>
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
        FOOTER -> {this.props.value}
        stage: {this.state.optionStage}
      </div>
    );
  }
}
class Main extends Component {
  constructor(props){
    super(props);
    this.state = {
      selectedOption: '',
      optionStage: 1
    };
  }
  changeSelectedOption = (event) =>{
    this.setState({
      selectedOption: event.target.value

    })
  }
  showNextOption = (event) =>{
    this.setState({ optionStage: this.state.optionStage+1});
    return true;
  }
  render(){
    return(
      <div>
        <Body
          value={this.state.selectedOption}
          onChange={this.changeSelectedOption}
          onClick={this.showNextOption}
          optionStage={this.state.optionStage}
          />
        <Footer
          value={this.state.selectedOption}
          optionStage={this.state.optionStage}/>
      </div>
    );
  }
}
