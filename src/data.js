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

export const subscriptionData = [
  {
    id: 1,
    number: '01',
    step: 'Preferences',
    question: 'How do you drink your coffee?',
    options: [
      {
        id: 1.1,
        optionTitle: 'Capsule',
        optionDescription:
          'Compatible with Nespresso systems and similar brewers',
      },
      {
        id: 1.2,
        optionTitle: 'Filter',
        optionDescription:
          'For pour over or drip methods like Aeropress, Chemex, and V60',
      },
      {
        id: 1.3,
        optionTitle: 'Expresso',
        optionDescription:
          'Dense and finely ground beans for an intense, flavorful experience',
      },
    ],
  },
  {
    id: 2,
    number: '02',
    step: 'Bean Type',
    question: 'What type of coffee?',
    options: [
      {
        id: 2.1,
        optionTitle: 'Single origin',
        optionDescription:
          'Distinct, high quality coffee from a specific family-owned farm',
      },
      {
        id: 2.2,
        optionTitle: 'Decaf',
        optionDescription:
          'Just like regular coffee, except the caffeine has been removed',
      },
      {
        id: 2.3,
        optionTitle: 'Blended',
        optionDescription:
          'Combination of two or three dark roasted beans of organic coffees',
      },
    ],
  },
  {
    id: 3,
    number: '03',
    step: 'Quantity',
    question: 'How much would you like?',
    options: [
      {
        id: 3.1,
        optionTitle: '250g',
        optionDescription:
          'Perfect for the solo drinker. Yields about 12 delicious cups.',
      },
      {
        id: 3.2,
        optionTitle: '500g',
        optionDescription:
          'Perfect option for a couple. Yields about 40 delectable cups.',
      },
      {
        id: 3.3,
        optionTitle: '1000g',
        optionDescription:
          'Perfect for offices and events. Yields about 90 delightful cups.',
      },
    ],
  },
  {
    id: 4,
    number: '04',
    step: 'Grind option',
    question: 'Want us to grind them?',
    options: [
      {
        id: 4.1,
        optionTitle: 'Wholebean',
        optionDescription:
          'Best choice if you cherish the full sensory experience',
      },
      {
        id: 4.2,
        optionTitle: 'Filter',
        optionDescription:
          'For drip or pour-over coffee methods such as V60 or Aeropress',
      },
      {
        id: 4.3,
        optionTitle: 'Cafetiére',
        optionDescription:
          'Course ground beans specially suited for french press coffee',
      },
    ],
  },
  {
    id: 5,
    number: '05',
    step: 'Deliveries',
    question: 'How often should we deliver?',
    options: [
      {
        id: 5.1,
        optionTitle: 'Every week',
        optionDescription:
          '$14.00 per shipment. Includes free first-class shipping.',
      },
      {
        id: 5.2,
        optionTitle: 'Every 2 weeks',
        optionDescription:
          '$17.25 per shipment. Includes free priority shipping.',
      },
      {
        id: 5.3,
        optionTitle: 'Every month',
        optionDescription:
          '$22.50 per shipment. Includes free priority shipping.',
      },
    ],
  },
];
