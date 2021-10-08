import collectionOne from './assets/home/desktop/image-gran-espresso.png';
import collectionTwo from './assets/home/desktop/image-planalto.png';
import collectionThree from './assets/home/desktop/image-piccollo.png';
import collectionFour from './assets/home/desktop/image-danche.png';

import featureIconOne from './assets/home/desktop/icon-coffee-bean.svg';
import featureIconTwo from './assets/home/desktop/icon-gift.svg';
import featureIconThree from './assets/home/desktop/icon-truck.svg';

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
