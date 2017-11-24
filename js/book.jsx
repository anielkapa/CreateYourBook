import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Well from 'react-bootstrap/lib/Well';
import { Grid, Row, Col } from 'react-flexbox-grid';

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
      <section style={{width:"100vw"}}>
        <Row className="show-grid" middle="xs">
          <Col xs={12} sm={6} md={6} lg={6}>
            <Well bsSize="large" className="book-section-style">
              <h2>Look I'm {this.props.value} notebook!</h2>
            </Well>
          </Col>
          <Col xs={12} sm={6} md={6} lg={6}>
            <div className={this.state.styleclass}></div>
          </Col>
        </Row>
      </section>
    );
  }
}

export default Book;
