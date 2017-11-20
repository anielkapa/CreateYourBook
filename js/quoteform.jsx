import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Table from 'react-bootstrap/lib/Table';


class FormCompany extends Component {
  render(){
    return(
      <form>
        My Company details
      </form>
    );
  }
}

class QuoteFormTemp extends Component {
  constructor(props){
    super(props);
    this.state = {
      optionStage: 1,
      choosen:'',
      positionKeys: ["Book Type", "Size", "Spine", "Corners", "Branding"]
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
  //  console.log(valuesOfChoosen)
    if (this.state.optionStage === 6){
      let lilist = this.state.positionKeys;
      let torender = lilist.map((element,index)=>{
        return (<tr key={index}><td>{element}</td><td>{valuesOfChoosen[index]}</td></tr>)
      });
        return torender;
    } else {
     return null
   }
  }
  render(){
    return(
      <div>
        <Table>
          <thead>
            <tr>
              <th>Your Book Summary</th>
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
