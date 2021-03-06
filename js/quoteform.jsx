import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Table from 'react-bootstrap/lib/Table';

class QuoteFormTemp extends Component {
  constructor(props){
    super(props);
    this.state = {
      optionStage: 1,
      choosen:'',
      positionKeys: ["Book Type", "Size", "Spine", "Corners", "Branding", "Elastic band colour"]
    };
  }
  componentWillReceiveProps(nextProps){
    this.setState({
      optionStage: nextProps.optionStage,
      choosen: nextProps.choosen
    });
  }
  createForm = (element) =>{
    let valuesOfChoosen = Object.values(this.state.choosen);
    if (this.state.optionStage === 7){
      let lilist = this.state.positionKeys;
      let torender = lilist.map((element,index)=>{
        return (<tr key={index}><td>{element}</td><td>{valuesOfChoosen[index]}</td></tr>)
      });
        return torender;
    } else {
     return null
   }
  }
  showTopic = (element) =>{
    if (this.state.optionStage === 7){
      return (<th>Your Book Summary</th>);
    }else{
      return null;
    }
  }
  render(){
    return(
      <div>
        <Table>
          <thead>
            <tr>
              {this.showTopic()}
            </tr>
          </thead>
          <tbody>
            {this.createForm()}
          </tbody>
        </Table>
      </div>
    );
  }
}

export default QuoteFormTemp;
