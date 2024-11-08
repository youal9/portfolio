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
    title: 'Gym',
    description: 'I built a fully responsive gym website that allows users to easily navigate through sections about gym memberships, personal trainers, and the team. I used React to create a dynamic interface and Framer Motion to implement smooth animations during page transitions and scrolling',
    website: 'https://invasion-gym.netlify.app/',
    github: 'https://github.com/youal9/Gymm'
  }
];

export default projects;
