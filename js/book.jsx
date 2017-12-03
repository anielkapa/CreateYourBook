import React, {Component} from 'react';
import ReactDOM from 'react-dom';
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
    this.setState({
      styleclass: nextProps.styleClass,
      choosen: nextProps.choosen
    });
    if(nextProps.choosen.spine ==="hardback"){
      this.setState({spine:"hardback_spine"})
    }
    if(nextProps.choosen.spine ==="softback" || nextProps.choosen.spine ===""){
      this.setState({spine:""})
    }
    if(nextProps.choosen.branding ==="debossed"){
      this.setState({branding:"debossed_logo"})
    }
    if(nextProps.choosen.branding ==="printed spot-colour"){
      this.setState({branding:"printed_logo"})
    }
    if(nextProps.choosen.branding ==="printed full-colour" || nextProps.choosen.branding ===""  ){
      this.setState({branding:""})
    }
    if(nextProps.choosen.elastic !==""){
      this.setState({elastic: `${nextProps.choosen.elastic}_elastic band`})
    }
    if(nextProps.choosen.elastic ===""){
      this.setState({elastic:""})
    }
  }
  render(){
    return(
      <section>
        <Row className="show-grid" middle="xs" around="xs">
          <Col xs={12} sm={12} md={7} lg={7} className="end-comment" style={{margin:"0 0 0 10px"}}>
            <div style={{textAlign:"center"}}>
              <h3>{this.props.generateText()}</h3>
            </div>
          </Col>
          <Col xs={12} sm={12} md={4} lg={4}>
            <div className="size">
              <div className={this.state.styleclass} />
              <div className={this.state.branding}/>
              <div className={this.state.spine}/>
              <div className={this.state.elastic}/>
              <div className='shadow'/>
            </div>
          </Col>
        </Row>
      </section>
    );
  }
}

export default Book;
