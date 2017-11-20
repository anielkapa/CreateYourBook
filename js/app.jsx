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
						<Jumbotron>
							 <h1>Hello, notebook!</h1>
							 <p>This is a simple product config app for creating bespoke notebook and inquiry form. Enjoy!</p>
						</Jumbotron>
				</div>
        );
      }
    }

		class QuoteForm extends Component {
		  render(){
		    return(
		      <div>
		        Formularz
		      </div>
		    );
		  }
		}
		class Template extends Component {
		  render(){
		    return(
		      <div>
						<Header />
						  <Breadcrumb>
						    <Breadcrumb.Item>
						      <IndexLink to="/" >Start the inquiry</IndexLink>
						    </Breadcrumb.Item>
						    <Breadcrumb.Item>
						      <IndexLink to="/quoteform">Your final inquiry</IndexLink>
						    </Breadcrumb.Item>
								{this.props.children}
						  </Breadcrumb>
		      </div>
		    );
		  }
		}
    class App extends Component {
      render(){
        return(
					<Router	history={hashHistory}>
	            <Route	path='/' component={Template}>
	                <IndexRoute	component={Main}	/>
	                <Route path='/quoteform' component={QuoteForm}	/>
	            </Route>
	        </Router>

        );
      }
    }
    ReactDOM.render(
        <App />,
        document.getElementById('app')
    );
});
