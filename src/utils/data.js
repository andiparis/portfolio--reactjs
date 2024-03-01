const getHeroData = () => {
  return {
    id: 1,
    img: '/assets/images/hero.svg',
  };
};

const getSocialsData = () => {
  return [
    {
      id: 1,
      name: 'WhatsApp',
      link: 'https://wa.me/6281539473834',
    },
    {
      id: 2,
      name: 'Email',
      link: 'mailto:andiparis02@gmail.com?',
    },
    {
      id: 3,
      name: 'LinkedIn',
      link: 'https://www.linkedin.com/in/andi-paris-bachtiar',
    },
    {
      id: 4,
      name: 'GitHub',
      link: 'https://github.com/andiparis',
    },
    {
      id: 5,
      name: 'StackOverflow',
      link: 'https://stackoverflow.com/users/22855844/andi-paris-bachtiar',
    },
  ];
};

const getTechStacksData = () => {
  return [
    {
      id: 1,
      name: 'CSS3',
    },
    {
      id: 2,
      name: 'PHP',
    },
    {
      id: 3,
      name: 'JavaScript',
    },
    {
      id: 4,
      name: 'Java',
    },
    {
      id: 5,
      name: 'CodeIgniter',
    },
    {
      id: 6,
      name: 'Laravel',
    },
    {
      id: 7,
      name: 'NodeJS',
    },
    {
      id: 8,
      name: 'ReactJS',
    },
    {
      id: 9,
      name: 'Bootstrap',
    },
    {
      id: 10,
      name: 'MUI',
    },
    {
      id: 11,
      name: 'MySQL',
    },
    {
      id: 12,
      name: 'Git',
    },
    {
      id: 13,
      name: 'GitHub',
    },
  ];
};

const getProjectsData = () => {
  return [
    {
      id: 1,
      name: 'Accountant App',
      tech: ['CodeIgniter', 'STISLA', 'JavaScript'],
      description:
        'The accounting app as the name suggests, provides features that can help manage accounting transactions. In this app, user can also print every existing report. This app was built using CodeIgniter and STISLA templates.',
      github: 'https://github.com/andiparis/accountant-app--codeigniter4',
      demo: null,
      img: '/assets/images/p-accountant.jpg',
    },
    {
      id: 2,
      name: 'Inventory App',
      tech: ['Laravel', 'REST API', 'ReactJS', 'Material Dashboard'],
      description:
        'This app can help manage goods in the warehouse, such as stock management or delivery of goods. This app was created using Laravel to build a RESTful API and ReactJS to build the UI with the help of the Material Dashboard template.',
      github: 'https://github.com/andiparis/inventory-app-fe--reactjs',
      demo: null,
      img: '/assets/images/p-inventory.jpg',
    },
    {
      id: 3,
      name: 'LaraBlogs',
      tech: ['Laravel', 'Bootstrap', 'JavaScript'],
      description:
        'This is a news website. In here users can search for articles using keyword, category, or author. Users who have an account can manage the articles they write. This web was built using Laravel and Bootstrap.',
      github: 'https://github.com/andiparis/blogs-app--laravel8',
      demo: null,
      img: '/assets/images/p-blogs.jpg',
    },
    {
      id: 4,
      name: 'Know Your Weather',
      tech: ['ReactJS', 'MUI', 'REST API', 'SPA', 'PWA'],
      description:
        'This app provides real-time weather forecast information from OpenWeather API. This app was built together with my friends using ReactJS. This app also implements PWA so that it is easier for users to use.',
      github: 'https://github.com/andiparis/know-your-weather--development',
      demo: 'https://knowyourweather-app.netlify.app',
      img: '/assets/images/p-know-your-weather.jpg',
    },
    {
      id: 5,
      name: 'MyCasir',
      tech: ['CodeIgniter', 'AdminLTE', 'jQuery'],
      description:
        'MyCasir is an app for managing sales transactions in a shop. In the app, several features are available for managing goods and of course the sales transactions themselves. This app was created using CodeIgniter and AdminLTE template.',
      github: 'https://github.com/andiparis/mycasir2--codeigniter3',
      demo: null,
      img: '/assets/images/p-pos.jpg',
    },
    {
      id: 6,
      name: 'InResto',
      tech: ['JavaScript', 'REST API', 'PWA'],
      description:
        'This app displays a variety of restaurant data available via the Dicoding API. This app implements PWA, making it very user-friendly when used on mobile devices. This app was bulid pure using JavaScript and CSS.',
      github: 'https://github.com/andiparis/in-resto--javascript',
      demo: null,
      img: '/assets/images/p-inresto.jpg',
    },
    {
      id: 7,
      name: 'SIP-BSM',
      tech: ['CodeIgniter', 'AdminLTE', 'Bootstrap'],
      description:
        'SIP-BSM is management training event app. In this app, users can manage their own training activities or training requests from the community. This app was built using CodeIgniter and AdminLTE template.',
      github: 'https://github.com/andiparis/sip-bsm--codeigniter3',
      demo: null,
      img: '/assets/images/p-sip-bsm.jpg',
    },
    {
      id: 8,
      name: 'Personal Notes App',
      tech: ['ReactJS', 'REST API', 'SPA'],
      description:
        'This is a notes app, which uses Dicoding API to perform CRUD operations. This notes app is intended for personal use, so to be able to write a note users need to have a registered account. This app was built using ReactJS',
      github: 'https://github.com/andiparis/personal-notes-app--reactjs',
      demo: null,
      img: '/assets/images/p-notes.jpg',
    },
  ];
};

export { getHeroData, getSocialsData, getTechStacksData, getProjectsData };
