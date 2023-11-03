import React from 'react';
import Image from 'next/image';
import clarifion from 'public/assets/images/image6=4.jpg';
import imageremovebg from 'public/assets/images/image-removebg.png';
import user from 'public/assets/images/user.jpg';
import Star from 'public/assets/icons/star.svg';
import CheckMArk from 'public/assets/icons/check_mark.svg';
import Tick from 'public/assets/icons/tick-circle.svg';
import Percent from 'public/assets/icons/percent.svg';
import Guarantee from 'public/assets/images/image6.png';
import Lock from 'public/assets/icons/lock.svg';

import Amex from 'public/assets/icons/amex.svg';
import Apple from 'public/assets/icons/apple-pay.svg';
import Google from 'public/assets/icons/google-pay.svg';
import MasterCard from 'public/assets/icons/mastercard.svg';
import PayPal from 'public/assets/icons/paypal.svg';
import Shop from 'public/assets/icons/shop-pay.svg';
import Visa from 'public/assets/icons/visa.svg';
import './offer.scss';

const Offer = () => (
	<div className='offer'>
		<div className='offer__left'>
			<div className='offer__left-img'>
				<Image src={clarifion} alt='clarifion' />
			</div>
			<div className='offer__left-comment'>
				<div className='offer__left-comment-top'>
					<Image src={user} alt='user' />
					<div className='comment-top__right'>
						<Star />
						<Star />
						<Star />
						<p>
							Ken T.{' '}
							<span>
								{' '}
								<CheckMArk /> Verified Customer
							</span>
						</p>
					</div>
				</div>
				<div className='offer__left-comment-bottom'>
					<p>
						“As soon as the Clarifions arrived I put one in my bedroom. This was late in the afternoon. When I went to the bedroom in the evening it smelled clean. When I went to bed I felt I could
						breathe better. Wonderful.”
					</p>
				</div>
			</div>
		</div>
		<div className='offer__right'>
			<div className='offer__right-title'>
				<h2>
					<span>ONE TIME ONLY</span> special price for 6 extra Clarifion for only <span>$14 each</span> ($84.00 total!)
				</h2>
			</div>
			<div className='clarifionair'>
				<div className='clarifionair__top'>
					<div className='clarifionair__top-left'>
						<Image src={imageremovebg} alt='imageremovebg' />
					</div>
					<div className='clarifionair__top-right'>
						<div className='top-right-top'>
							<div>
								<h3>Clarifion Air Ionizer</h3>
								<Star />
								<Star />
								<Star />
								<Star />
								<Star />
							</div>
							<p>
								<span>$180</span>$84
							</p>
						</div>
						<div className='top-right-bottom'>
							<p>
								<span>
									<span></span>
								</span>
								12 left in Stock
							</p>
							<p className='top-right-bottom-text'>Simply plug a Clarifion into any standard outlet and replace bulky, expensive air purifiers with a simple.</p>
						</div>
					</div>
				</div>
				<div className='top-right-bottom-mobile'>
					<p>Simply plug a Clarifion into any standard outlet and replace bulky, expensive air purifiers with a simple.</p>
				</div>
				<div className='clarifionair__list'>
					<ul>
						<li>
							<span>
								<Tick />
							</span>
							Negative Ion Technology may <span> help with allergens</span>
						</li>
						<li>
							<span>
								<Tick />
							</span>
							Designed for <span> air rejuvenation</span>
						</li>
						<li>
							<span>
								<Tick />
							</span>
							<span>Perfect for every room </span> in all types of places.
						</li>
					</ul>
					<div className='clarifionair__list-bottom'>
						<span className='clarifionair__list-bottom-circle'>
							<Percent />
						</span>
						<p>
							Save <span>53%</span> and get <span>6 extra Clarifision</span> for only <span>$14 Each</span>.
						</p>
					</div>
				</div>
				<div className='clarifionair__button'>
					<button>Yes - Claim my discount</button>
				</div>
				<div className='clarifionair__bottom'>
					<div className='clarifionair__bottom-top'>
						<p>Free shipping</p>
						<p>
							<Lock />
							Secure 256-bit SSL encryption.
						</p>
						<div className='clarifionair__bottom-top-card-text'>
							<p>Free shipping</p>
							<p>
								<Lock />
								Secure 256-bit SSL encryption.
							</p>
						</div>
						<div className='clarifionair__bottom-top-card'>
							<Amex />
							<Apple />
							<Google />
							<MasterCard />
							<PayPal />
							<Shop />
							<Visa />
						</div>
					</div>
					<div className='clarifionair__bottom-bottom'>
						<h3>No thanks, I don’t want this.</h3>
						<div className='clarifionair__bottom-bottom-texts'>
							<Image src={Guarantee} alt='guarantia' />
							<p>
								If you are not completely thrilled with your Clarifion - We have a <span>30 day satisfaction guarantee</span>. Please refer to our return policy at the bottom of the page for more
								details. Happy Shopping!
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
);

export default Offer;
