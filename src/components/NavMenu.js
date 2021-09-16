import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import '../assets/css/navMenu.scss';

const NavMenu = () => {
	const [navigationMenu, setnavigationMenu] = useState(false);
	return (
		<header className={`header ${navigationMenu && 'active'}`}>
			<div className='container'>
				<div className='row flex-end'>
					<button
						type='button'
						className='nav-toggler'
						onClick={() => setnavigationMenu(!navigationMenu)}
					>
						<span></span>
					</button>
					<nav className='nav'>
						<div className='nav-inner'>
							<ul>
								<li>
									<NavLink
										to='/'
										className='nav-item'
										onClick={() => setnavigationMenu(!navigationMenu)}
									>
										Home
									</NavLink>
								</li>
								<li>
									<NavLink
										to='/about'
										className='nav-item'
										onClick={() => setnavigationMenu(!navigationMenu)}
									>
										About
									</NavLink>
								</li>
								<li>
									<NavLink
										to='/portfolio'
										className='nav-item'
										onClick={() => setnavigationMenu(!navigationMenu)}
									>
										Portfolio
									</NavLink>
								</li>
								<li>
									<NavLink
										to='/contact'
										className='nav-item'
										onClick={() => setnavigationMenu(!navigationMenu)}
									>
										Contact
									</NavLink>
								</li>
							</ul>
						</div>
					</nav>
				</div>
			</div>
		</header>
	);
};

export default NavMenu;
