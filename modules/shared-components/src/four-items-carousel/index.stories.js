import React from 'react';
import { storiesOf } from '@storybook/react';

import FourItemCarousel from '.';

const items = [
  {
    title: 'Comida por machete',
    type: 'image',
    duration: {
      minutes: '1',
      seconds: '55',
    },
    description: 'Dani se siente hambrienta y apartada de su nuevo grupo, así que decide explorar los alrededores, encontrando nuevos amigos con los que podrá negociar comida por el uso de su machete.',
    preview_image: {
      image_1_1: 'https://cdn.admin-tudiscovery.com/sites/default/files/styles/slider_mobile/public/2018-12/Comida%20por%20machete.jpeg?itok=sNzT-afs',
      image_url: 'https://cdn.admin-tudiscovery.com/sites/default/files/styles/destacados/public/2018-12/Comida%20por%20machete.jpeg?itok=CJtDQgD-',
      image_alt: 'Comida por machete',
    },
    url: '/discovery/supervivencia-al-desnudo-edicion-extrema/video/comida-por-machete',
    categories: [{
      name: 'aventura',
      url: '/temas/aventura',
    }, {
      name: 'supervivencia',
      url: '/temas/supervivencia',
    }],
    channel: {
      name: 'Discovery',
      logo: 'https://cdn.admin-tudiscovery.com/sites/default/files/2018-12/Discovery-Logo-white.png',
      url: '/discovery',
      logo_svg: 'https://cdn.admin-tudiscovery.com/sites/default/files/logos/discovery.svg',
    },
  }, {
    title: 'Creando un parque temático para niños',
    region: ['Latam'],
    fecha: '1543597509',
    duration: {
      minutes: '1',
      seconds: '55',
    },
    type: 'video',
    description: 'Tyson y su equipo reciben un encargo de la compañía International Princess World, un parque temático para niños que será presentado en China.',
    preview_image: {
      image_1_1: 'https://cdn.admin-tudiscovery.com/sites/default/files/styles/slider_mobile/public/2EC4E30229B343DFA43DE87F56F1838D.jpg?itok=NphyXaO9', image_url: 'https://cdn.admin-tudiscovery.com/sites/default/files/styles/destacados/public/2EC4E30229B343DFA43DE87F56F1838D.jpg?itok=WCZhnBNj', image_file: '2EC4E30229B343DFA43DE87F56F1838D.jpg', image_alt: 'Creando un parque temático para niños',
    },
    url: '/discoveryhh/casitas-para-jugar/video/creando-un-parque-tematico-para-ninos',
    categories: [{ name: 'hogar', url: '/temas/hogar' }, { name: 'jardim', url: '/temas/jardin' }],
    channel: {
      name: 'DiscoveryHH',
      logo: 'https://cdn.admin-tudiscovery.com/sites/default/files/2018-12/HH-Logo-white.png',
      url: '/discoveryhh',
      codigos: {
        Latam: 'DHLA-SP', Brasil: 'DHBR-PRT', Mexico: 'DHME-SP', Argentina: 'DHAR-SP', Venezuela: 'DHTV-SP',
      },
      codes: [{ Latam: 'DSLA-SP' }, { Brasil: 'DCBR-PRT' }, { Mexico: 'DCME-SP' }, { Argentina: 'DCAR-SP' }, { Venezuela: 'DCVE-SP' }, { Latam: 'TULA-SP' }, { Brasil: 'THDB-PRT' }, { Latam: 'APLA-SP' }, { Brasil: 'APBR-PRT' }, { Argentina: 'APAR-SP' }, { Latam: 'DHLA-SP' }, { Brasil: 'DHBR-PRT' }, { Mexico: 'DHME-SP' }, { Argentina: 'DHAR-SP' }, { Venezuela: 'DHTV-SP' }],
      logo_svg: 'https://cdn.admin-tudiscovery.com/sites/default/files/logos/hh.svg',
    },
  }, {
    title: 'Comida por machete',
    type: 'image',
    duration: {
      minutes: '1',
      seconds: '55',
    },
    description: 'Dani se siente hambrienta y apartada de su nuevo grupo, así que decide explorar los alrededores, encontrando nuevos amigos con los que podrá negociar comida por el uso de su machete.',
    preview_image: {
      image_1_1: 'https://cdn.admin-tudiscovery.com/sites/default/files/styles/slider_mobile/public/2018-12/Comida%20por%20machete.jpeg?itok=sNzT-afs',
      image_url: 'https://cdn.admin-tudiscovery.com/sites/default/files/styles/destacados/public/2018-12/Comida%20por%20machete.jpeg?itok=CJtDQgD-',
      image_alt: 'Comida por machete',
    },
    url: '/discovery/supervivencia-al-desnudo-edicion-extrema/video/comida-por-machete',
    categories: [{
      name: 'aventura',
      url: '/temas/aventura',
    }, {
      name: 'supervivencia',
      url: '/temas/supervivencia',
    }],
    channel: {
      name: 'Discovery',
      logo: 'https://cdn.admin-tudiscovery.com/sites/default/files/2018-12/Discovery-Logo-white.png',
      url: '/discovery',
      logo_svg: 'https://cdn.admin-tudiscovery.com/sites/default/files/logos/discovery.svg',
    },
  }, {
    title: 'Creando un parque temático para niños',
    region: ['Latam'],
    fecha: '1543597509',
    duration: {
      minutes: '1',
      seconds: '55',
    },
    type: 'video',
    description: 'Tyson y su equipo reciben un encargo de la compañía International Princess World, un parque temático para niños que será presentado en China.',
    preview_image: {
      image_1_1: 'https://cdn.admin-tudiscovery.com/sites/default/files/styles/slider_mobile/public/2EC4E30229B343DFA43DE87F56F1838D.jpg?itok=NphyXaO9', image_url: 'https://cdn.admin-tudiscovery.com/sites/default/files/styles/destacados/public/2EC4E30229B343DFA43DE87F56F1838D.jpg?itok=WCZhnBNj', image_file: '2EC4E30229B343DFA43DE87F56F1838D.jpg', image_alt: 'Creando un parque temático para niños',
    },
    url: '/discoveryhh/casitas-para-jugar/video/creando-un-parque-tematico-para-ninos',
    categories: [{ name: 'hogar', url: '/temas/hogar' }, { name: 'jardim', url: '/temas/jardin' }],
    channel: {
      name: 'DiscoveryHH',
      logo: 'https://cdn.admin-tudiscovery.com/sites/default/files/2018-12/HH-Logo-white.png',
      url: '/discoveryhh',
      codigos: {
        Latam: 'DHLA-SP', Brasil: 'DHBR-PRT', Mexico: 'DHME-SP', Argentina: 'DHAR-SP', Venezuela: 'DHTV-SP',
      },
      codes: [{ Latam: 'DSLA-SP' }, { Brasil: 'DCBR-PRT' }, { Mexico: 'DCME-SP' }, { Argentina: 'DCAR-SP' }, { Venezuela: 'DCVE-SP' }, { Latam: 'TULA-SP' }, { Brasil: 'THDB-PRT' }, { Latam: 'APLA-SP' }, { Brasil: 'APBR-PRT' }, { Argentina: 'APAR-SP' }, { Latam: 'DHLA-SP' }, { Brasil: 'DHBR-PRT' }, { Mexico: 'DHME-SP' }, { Argentina: 'DHAR-SP' }, { Venezuela: 'DHTV-SP' }],
      logo_svg: 'https://cdn.admin-tudiscovery.com/sites/default/files/logos/hh.svg',
    },
  }, {
    title: 'Comida por machete',
    type: 'image',
    duration: {
      minutes: '1',
      seconds: '55',
    },
    description: 'Dani se siente hambrienta y apartada de su nuevo grupo, así que decide explorar los alrededores, encontrando nuevos amigos con los que podrá negociar comida por el uso de su machete.',
    preview_image: {
      image_1_1: 'https://cdn.admin-tudiscovery.com/sites/default/files/styles/slider_mobile/public/2018-12/Comida%20por%20machete.jpeg?itok=sNzT-afs',
      image_url: 'https://cdn.admin-tudiscovery.com/sites/default/files/styles/destacados/public/2018-12/Comida%20por%20machete.jpeg?itok=CJtDQgD-',
      image_alt: 'Comida por machete',
    },
    url: '/discovery/supervivencia-al-desnudo-edicion-extrema/video/comida-por-machete',
    categories: [{
      name: 'aventura',
      url: '/temas/aventura',
    }, {
      name: 'supervivencia',
      url: '/temas/supervivencia',
    }],
    channel: {
      name: 'Discovery',
      logo: 'https://cdn.admin-tudiscovery.com/sites/default/files/2018-12/Discovery-Logo-white.png',
      url: '/discovery',
      logo_svg: 'https://cdn.admin-tudiscovery.com/sites/default/files/logos/discovery.svg',
    },
  }, {
    title: 'Creando un parque temático para niños',
    region: ['Latam'],
    fecha: '1543597509',
    duration: {
      minutes: '1',
      seconds: '55',
    },
    type: 'video',
    description: 'Tyson y su equipo reciben un encargo de la compañía International Princess World, un parque temático para niños que será presentado en China.',
    preview_image: {
      image_1_1: 'https://cdn.admin-tudiscovery.com/sites/default/files/styles/slider_mobile/public/2EC4E30229B343DFA43DE87F56F1838D.jpg?itok=NphyXaO9', image_url: 'https://cdn.admin-tudiscovery.com/sites/default/files/styles/destacados/public/2EC4E30229B343DFA43DE87F56F1838D.jpg?itok=WCZhnBNj', image_file: '2EC4E30229B343DFA43DE87F56F1838D.jpg', image_alt: 'Creando un parque temático para niños',
    },
    url: '/discoveryhh/casitas-para-jugar/video/creando-un-parque-tematico-para-ninos',
    categories: [{ name: 'hogar', url: '/temas/hogar' }, { name: 'jardim', url: '/temas/jardin' }],
    channel: {
      name: 'DiscoveryHH',
      logo: 'https://cdn.admin-tudiscovery.com/sites/default/files/2018-12/HH-Logo-white.png',
      url: '/discoveryhh',
      codigos: {
        Latam: 'DHLA-SP', Brasil: 'DHBR-PRT', Mexico: 'DHME-SP', Argentina: 'DHAR-SP', Venezuela: 'DHTV-SP',
      },
      codes: [{ Latam: 'DSLA-SP' }, { Brasil: 'DCBR-PRT' }, { Mexico: 'DCME-SP' }, { Argentina: 'DCAR-SP' }, { Venezuela: 'DCVE-SP' }, { Latam: 'TULA-SP' }, { Brasil: 'THDB-PRT' }, { Latam: 'APLA-SP' }, { Brasil: 'APBR-PRT' }, { Argentina: 'APAR-SP' }, { Latam: 'DHLA-SP' }, { Brasil: 'DHBR-PRT' }, { Mexico: 'DHME-SP' }, { Argentina: 'DHAR-SP' }, { Venezuela: 'DHTV-SP' }],
      logo_svg: 'https://cdn.admin-tudiscovery.com/sites/default/files/logos/hh.svg',
    },
  }, {
    title: 'Comida por machete',
    type: 'image',
    duration: {
      minutes: '1',
      seconds: '55',
    },
    description: 'Dani se siente hambrienta y apartada de su nuevo grupo, así que decide explorar los alrededores, encontrando nuevos amigos con los que podrá negociar comida por el uso de su machete.',
    preview_image: {
      image_1_1: 'https://cdn.admin-tudiscovery.com/sites/default/files/styles/slider_mobile/public/2018-12/Comida%20por%20machete.jpeg?itok=sNzT-afs',
      image_url: 'https://cdn.admin-tudiscovery.com/sites/default/files/styles/destacados/public/2018-12/Comida%20por%20machete.jpeg?itok=CJtDQgD-',
      image_alt: 'Comida por machete',
    },
    url: '/discovery/supervivencia-al-desnudo-edicion-extrema/video/comida-por-machete',
    categories: [{
      name: 'aventura',
      url: '/temas/aventura',
    }, {
      name: 'supervivencia',
      url: '/temas/supervivencia',
    }],
    channel: {
      name: 'Discovery',
      logo: 'https://cdn.admin-tudiscovery.com/sites/default/files/2018-12/Discovery-Logo-white.png',
      url: '/discovery',
      logo_svg: 'https://cdn.admin-tudiscovery.com/sites/default/files/logos/discovery.svg',
    },
  }, {
    title: 'Creando un parque temático para niños',
    region: ['Latam'],
    fecha: '1543597509',
    duration: {
      minutes: '1',
      seconds: '55',
    },
    type: 'video',
    description: 'Tyson y su equipo reciben un encargo de la compañía International Princess World, un parque temático para niños que será presentado en China.',
    preview_image: {
      image_1_1: 'https://cdn.admin-tudiscovery.com/sites/default/files/styles/slider_mobile/public/2EC4E30229B343DFA43DE87F56F1838D.jpg?itok=NphyXaO9', image_url: 'https://cdn.admin-tudiscovery.com/sites/default/files/styles/destacados/public/2EC4E30229B343DFA43DE87F56F1838D.jpg?itok=WCZhnBNj', image_file: '2EC4E30229B343DFA43DE87F56F1838D.jpg', image_alt: 'Creando un parque temático para niños',
    },
    url: '/discoveryhh/casitas-para-jugar/video/creando-un-parque-tematico-para-ninos',
    categories: [{ name: 'hogar', url: '/temas/hogar' }, { name: 'jardim', url: '/temas/jardin' }],
    channel: {
      name: 'DiscoveryHH',
      logo: 'https://cdn.admin-tudiscovery.com/sites/default/files/2018-12/HH-Logo-white.png',
      url: '/discoveryhh',
      codigos: {
        Latam: 'DHLA-SP', Brasil: 'DHBR-PRT', Mexico: 'DHME-SP', Argentina: 'DHAR-SP', Venezuela: 'DHTV-SP',
      },
      codes: [{ Latam: 'DSLA-SP' }, { Brasil: 'DCBR-PRT' }, { Mexico: 'DCME-SP' }, { Argentina: 'DCAR-SP' }, { Venezuela: 'DCVE-SP' }, { Latam: 'TULA-SP' }, { Brasil: 'THDB-PRT' }, { Latam: 'APLA-SP' }, { Brasil: 'APBR-PRT' }, { Argentina: 'APAR-SP' }, { Latam: 'DHLA-SP' }, { Brasil: 'DHBR-PRT' }, { Mexico: 'DHME-SP' }, { Argentina: 'DHAR-SP' }, { Venezuela: 'DHTV-SP' }],
      logo_svg: 'https://cdn.admin-tudiscovery.com/sites/default/files/logos/hh.svg',
    },
  }];

