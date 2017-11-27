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
      <section>
        <Row className="show-grid" middle="xs">
          <Col xs={6} sm={4} md={4} lg={4}>
            <div className={this.state.styleclass}></div>
          </Col>
          <Col xs={6} sm={8} md={8} lg={8} className="end-comment">
            <div style={{textAlign:"center"}}>
              <h3>Look I'm {this.props.value} notebook!</h3>
            </div>
          </Col>
        </Row>
      </section>
    );
  }
}

export default Book;
