import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {	Router,
		Route,
		Link,
		IndexLink,
		IndexRoute,
		hashHistory
}	from	'react-router';
import Main from './main.jsx';
import Jumbotron from 'react-bootstrap/lib/Jumbotron';
import Breadcrumb from 'react-bootstrap/lib/Breadcrumb';

document.addEventListener('DOMContentLoaded', function(){
    class Header extends Component {
      render(){
        return(
          <div>
						<Jumbotron className="header-style">
							 <h1 style={{margin: "10px"}}>Hello, notebook!</h1>
							 <p style={{margin: "10px"}}>This is a simple product config app for creating bespoke notebook and inquiry form. Enjoy!</p>
						</Jumbotron>
				</div>
        );
      }
    }
    class App extends Component {
      render(){
        return(
					<div >
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
