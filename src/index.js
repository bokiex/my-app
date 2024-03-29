import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
import './index.css';
import App from './login';
import Home from './home';
import * as serviceWorker from './serviceWorker';

const routing = (
	<Router>
		<div>
			<Route exact path="/" component ={App} />
			<Route path="/home" component ={Home}/>
		</div>
	</Router>)

ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
