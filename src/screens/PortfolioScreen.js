import React from 'react';
import '../assets/css/portfolio.css';
import portfolioDetails from '../data/portfolio';

const PortfolioScreen = () => {
	return (
		<section class='portfolio-section sec-padding'>
			<div class='container'>
				<div class='row'>
					<div class='section-title'>
						<h2>Recent Work</h2>
					</div>
				</div>
				<div class='row'>
					{portfolioDetails.map((portfolioItem) => (
						<div class='portfolio-item'>
							<div class='portfolio-item-thumbnail'>
								<img src={portfolioItem.image} alt='portfolio item thumb' />
								<h3 class='portfolio-item-title'>{portfolioItem.title}</h3>
								<button type='button' class='btn view-project-btn'>
									View Project
								</button>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default PortfolioScreen;