const fourItems = [
  {
    title: 'Comida por machete',
    type: 'image',
    duration: {
      minutes: '1',
      seconds: '55',
    },
    description: 'Dani se siente hambrienta y apartada de su nuevo grupo, así que decide explorar los alrededores, encontrando nuevos amigos con los que podrá negociar comida por el uso de su machete.',
    preview_image: {
      image_1_1: 'https://cdn.admin-tudiscovery.com/sites/default/files/styles/slider_mobile/public/2018-12/Comida%20por%20machete.jpeg?itok=sNzT-afs',
      image_url: 'https://cdn.admin-tudiscovery.com/sites/default/files/styles/destacados/public/2018-12/Comida%20por%20machete.jpeg?itok=CJtDQgD-',
      image_alt: 'Comida por machete',
    },
    url: '/discovery/supervivencia-al-desnudo-edicion-extrema/video/comida-por-machete',
    categories: [{
      name: 'aventura',
      url: '/temas/aventura',
    }, {
      name: 'supervivencia',
      url: '/temas/supervivencia',
    }],
    channel: {
      name: 'Discovery',
      logo: 'https://cdn.admin-tudiscovery.com/sites/default/files/2018-12/Discovery-Logo-white.png',
      url: '/discovery',
      logo_svg: 'https://cdn.admin-tudiscovery.com/sites/default/files/logos/discovery.svg',
    },
  }, {
    title: 'Creando un parque temático para niños',
    region: ['Latam'],
    fecha: '1543597509',
    duration: {
      minutes: '1',
      seconds: '55',
    },
    type: 'video',
    description: 'Tyson y su equipo reciben un encargo de la compañía International Princess World, un parque temático para niños que será presentado en China.',
    preview_image: {
      image_1_1: 'https://cdn.admin-tudiscovery.com/sites/default/files/styles/slider_mobile/public/2EC4E30229B343DFA43DE87F56F1838D.jpg?itok=NphyXaO9', image_url: 'https://cdn.admin-tudiscovery.com/sites/default/files/styles/destacados/public/2EC4E30229B343DFA43DE87F56F1838D.jpg?itok=WCZhnBNj', image_file: '2EC4E30229B343DFA43DE87F56F1838D.jpg', image_alt: 'Creando un parque temático para niños',
    },
    url: '/discoveryhh/casitas-para-jugar/video/creando-un-parque-tematico-para-ninos',
    categories: [{ name: 'hogar', url: '/temas/hogar' }, { name: 'jardim', url: '/temas/jardin' }],
    channel: {
      name: 'DiscoveryHH',
      logo: 'https://cdn.admin-tudiscovery.com/sites/default/files/2018-12/HH-Logo-white.png',
      url: '/discoveryhh',
      codigos: {
        Latam: 'DHLA-SP', Brasil: 'DHBR-PRT', Mexico: 'DHME-SP', Argentina: 'DHAR-SP', Venezuela: 'DHTV-SP',
      },
      codes: [{ Latam: 'DSLA-SP' }, { Brasil: 'DCBR-PRT' }, { Mexico: 'DCME-SP' }, { Argentina: 'DCAR-SP' }, { Venezuela: 'DCVE-SP' }, { Latam: 'TULA-SP' }, { Brasil: 'THDB-PRT' }, { Latam: 'APLA-SP' }, { Brasil: 'APBR-PRT' }, { Argentina: 'APAR-SP' }, { Latam: 'DHLA-SP' }, { Brasil: 'DHBR-PRT' }, { Mexico: 'DHME-SP' }, { Argentina: 'DHAR-SP' }, { Venezuela: 'DHTV-SP' }],
      logo_svg: 'https://cdn.admin-tudiscovery.com/sites/default/files/logos/hh.svg',
    },
  }, {
    title: 'Comida por machete',
    type: 'image',
    duration: {
      minutes: '1',
      seconds: '55',
    },
    description: 'Dani se siente hambrienta y apartada de su nuevo grupo, así que decide explorar los alrededores, encontrando nuevos amigos con los que podrá negociar comida por el uso de su machete.',
    preview_image: {
      image_1_1: 'https://cdn.admin-tudiscovery.com/sites/default/files/styles/slider_mobile/public/2018-12/Comida%20por%20machete.jpeg?itok=sNzT-afs',
      image_url: 'https://cdn.admin-tudiscovery.com/sites/default/files/styles/destacados/public/2018-12/Comida%20por%20machete.jpeg?itok=CJtDQgD-',
      image_alt: 'Comida por machete',
    },
    url: '/discovery/supervivencia-al-desnudo-edicion-extrema/video/comida-por-machete',
    categories: [{
      name: 'aventura',
      url: '/temas/aventura',
    }, {
      name: 'supervivencia',
      url: '/temas/supervivencia',
    }],
    channel: {
      name: 'Discovery',
      logo: 'https://cdn.admin-tudiscovery.com/sites/default/files/2018-12/Discovery-Logo-white.png',
      url: '/discovery',
      logo_svg: 'https://cdn.admin-tudiscovery.com/sites/default/files/logos/discovery.svg',
    },
  }, {
    title: 'Creando un parque temático para niños',
    region: ['Latam'],
    fecha: '1543597509',
    duration: {
      minutes: '1',
      seconds: '55',
    },
    type: 'video',
    description: 'Tyson y su equipo reciben un encargo de la compañía International Princess World, un parque temático para niños que será presentado en China.',
    preview_image: {
      image_1_1: 'https://cdn.admin-tudiscovery.com/sites/default/files/styles/slider_mobile/public/2EC4E30229B343DFA43DE87F56F1838D.jpg?itok=NphyXaO9', image_url: 'https://cdn.admin-tudiscovery.com/sites/default/files/styles/destacados/public/2EC4E30229B343DFA43DE87F56F1838D.jpg?itok=WCZhnBNj', image_file: '2EC4E30229B343DFA43DE87F56F1838D.jpg', image_alt: 'Creando un parque temático para niños',
    },
    url: '/discoveryhh/casitas-para-jugar/video/creando-un-parque-tematico-para-ninos',
    categories: [{ name: 'hogar', url: '/temas/hogar' }, { name: 'jardim', url: '/temas/jardin' }],
    channel: {
      name: 'DiscoveryHH',
      logo: 'https://cdn.admin-tudiscovery.com/sites/default/files/2018-12/HH-Logo-white.png',
      url: '/discoveryhh',
      codigos: {
        Latam: 'DHLA-SP', Brasil: 'DHBR-PRT', Mexico: 'DHME-SP', Argentina: 'DHAR-SP', Venezuela: 'DHTV-SP',
      },
      codes: [{ Latam: 'DSLA-SP' }, { Brasil: 'DCBR-PRT' }, { Mexico: 'DCME-SP' }, { Argentina: 'DCAR-SP' }, { Venezuela: 'DCVE-SP' }, { Latam: 'TULA-SP' }, { Brasil: 'THDB-PRT' }, { Latam: 'APLA-SP' }, { Brasil: 'APBR-PRT' }, { Argentina: 'APAR-SP' }, { Latam: 'DHLA-SP' }, { Brasil: 'DHBR-PRT' }, { Mexico: 'DHME-SP' }, { Argentina: 'DHAR-SP' }, { Venezuela: 'DHTV-SP' }],
      logo_svg: 'https://cdn.admin-tudiscovery.com/sites/default/files/logos/hh.svg',
    },
  },
];

