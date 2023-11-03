'use client';
import { Footer, Header, Steps } from 'components';
import Clarifion from './components/Clarifion';
import { STEPS } from '@/utils/constants';

const Home = () => (
	<div className='wrapper'>
		<Header />
		<main className='main'>
			<div className='__container'>
				<Clarifion />
				<Steps steps={STEPS} />
			</div>
		</main>
		<Footer />
	</div>
);

export default Home;
