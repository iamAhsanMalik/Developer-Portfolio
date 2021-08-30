import React from 'react';
import ScreenLoader from './components/ScreenLoader';
import { Route, Switch } from 'react-router-dom';
import HomeScreen from './screens/HomeScreen';
import AboutScreen from './screens/AboutScreen';
import ContactScreen from './screens/ContactScreen';
import PortfolioScreen from './screens/PortfolioScreen';
function App() {
	return (
		<div className='main'>
			<ScreenLoader />
			<Switch>
				<Route exact path='/' render={() => <HomeScreen title='Home Page' />} />
				<Route
					path='/about'
					render={() => <AboutScreen title='About Page' />}
				/>
				<Route
					path='/portfolio'
					render={() => <PortfolioScreen title='Portfolio Page' />}
				/>
				<Route
					path='/contact'
					render={() => <ContactScreen title='Contact Page' />}
				/>
			</Switch>
		</div>
	);
}

export default App;
