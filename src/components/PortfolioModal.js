import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
const PortfolioModal = ({ portfolioData, show }) => {
	const portfolioItem = portfolioData;
	const [openModal, setopenModal] = useState({ showState: false });
	useEffect(() => {
		setopenModal({
			showState: show,
		});
	}, [show]);

	return (
		<>
			<div
				className={`portfolio-popup ${
					openModal.showState === true ? 'open' : ''
				}`}>
				<div className='pp-inner'>
					<div className='pp-content'>
						<div className='pp-header'>
							<button
								className='btn pp-close'
								onClick={() =>
									setopenModal({
										showState: false,
									})
								}>
								<i className='fas fa-times pp-close'></i>
							</button>
							<div className='pp-thumbnail'>
								<img src={portfolioItem.image} alt={`${portfolioItem.title}`} />
							</div>
							<h3 className='portfolio-item-title'>{portfolioItem.title}</h3>
						</div>
						<div className='pp-body'>
							<div className='portfolio-item-details'>
								<div className='description'>
									<p>{portfolioItem.description}</p>
								</div>
								<div className='general-info'>
									<ul>
										<li>
											Created - <span>{portfolioItem.creatDate}</span>
										</li>
										<li>
											Technology Used -
											<span>{portfolioItem.technologyUsed}</span>
										</li>
										<li>
											Role - <span>{portfolioItem.Role}</span>
										</li>
										<li>
											View Live -
											<span>
												<NavLink to='#' target='_blank'>
													{portfolioItem.domain}
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
