import React from 'react';
import Lock from 'public/assets/icons/lock-light.svg';
import './footer.scss';

const Footer = () => (
	<footer className='footer'>
		<div className='footer__container'>
			<div className='footer__container-left'>
				<p>Copyright (c) 2023</p>
				<p>Clarifionsupport@clarifion.com</p>
			</div>
			<div className='footer__container-rigth'>
				<p>
					<Lock />
					Secure 256-bit SSL encryption.
				</p>
			</div>
		</div>
	</footer>
);

export default Footer;
