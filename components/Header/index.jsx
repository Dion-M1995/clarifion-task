'use client';
import React from 'react';
import { HEADER_LIST } from '@/utils/constants';
import ScrollContainer from '../ScrollContainer';
import { useWindowSize } from '@/hooks/useWindowSize';
import './header.scss';

const Header = () => {
	const size = useWindowSize();
	return (
		<header className='header'>
			<div className='header__container'>
				{size?.width >= 769 && (
					<ul className='header__list'>
						{HEADER_LIST?.map(({ title, icon }) => (
							<li key={title} className='header__list-item'>
								<>
									{icon}
									{title}
								</>
							</li>
						))}
					</ul>
				)}
				{size?.width <= 768 && (
					<ScrollContainer amount={size?.width <= 360 ? 300 : 350} className='header__list'>
						{HEADER_LIST?.map(({ title, icon }) => (
							<li key={title} className='header__list-item'>
								<>
									{icon}
									{title}
								</>
							</li>
						))}
					</ScrollContainer>
				)}
			</div>
		</header>
	);
};

export default Header;
