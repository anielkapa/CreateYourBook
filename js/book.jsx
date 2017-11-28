import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Well from 'react-bootstrap/lib/Well';
import { Grid, Row, Col } from 'react-flexbox-grid';

class Book extends Component {
  constructor(props){
    super(props);
    this.state = {
      styleclass: "main",
      choosen: '',
      branding: "",
      spine: ""
    };
  }
  componentWillReceiveProps (nextProps){
    this.setState({styleclass: nextProps.styleClass, choosen: nextProps.choosen});
    if(nextProps.choosen.spine ==="hardback"){
      this.setState({spine:"hardback_crease"})
    }
    if(nextProps.choosen.spine ==="softback"){
      this.setState({spine:""})
    }
    if(nextProps.choosen.branding ==="printed"){
      this.setState({branding:"printed_logo"})
    }
    if(nextProps.choosen.branding ==="debossed"){
      this.setState({branding:"debossed_logo"})
    }
  }
  render(){
    return(
      <section>
        <Row className="show-grid" middle="xs" around="xs">
          <Col xs={12} sm={12} md={7} lg={7} className="end-comment" style={{margin:"0 0 0 10px"}}>
            <div style={{textAlign:"center"}}>
              <h3>Look I'm {this.props.value} notebook!</h3>
            </div>
          </Col>
          <Col xs={12} sm={12} md={4} lg={4}>
            <div className="size">
              <div className={this.state.styleclass} />
              <div className={this.state.branding}/>
              <div className={this.state.spine}/>
              <div className='shadow'/>
            </div>
          </Col>
        </Row>
      </section>
    );
  }
}

export default Book;
