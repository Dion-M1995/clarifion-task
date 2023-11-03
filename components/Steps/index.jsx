'use client';
import React, { useState } from 'react';
import { useWindowSize } from '@/hooks/useWindowSize';
import './step.scss';

const Steps = ({ steps }) => {
	const [activeStep] = useState(3);
	const size = useWindowSize();

	return (
		<>
			<ul className='step'>
				{steps?.map(({ title, id, icon }) => (
					<li key={title} className={`step__item ${activeStep === id ? 'active' : activeStep + 1 === id ? 'next__active' : null}`}>
						<span>{activeStep === id || activeStep + 1 === id ? id : icon}</span>
						{size?.width <= 568 ? title?.slice(8)?.replaceAll(':', ' ') : title}
					</li>
				))}
			</ul>
			{steps[2]?.render()}
		</>
	);
};

export default Steps;
