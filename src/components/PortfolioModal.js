import React from 'react';
import { NavLink } from 'react-router-dom';

const PortfolioModal = ({ data, closeModal }) => {
	return (
		<>
			<div className='portfolio-popup open'>
				<div className='pp-inner'>
					<div className='pp-content'>
						<div className='pp-header'>
							<button className='btn pp-close' onClick={closeModal}>
								<i className='fas fa-times pp-close' />
							</button>
							<div className='pp-thumbnail'>
								<img src={data.image} alt={`${data.title}`} />
							</div>
							<h3 className='portfolio-item-title'>{data.title}</h3>
						</div>
						<div className='pp-body open'>
							<div className='portfolio-item-details'>
								<div className='description'>
									<p>{data.description}</p>
								</div>
								<div className='general-info'>
									<ul>
										<li>
											Created - <span>{data.creatDate}</span>
										</li>
										<li>
											Technology Used -<span>{data.technologyUsed}</span>
										</li>
										<li>
											Role - <span>{data.Role}</span>
										</li>
										<li>
											View Live -
											<span>
												<NavLink to='#' target='_blank'>
													{data.domain}
												</NavLink>
											</span>
										</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default PortfolioModal;
