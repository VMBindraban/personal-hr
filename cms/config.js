import home from './home';
import aboutUs from './about-us';
import servicesEmployer from './services-employer';
import servicesEmployee from './services-employee';
import contact from './contact';

export default {
  cms_manual_init: true,
  backend: {
    name: 'git-gateway',
    branch: 'main',
  },
  media_folder: 'public/upload',
  public_folder: 'upload',
  collections: [
    {
      name: 'pages',
      label: 'Pages',
      files: [home, aboutUs, servicesEmployer, servicesEmployee, contact],
    },
  ],
};
