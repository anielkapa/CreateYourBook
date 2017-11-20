import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Well from 'react-bootstrap/lib/Well';

class Book extends Component {
  constructor(props){
    super(props);
    this.state = {
      styleclass: "main",
      choosen: ''
    };
  }
  componentWillReceiveProps (nextProps){
    this.setState({styleclass: nextProps.styleClass, choosen: nextProps.choosen});
  }
  render(){
    return(
      <section>
        <Well bsSize="large"><h2>Look I'm {this.props.value} notebook!</h2></Well>

        <div className={this.state.styleclass}></div>
      </section>
    );
  }
}

export default Book;
