import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import aboutMePic from '../assets/images/AboutMe.png';
const AboutScreen = () => {
	const [aboutTabs, setaboutTabs] = useState(true);
	return (
		<section className='about-section sec-padding'>
			<div className='container'>
				<div className='row'>
					<div className='section-title'>
						<h2>About Me</h2>
					</div>
				</div>
				<div className='row'>
					<div className='about-image'>
						<div className='image-box'>
							<img src={aboutMePic} alt='Ahsan Joyia' />
						</div>
					</div>
					<div className='about-text'>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto
							quibusdam nesciunt architecto qui eos voluptatum libero autem
							dolore, saepe blanditiis non corporis? Magnam velit at, fugiat nam
							omnis saepe mollitia quidem repudiandae ducimus, voluptatum
							deserunt, distinctio exercitationem alias ut? Cupiditate
							perspiciatis quibusdam, consectetur fugiat eligendi temporibus
							mollitia pariatur quidem tempore.
						</p>
						<h3>Skills</h3>
						<div className='skills'>
							<div className='skill-item'>HTML</div>
							<div className='skill-item'>CSS</div>
							<div className='skill-item'>Tailwind CSS</div>
							<div className='skill-item'>Material Ui</div>
							<div className='skill-item'>JavaScript</div>
							<div className='skill-item'>PHP</div>
							<div className='skill-item'>React Js</div>
							<div className='skill-item'>Redux</div>
							<div className='skill-item'>Node Js</div>
							<div className='skill-item'>Express Js</div>
						</div>
						<div className='about-tabs'>
							<button
								type='button'
								className={`tab-item ${aboutTabs && 'active'}`}
								data-target='#education'
								onClick={() => setaboutTabs(!aboutTabs)}>
								Education
							</button>
							<button
								type='button'
								className={`tab-item ${!aboutTabs && 'active'}`}
								data-target='#experience'
								onClick={() => setaboutTabs(!aboutTabs)}>
								Experience
							</button>
						</div>
						<div
							className={`tab-content ${aboutTabs && 'active'}`}
							id='education'>
							<div className='timeline'>
								<div className='timeline-item'>
									<span className='date'>2013 - 2016</span>
									<h4>
										Master of Computer Science - <span>Arid University</span>
									</h4>
									<p>
										Lorem ipsum dolor sit amet consectetur, adipisicing elit.
										Consequatur delectus vel similique, velit ratione aperiam.
									</p>
								</div>
								<div className='timeline-item'>
									<span className='date'>2013 - 2016</span>
									<h4>
										Master of Computer Science - <span>Arid University</span>
									</h4>
									<p>
										Lorem ipsum dolor sit amet consectetur, adipisicing elit.
										Consequatur delectus vel similique, velit ratione aperiam.
									</p>
								</div>
								<div className='timeline-item'>
									<span className='date'>2013 - 2016</span>
									<h4>
										Master of Computer Science - <span>Arid University</span>
									</h4>
									<p>
										Lorem ipsum dolor sit amet consectetur, adipisicing elit.
										Consequatur delectus vel similique, velit ratione aperiam.
									</p>
								</div>
							</div>
						</div>
						<div
							className={`tab-content ${!aboutTabs && 'active'}`}
							id='experience'>
							<div className='timeline'>
								<div className='timeline-item'>
									<span className='date'>2013 - 2018</span>
									<h4>
										Software Developer - <span>BrightSols.Com</span>
									</h4>
									<p>
										Lorem ipsum dolor sit amet consectetur, adipisicing elit.
										Consequatur delectus vel similique, velit ratione aperiam.
									</p>
								</div>
								<div className='timeline-item'>
									<span className='date'>2013 - 2018</span>
									<h4>
										Software Developer - <span>BrightSols.Com</span>
									</h4>
									<p>
										Lorem ipsum dolor sit amet consectetur, adipisicing elit.
										Consequatur delectus vel similique, velit ratione aperiam.
									</p>
								</div>
								<div className='timeline-item'>
									<span className='date'>2013 - 2018</span>
									<h4>
										Software Developer - <span>BrightSols.Com</span>
									</h4>
									<p>
										Lorem ipsum dolor sit amet consectetur, adipisicing elit.
										Consequatur delectus vel similique, velit ratione aperiam.
									</p>
								</div>
							</div>
						</div>
						<NavLink to='/portfolio'>
							<button type='button' className='btn'>
								Download CV
							</button>
						</NavLink>
						<NavLink to='/contact'>
							<button type='button' className='btn'>
								Contact Me
							</button>
						</NavLink>
					</div>
				</div>
			</div>
		</section>
	);
};

export default AboutScreen;
