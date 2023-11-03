import React from 'react';
import Image from 'next/image';
import logo from 'public/assets/images/clarifion_Logo.png';
import secure from 'public/assets/images/secure.png';
import norton from 'public/assets/images/norton.png';
import './clarifion.scss';

const Clarifion = () => (
	<div className='clarifion'>
		<div className='clarifion__top'>
			<div className='clarifion__top-left'>
				<Image src={logo} alt='logo' />
			</div>
			<div className='clarifion__top-right'>
				<Image src={secure} alt='logo' />
				<Image src={norton} alt='logo' />
			</div>
		</div>
		<div className='clarifion__bottom'>
			<div className='clarifion__bottom-texts'>
				<h2>Wait ! your order in progress.</h2>
				<p>Lorem ipsum dolor sit amet, consectetur adipiscing </p>
			</div>
		</div>
	</div>
);

export default Clarifion;
