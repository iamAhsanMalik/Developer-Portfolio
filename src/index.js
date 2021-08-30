import React from 'react';
import ReactDOM from 'react-dom';
import '../src/assets/css/style.css';
import '../src/assets/fonts/font-awesome/font-awesome.css';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';

ReactDOM.render(
	<React.StrictMode>
		<Router>
			<App />
		</Router>
	</React.StrictMode>,
	document.getElementById('root')
);
