import laptopApp from '../assets/shopp.jpeg';
import Food from '../assets/food.png';
import Port from '../assets/portfolio.png';

const projects = [
  {
    title: 'Webb Shop',
    description: 'A web shop offering a diverse range of fashion and sports products. Products are stored in a database and categorized into sections like men, women, kids, and home.',
    image: laptopApp,
    website: 'https://webbshop-athletx-m.vercel.app/Home',
    github: 'https://github.com/youal9/webbshop'
  },
  {
    title: 'Mat applikation',
    description: 'A recipe search application that uses TheMealDB API to retrieve and display data on various dishes. Users can search for recipes, view detailed ingredients, and get instructions.',
    image: Food,
    website: 'https://matapplikation-y.vercel.app/',
    github: 'https://github.com/youal9/mat-applikationer'
  },
  {
    title: 'Portfolio',
    description: 'My portfolio, where I showcase my skills and projects in frontend development.',
    image: Port,
    website: 'https://youalsportfolio.vercel.app/',
    github: 'https://github.com/youal9/portfolio'
  }
];

export default projects;
