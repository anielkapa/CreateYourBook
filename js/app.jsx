import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Main from './main.jsx';
import Jumbotron from 'react-bootstrap/lib/Jumbotron';

document.addEventListener('DOMContentLoaded', function(){
    class Header extends Component {
      render(){
        return(
          <div>
						<Jumbotron className="header-style">
							 <h1 style={{margin: "30px"}}>Hello, notebook!</h1>
							 <p style={{margin: "10px"}} className="orange-color">This is a simple product config app. Enjoy!</p>
						</Jumbotron>
				</div>
        );
      }
    }
    class App extends Component {
      render(){
        return(
					<div style={{width:"100vw"}} >
						<Header />
						<Main />
					</div>
        );
      }
    }
    ReactDOM.render(
        <App />,
        document.getElementById('app')
    );
});
