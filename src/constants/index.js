
import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

import testimony1 from "../assets/testimonies/John-Ogba-Ifeakanwa.jpg";
import testimony2 from "../assets/testimonies/Durosinmi-Etti-1062x598.jpg";
import testimony3 from "../assets/testimonies/man2.avif";

import project1 from "../assets/Projects-done-images/cryptoWorld.png";
import project2 from "../assets/Projects-done-images/filmspot.png";
import project3 from "../assets/Projects-done-images/e-commerce.png";

import experience1 from "../assets/experience-icons/fiverr.png";
import experience2 from "../assets/experience-icons/upwork.png";
import experience3 from "../assets/experience-icons/intuit.jpeg";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Mobile App Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Fullstack Developer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Fullstack Developer",
    company_name: "Fiverr",
    icon: experience1,
    iconBg: "#383E56",
    date: "November 2022 - Present",
    points: [
      "Developing and maintaining fullstack applications using MERN stack and other related technologies.",
      "Developed and maintained Mobile applications using React-Native and other related libraries",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Fullstack web and mobile application Developer",
    company_name: "Upwork",
    icon: experience2,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Present",
    points: [
      "Developing and maintaining applications using react, react-native, Nodejs, expressjs, mongoDB and other related technologies.",
      "Developed and maintained Mobile applications using MERN and other related rechnologies",
      "Collaborated with designers to ensure seamless integration.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
    ],
  },
  {
    title: "Web Developer",
    company_name: "Acme Co.",
    icon: experience3,
    iconBg: "#E6DEDD",
    date: "Febuary 2023 - August 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Implemented user interface designs and optimized website performance.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Conducted code reviews and provided feedback",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  // {
  //   title: "Full stack Developer",
  //   company_name: "Meta",
  //   icon: meta,
  //   iconBg: "#E6DEDD",
  //   date: "Jan 2023 - Present",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Favour proved me wrong.",
    name: "Michael Samuel",
    designation: "CFO",
    company: "Acme Co",
    image: testimony1,
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Favour does.",
    name: "Grace Ife",
    designation: "COO",
    company: "DEF Corp",
    image: testimony2,
  },
  {
    testimonial:
      "After Favour optimized our website, our traffic increased by 50%. We can't thank him enough!",
    name: "David Williams",
    designation: "CTO",
    company: "Milli Enterprises",
    image: testimony3,
  },
];

const projects = [
  {
    name: "Crypto World",
    description:
      "Web-based platform that allows users to see current global crypto statistics, see the list of the worlds' top 100 crypto coins and get the coins' details and also live chart dating as far back as 5years ago, and also see current crypto news and read them.",
    tags: [
      {
        name: "reactJS",
        color: "blue-text-gradient",
      },
      {
        name: "redux toolkit",
        color: "green-text-gradient",
      },
      {
        name: "antd",
        color: "pink-text-gradient",
      },
      {
        name: "APIs",
        color: "orange-text-gradient",
      },
    ],
    image: project1,
    source_code_link: "https://github.com/Iamfavur/CryptoWorld",
    link_to_site: "https://iamfavur.github.io/CryptoWorld/",
  },
  {
    name: "FilmSpot",
    description:
      "A movie recognition and recommendation app that allows users to search for movies, get the details of the movie, add to library, and also get recommendations of similar movies (without the use of external APIs).",
    tags: [
      {
        name: "react native",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "redux",
        color: "pink-text-gradient",
      },
      {
        name: "expressJS",
        color: "blue-text-gradient",
      },
      {
        name: "nodeJS",
        color: "green-text-gradient",
      },
      {
        name: "aws",
        color: "orange-text-gradient",
      },
      {
        name: "Websocket",
        color: "pink-text-gradient",
      },
    ],
    image: project2,
    source_code_link: "#",
    link_to_site: "https://filmspot-download.vercel.app/",
  },
  {
    name: "E-commerce Store",
    description:
      "An E-commerce store that display the list of available products and their details when the user click on the product, with the ability to add products to cart, check out, clear cart or continue shopping.",
    tags: [
      {
        name: "reactJS",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: project3,
    source_code_link: "https://github.com/Iamfavur/Ecommerce",
    link_to_site: "https://iamfavur.github.io/Ecommerce/",
  },
];

export { services, technologies, experiences, testimonials, projects };