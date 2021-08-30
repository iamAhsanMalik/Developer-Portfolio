import React from 'react';
import { NavLink } from 'react-router-dom';
import '../assets/css/home.css';
import profilePic from '../assets/images/ProfilePicture.jpg';

const HomeScreen = () => {
	return (
		<section className='home-section align-item-center'>
			<div className='container'>
				<div className='row align-item-center'>
					<div className='home-text'>
						<p>Hello, I'm</p>
						<h1>Ahsan Joyia</h1>
						<h2>Mern Stack Developer</h2>
						<NavLink to='about'>
							<button type='button' className='btn'>
								About Me
							</button>
						</NavLink>
						<NavLink to='portfolio'>
							<button type='button' className='btn'>
								Portfolio
							</button>
						</NavLink>
					</div>
					<div className='home-image'>
						<div className='image-box'>
							<img src={profilePic} alt='Profile' />
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default HomeScreen;