const threeItems = [
  {
    title: 'Comida por machete',
    type: 'image',
    duration: {
      minutes: '1',
      seconds: '55',
    },
    description: 'Dani se siente hambrienta y apartada de su nuevo grupo, así que decide explorar los alrededores, encontrando nuevos amigos con los que podrá negociar comida por el uso de su machete.',
    preview_image: {
      image_1_1: 'https://cdn.admin-tudiscovery.com/sites/default/files/styles/slider_mobile/public/2018-12/Comida%20por%20machete.jpeg?itok=sNzT-afs',
      image_url: 'https://cdn.admin-tudiscovery.com/sites/default/files/styles/destacados/public/2018-12/Comida%20por%20machete.jpeg?itok=CJtDQgD-',
      image_alt: 'Comida por machete',
    },
    url: '/discovery/supervivencia-al-desnudo-edicion-extrema/video/comida-por-machete',
    categories: [{
      name: 'aventura',
      url: '/temas/aventura',
    }, {
      name: 'supervivencia',
      url: '/temas/supervivencia',
    }],
    channel: {
      name: 'Discovery',
      logo: 'https://cdn.admin-tudiscovery.com/sites/default/files/2018-12/Discovery-Logo-white.png',
      url: '/discovery',
      logo_svg: 'https://cdn.admin-tudiscovery.com/sites/default/files/logos/discovery.svg',
    },
  }, {
    title: 'Creando un parque temático para niños',
    region: ['Latam'],
    fecha: '1543597509',
    duration: {
      minutes: '1',
      seconds: '55',
    },
    type: 'video',
    description: 'Tyson y su equipo reciben un encargo de la compañía International Princess World, un parque temático para niños que será presentado en China.',
    preview_image: {
      image_1_1: 'https://cdn.admin-tudiscovery.com/sites/default/files/styles/slider_mobile/public/2EC4E30229B343DFA43DE87F56F1838D.jpg?itok=NphyXaO9', image_url: 'https://cdn.admin-tudiscovery.com/sites/default/files/styles/destacados/public/2EC4E30229B343DFA43DE87F56F1838D.jpg?itok=WCZhnBNj', image_file: '2EC4E30229B343DFA43DE87F56F1838D.jpg', image_alt: 'Creando un parque temático para niños',
    },
    url: '/discoveryhh/casitas-para-jugar/video/creando-un-parque-tematico-para-ninos',
    categories: [{ name: 'hogar', url: '/temas/hogar' }, { name: 'jardim', url: '/temas/jardin' }],
    channel: {
      name: 'DiscoveryHH',
      logo: 'https://cdn.admin-tudiscovery.com/sites/default/files/2018-12/HH-Logo-white.png',
      url: '/discoveryhh',
      codigos: {
        Latam: 'DHLA-SP', Brasil: 'DHBR-PRT', Mexico: 'DHME-SP', Argentina: 'DHAR-SP', Venezuela: 'DHTV-SP',
      },
      codes: [{ Latam: 'DSLA-SP' }, { Brasil: 'DCBR-PRT' }, { Mexico: 'DCME-SP' }, { Argentina: 'DCAR-SP' }, { Venezuela: 'DCVE-SP' }, { Latam: 'TULA-SP' }, { Brasil: 'THDB-PRT' }, { Latam: 'APLA-SP' }, { Brasil: 'APBR-PRT' }, { Argentina: 'APAR-SP' }, { Latam: 'DHLA-SP' }, { Brasil: 'DHBR-PRT' }, { Mexico: 'DHME-SP' }, { Argentina: 'DHAR-SP' }, { Venezuela: 'DHTV-SP' }],
      logo_svg: 'https://cdn.admin-tudiscovery.com/sites/default/files/logos/hh.svg',
    },
  }, {
    title: 'Creando un parque temático para niños',
    region: ['Latam'],
    fecha: '1543597509',
    duration: {
      minutes: '1',
      seconds: '55',
    },
    type: 'video',
    description: 'Tyson y su equipo reciben un encargo de la compañía International Princess World, un parque temático para niños que será presentado en China.',
    preview_image: {
      image_1_1: 'https://cdn.admin-tudiscovery.com/sites/default/files/styles/slider_mobile/public/2EC4E30229B343DFA43DE87F56F1838D.jpg?itok=NphyXaO9', image_url: 'https://cdn.admin-tudiscovery.com/sites/default/files/styles/destacados/public/2EC4E30229B343DFA43DE87F56F1838D.jpg?itok=WCZhnBNj', image_file: '2EC4E30229B343DFA43DE87F56F1838D.jpg', image_alt: 'Creando un parque temático para niños',
    },
    url: '/discoveryhh/casitas-para-jugar/video/creando-un-parque-tematico-para-ninos',
    categories: [{ name: 'hogar', url: '/temas/hogar' }, { name: 'jardim', url: '/temas/jardin' }],
    channel: {
      name: 'DiscoveryHH',
      logo: 'https://cdn.admin-tudiscovery.com/sites/default/files/2018-12/HH-Logo-white.png',
      url: '/discoveryhh',
      codigos: {
        Latam: 'DHLA-SP', Brasil: 'DHBR-PRT', Mexico: 'DHME-SP', Argentina: 'DHAR-SP', Venezuela: 'DHTV-SP',
      },
      codes: [{ Latam: 'DSLA-SP' }, { Brasil: 'DCBR-PRT' }, { Mexico: 'DCME-SP' }, { Argentina: 'DCAR-SP' }, { Venezuela: 'DCVE-SP' }, { Latam: 'TULA-SP' }, { Brasil: 'THDB-PRT' }, { Latam: 'APLA-SP' }, { Brasil: 'APBR-PRT' }, { Argentina: 'APAR-SP' }, { Latam: 'DHLA-SP' }, { Brasil: 'DHBR-PRT' }, { Mexico: 'DHME-SP' }, { Argentina: 'DHAR-SP' }, { Venezuela: 'DHTV-SP' }],
      logo_svg: 'https://cdn.admin-tudiscovery.com/sites/default/files/logos/hh.svg',
    },
  },
];

storiesOf('Carousel', module)
  .add('Carousel 8 Items', () => <FourItemCarousel sliderContent={items} />, {
    backgrounds: [{
      name: 'Dark', value: 'rgba(0,14,38)', default: true,
    }],
  })
  .add('Carousel 4 items', () => <FourItemCarousel sliderContent={fourItems} />, {
    backgrounds: [{
      name: 'Dark', value: 'rgba(0,14,38)', default: true,
    }],
  })
  .add('Carousel 3 items', () => <FourItemCarousel sliderContent={threeItems} />, {
    backgrounds: [{
      name: 'Dark', value: 'rgba(0,14,38)', default: true,
    }],
  });
