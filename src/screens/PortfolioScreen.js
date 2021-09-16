import React, { useState } from 'react';
import PortfolioModal from '../components/PortfolioModal';
import portfolioItems from '../data/portfolio';
const PortfolioScreen = () => {
	const [portfolio, setportfolio] = useState({ data: null, show: false });

	const Item = (portfolioItem) => {
		setportfolio({
			data: portfolioItem,
			show: true,
		});
	};
	return (
		<>
			<section className='portfolio-section sec-padding'>
				<div className='container'>
					<div className='row'>
						<div className='section-title'>
							<h2>Recent Work</h2>
						</div>
					</div>
					<div className='row'>
						{portfolioItems.map((portfolioItem) => (
							<div className='portfolio-item' key={portfolioItem._id}>
								<div className='portfolio-item-thumbnail'>
									<img src={portfolioItem.image} alt='portfolio item thumb' />
									<h3 className='portfolio-item-title'>
										{portfolioItem.title}
									</h3>
									<button
										onClick={() => Item(portfolioItem)}
										type='button'
										className='btn view-project-btn'>
										View Project
									</button>
								</div>
							</div>
						))}
						<PortfolioModal portfolioData={portfolio} show={portfolio.show} />
					</div>
				</div>
			</section>
		</>
	);
};

export default PortfolioScreen;
