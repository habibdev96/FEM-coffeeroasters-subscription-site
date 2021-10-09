import collectionOne from './assets/home/desktop/image-gran-espresso.png';
import collectionTwo from './assets/home/desktop/image-planalto.png';
import collectionThree from './assets/home/desktop/image-piccollo.png';
import collectionFour from './assets/home/desktop/image-danche.png';

import featureIconOne from './assets/home/desktop/icon-coffee-bean.svg';
import featureIconTwo from './assets/home/desktop/icon-gift.svg';
import featureIconThree from './assets/home/desktop/icon-truck.svg';

import { FaFacebookSquare, FaTwitter, FaInstagram } from 'react-icons/fa';

import sectionBgOne from './assets/about/desktop/image-hero-whitecup.jpg';
import sectionBgTwo from './assets/plan/desktop/image-hero-blackcup.jpg';

import headquarterIconOne from './assets/about/desktop/illustration-uk.svg';
import headquarterIconTwo from './assets/about/desktop/illustration-canada.svg';
import headquarterIconThree from './assets/about/desktop/illustration-australia.svg';

export const linksData = [
  {
    id: 1,
    path: '/',
    text: 'Home',
  },
  {
    id: 2,
    path: '/About',
    text: 'About',
  },
  {
    id: 3,
    path: '/Plan',
    text: 'Create Your Plan',
  },
];

export const collectionsData = [
  {
    id: 1,
    image: collectionOne,
    title: 'Gran Expresso',
    description:
      'Light and flavorful blend with cocoa and black pepper for an intense experience',
  },
  {
    id: 2,
    image: collectionTwo,
    title: 'Planalto',
    description:
      'Brazilian dark roast with rich and velvety body, and hints of fruits and nuts',
  },
  {
    id: 3,
    image: collectionThree,
    title: 'Piccollo',
    description:
      'Mild and smooth blend featuring notes of toasted almond and dried cherry',
  },
  {
    id: 4,
    image: collectionFour,
    title: 'Danche',
    description:
      'Ethiopian hand-harvested blend densely packed with vibrant fruit notes',
  },
];

export const featuresData = [
  {
    id: 1,
    icon: featureIconOne,
    title: 'Best quality',
    description:
      'Discover an endless variety of the world’s best artisan coffee from each of our roasters.',
  },
  {
    id: 2,
    icon: featureIconTwo,
    title: 'Exclusive benefits',
    description:
      'Special offers and swag when you subscribe, including 30% off your first shipment.',
  },
  {
    id: 3,
    icon: featureIconThree,
    title: 'Free shipping',
    description:
      'We cover the cost and coffee is delivered fast. Peak freshness: guaranteed.',
  },
];

export const stepsData = [
  {
    id: 1,
    number: '01',
    title: 'Pick your coffee',
    description:
      'Select from our evolving range of artisan coffees. Our beans are ethically sourced and we pay fair prices for them. There are new coffees in all profiles every month for you to try out.',
  },
  {
    id: 2,
    number: '02',
    title: 'Choose your frequency',
    description:
      'Customize your order frequency, quantity, even your roast style and grind type. Pause, skip or cancel your subscription with no commitment through our online portal.',
  },
  {
    id: 3,
    number: '03',
    title: 'Receive and enjoy!',
    description:
      'We ship your package within 48 hours, freshly roasted. Sit back and enjoy award-winning world-class coffees curated to provide a distinct tasting experience.',
  },
];

export const socialsData = [
  {
    id: 1,
    social: 'Facebook',
    icon: <FaFacebookSquare />,
    path: '#!',
  },
  {
    id: 2,
    social: 'Twitter',
    icon: <FaTwitter />,
    path: '#!',
  },
  {
    id: 3,
    social: 'Instagram',
    icon: <FaInstagram />,
    path: '#!',
  },
];

export const sectionHerosData = [
  {
    id: 1,
    bg: sectionBgOne,
    title: 'About Us',
    description:
      'Coffeeroasters began its journey of exotic discovery in 1999, highlighting stories of coffee from around the world. We have since been dedicated to bring the perfect cup - from bean to brew - in every shipment.',
  },
  {
    id: 2,
    bg: sectionBgTwo,
    title: 'Create a plan',
    description:
      'Build a subscription plan that best fits your needs. We offer an assortment of the best artisan coffees from around the globe delivered fresh to your door.',
  },
];

export const headquartersData = [
  {
    id: 1,
    icon: headquarterIconOne,
    headquarter: 'United Kingdom',
    address: '68 Asfordby Rd',
    city: 'Alcaston',
    province: 'SY6 1YA',
    phone: '+44 1241 918425',
  },
  {
    id: 2,
    icon: headquarterIconTwo,
    headquarter: 'Canada',
    address: '1528 Eglinton Avenue',
    city: 'Toronto',
    province: 'Ontario M4P 1A6',
    phone: '+1 416 485 2997',
  },
  {
    id: 3,
    icon: headquarterIconThree,
    headquarter: 'Australia',
    address: '36 Swanston Street',
    city: 'Kewell',
    province: 'Victoria',
    phone: '+61 4 9928 3629',
  },
];
