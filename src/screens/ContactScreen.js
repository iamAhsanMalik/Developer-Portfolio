import React from 'react';
import { NavLink } from 'react-router-dom';
const ContactScreen = () => {
	return (
		<section className='contact-section sec-padding'>
			<div className='container'>
				<div className='row'>
					<div className='section-title'>
						<h2>Contact Me</h2>
					</div>
				</div>
				<div className='row'>
					<div className='contact-form'>
						<form action=''>
							<div className='row'>
								<div className='input-group'>
									<input
										type='text'
										placeholder='Name'
										className='input-control'
										required
									/>
								</div>
								<div className='input-group'>
									<input
										type='email'
										placeholder='Email'
										className='input-control'
										required
									/>
								</div>
								<div className='input-group'>
									<input
										type='text'
										placeholder='Subject'
										className='input-control'
										required
									/>
								</div>
								<div className='input-group'>
									<textarea
										placeholder='Message'
										className='input-control'
										required></textarea>
								</div>
								<div className='submit-btn input-group'>
									<button type='submit' className='btn'>
										Send Message
									</button>
								</div>
							</div>
						</form>
					</div>
					<div className='contact-info'>
						<div className='contact-info-item'>
							<h3>Email</h3>
							<p>
								iamAhsanJoyia@
								<wbr />
								gmail.com
							</p>
						</div>
						<div className='contact-info-item'>
							<h3>Phone</h3>
							<p>(+92) 300 0991595</p>
						</div>
						<div className='contact-info-item'>
							<h3>Follow Me</h3>
							<div className='social-links'>
								<NavLink to='#' target='_blank'>
									<i className='fab fa-facebook-f'></i>
								</NavLink>
								<NavLink to='#' target='_blank'>
									<i className='fab fa-twitter'></i>
								</NavLink>
								<NavLink to='#' target='_blank'>
									<i className='fab fa-instagram'></i>
								</NavLink>
								<NavLink to='#' target='_blank'>
									<i className='fab fa-youtube'></i>
								</NavLink>
								<NavLink to='#' target='_blank'>
									<i className='fab fa-behance'></i>
								</NavLink>
								<NavLink to='#' target='_blank'>
									<i className='fab fa-dribbble'></i>
								</NavLink>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default ContactScreen;
