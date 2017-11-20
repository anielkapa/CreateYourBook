import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import QuoteFormTemp from './quoteform.jsx';
import Formular from './folder.jsx';
import Button from 'react-bootstrap/lib/Button';


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
      return (<Button onClick={this.props.onClick}>NEXT</Button>);
    }else{
      return (  <Formular
          optionStage={this.props.optionStage}/>
        )
    }
  }
  render(){
    return(
      <aside>
        <QuoteFormTemp
            value={this.props.value}
            optionStage={this.props.optionStage}
            onClick={this.props.onClick}
            choosen={this.props.choosen}/>
          {' '}
          {this.chooseButtons()}
          {' '}
          <Button bsStyle="danger" onClick={this.props.reset}>Reset</Button>
      </aside>
    );
  }
}

export default Navbar;
