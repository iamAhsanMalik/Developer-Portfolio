import React, { useEffect, useState } from 'react';
import ScreenLoader from './components/ScreenLoader';
import { Route, Switch } from 'react-router-dom';
import HomeScreen from './screens/HomeScreen';
import AboutScreen from './screens/AboutScreen';
import ContactScreen from './screens/ContactScreen';
import PortfolioScreen from './screens/PortfolioScreen';
import NavMenu from './components/NavMenu';

function App() {
	const [loader, setloader] = useState(true);

	useEffect(() => {
		setTimeout(() => {
			setloader(false);
		}, 200);
	});
	return (
		<>
			{loader === false ? (
				<div className='main'>
					<NavMenu />
					<Switch>
						<Route exact path='/' component={HomeScreen} />
						<Route path='/about' component={AboutScreen} />
						<Route path='/portfolio' component={PortfolioScreen} />
						<Route path='/contact' component={ContactScreen} />
						{/* <Route path='/one/:id' component={PortfolioModal} /> */}
					</Switch>
				</div>
			) : (
				<ScreenLoader />
			)}
		</>
	);
}

export default App;
