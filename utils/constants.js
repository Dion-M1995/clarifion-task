import Chek from 'public/assets/icons/check.svg';
import Truck from 'public/assets/icons/truck-light.svg';
import Heart from 'public/assets/icons/heart-outline.svg';
import Fluent from 'public/assets/icons/fluent.svg';
import TickStep from 'public/assets/icons/tick-step.svg';
import Offer from 'components/Steps/components/offer';

export const HEADER_LIST = [
	{ title: '30-DAY SATISFACTION GUARANTEE', icon: <Chek /> },
	{ title: 'Free delivery on orders over $40.00', icon: <Truck /> },
	{ title: '50.000+ HAPPY CUSTOMERS', icon: <Heart /> },
	{ title: '100% Money Back Guarantee', icon: <Fluent /> },
];

// steps
export const STEPS = [
	{ id: 1, title: 'Step 1 : Cart Review', render: () => null, icon: <TickStep /> },
	{ id: 2, title: 'Step 2 : Checkout', render: () => null, icon: <TickStep /> },
	{ id: 3, title: 'Step 3 : Special Offer', render: () => <Offer />, icon: <TickStep /> },
	{ id: 4, title: 'Step 4 : Confirmation', render: () => null, icon: <TickStep /> },
];
