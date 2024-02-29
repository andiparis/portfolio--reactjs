const getHeroData = () => {
  return {
    id: 1,
    img: '/assets/images/hero.svg',
  };
};

const getSkillsData = () => {
  return [
    {
      id: 1,
      name: 'HTML5',
      img: '/assets/icons/html5.svg',
      primary: false,
    },
    {
      id: 2,
      name: 'CSS3',
      img: '/assets/icons/css3.svg',
      primary: false,
    },
    {
      id: 3,
      name: 'JavaScript',
      img: '/assets/icons/javascript.svg',
      primary: true,
    },
    {
      id: 4,
      name: 'PHP',
      img: '/assets/icons/php.svg',
      primary: true,
    },
    {
      id: 5,
      name: 'CodeIgniter',
      img: '/assets/icons/codeigniter.svg',
      primary: false,
    },
    {
      id: 6,
      name: 'Laravel',
      img: '/assets/icons/laravel.svg',
      primary: false,
    },
    {
      id: 7,
      name: 'NodeJS',
      img: '/assets/icons/nodejs.svg',
      primary: false,
    },
    {
      id: 8,
      name: 'ReactJS',
      img: '/assets/icons/react.svg',
      primary: false,
    },
    {
      id: 89,
      name: 'Git',
      img: '/assets/icons/git.svg',
      primary: false,
    },
    {
      id: 10,
      name: 'GitHub',
      img: '/assets/icons/github.svg',
      primary: false,
    },
  ];
};

const getProjectsData = () => {
  return [
    {
      id: 1,
      name: 'Sistem Informasi Akutansi',
      tech: 'CodeIgniter - STISLA - JavaScript',
      description:
        'The accounting application as the name suggests, provides features that can help manage accounting transactions. Furthermore, in this application you can print every existing report.',
      github: 'https://github.com/andiparis/accountant-app--codeigniter4',
      deploy: null,
      img: '/assets/images/p-akutansi.jpg',
    },
    {
      id: 2,
      name: 'Know Your Weather',
      tech: 'ReactJS - Material UI - API',
      description:
        'This application provides real-time weather forecast information from openweather API. This application was built together with my friends.',
      github: 'https://github.com/andiparis/know-your-weather--development',
      deploy: 'https://knowyourweather-app.netlify.app',
      img: '/assets/images/p-know-your-weather.jpg',
    },
    {
      id: 3,
      name: 'MyCasir',
      tech: 'CodeIgniter - AdminLTE - jQuery',
      description:
        ' This application can help in managing sales transactions in a shop. In the application, several features are available for managing merchandise data and of course the sales transactions themselves.',
      github: 'https://github.com/andiparis/mycasir2--codeigniter3',
      deploy: null,
      img: '/assets/images/p-pos.jpg',
    },
    {
      id: 4,
      name: 'InResto',
      tech: 'JavaScript - PWA - API',
      description:
        'This application displays a variety of restaurant data available via the Dicoding API. This application implements PWA, making it very user-friendly when used on mobile devices.',
      github: 'https://github.com/andiparis/in-resto--javascript',
      deploy: 'https://indonesiarestaurant.netlify.app',
      img: '/assets/images/p-inresto.jpg',
    },
    {
      id: 5,
      name: 'SIP-BSM',
      tech: 'CodeIgniter - AdminLTE - Bootstrap',
      description:
        'This application is my TA project. In this application, you can manage your own training activities or training requests from the community.',
      github: 'https://github.com/andiparis/sip-bsm--codeigniter3',
      deploy: null,
      img: '/assets/images/p-sip-bsm.jpg',
    },
  ];
};

const getSocialsData = () => {
  return [
    {
      id: 1,
      name: 'WhatsApp',
      link: 'https://wa.me/6281539473834',
      img: '/assets/icons/whatsapp.svg',
    },
    {
      id: 2,
      name: 'Email',
      link: 'mailto:andiparis02@gmail.com?',
      img: '/assets/icons/email.svg',
    },
    {
      id: 3,
      name: 'LinkedIn',
      link: 'https://www.linkedin.com/in/andi-paris-bachtiar',
      img: '/assets/icons/linkedin.svg',
    },
    {
      id: 4,
      name: 'GitHub',
      link: 'https://github.com/andiparis',
      img: '/assets/icons/github.svg',
    },
    {
      id: 5,
      name: 'StackOverflow',
      link: 'https://stackoverflow.com/users/22855844/andi-paris-bachtiar',
      img: '/assets/icons/github.svg',
    },
  ];
};

export { getHeroData, getSkillsData, getProjectsData, getSocialsData };
