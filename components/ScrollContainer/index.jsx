'use client';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import Arrow from 'public/assets/icons/arrow.svg';
import './scroll.scss';

export const ScrollContainer = ({ children, className, WrapEl = 'ul', amount }) => {
	const [next, setNext] = useState(false);
	const [prev, setPrev] = useState(false);
	const [isMouseDown, setIsMouseDown] = useState(false);
	const containerRef = useRef(null);
	const prevRef = useRef(null);
	const nextRef = useRef(null);

	const handleScroll = useCallback((amount, behavior) => {
		if (containerRef.current) {
			containerRef.current.scrollBy({ left: amount, behavior });
		}
	}, []);

	const handleMouseMove = useCallback(
		e => {
			if (isMouseDown) {
				handleScroll(-e.movementX, 'auto');
			}
		},
		[handleScroll, isMouseDown],
	);

	const handleMouseDown = useCallback(() => {
		setIsMouseDown(true);
	}, []);

	const handleMouseUp = useCallback(() => {
		setIsMouseDown(false);
	}, []);

	useEffect(() => {
		const observer = new IntersectionObserver(
			entries => {
				entries.forEach(entry => {
					if (entry.target === prevRef.current) {
						setPrev(!entry.isIntersecting);
					} else if (entry.target === nextRef.current) {
						setNext(!entry.isIntersecting);
					}
				});
			},
			{
				root: containerRef.current,
				rootMargin: '10px',
			},
		);

		if (prevRef.current) {
			observer?.observe(prevRef.current);
		}
		if (nextRef.current) {
			observer?.observe(nextRef.current);
		}

		return () => {
			observer.disconnect();
		};
	}, []);

	useEffect(() => {
		document.addEventListener('mousemove', handleMouseMove);
		document.addEventListener('mouseup', handleMouseUp);

		return () => {
			document.removeEventListener('mousemove', handleMouseMove);
			document.removeEventListener('mouseup', handleMouseUp);
		};
	}, [handleMouseMove, handleMouseUp, isMouseDown]);

	return (
		<div className='scroll'>
			{prev && (
				<button onClick={() => handleScroll(-amount, 'smooth')} className='prevButton'>
					<Arrow />
				</button>
			)}
			<ul ref={containerRef} onMouseDown={handleMouseDown} style={{ cursor: 'grabbing', userSelect: 'none' }} className={`scroll_con ${className}`}>
				<span ref={prevRef} />
				{children}
				<span ref={nextRef} />
			</ul>
			{next && (
				<button onClick={() => handleScroll(amount, 'smooth')} className='nextButton'>
					<Arrow />
				</button>
			)}
		</div>
	);
};

export default ScrollContainer;
