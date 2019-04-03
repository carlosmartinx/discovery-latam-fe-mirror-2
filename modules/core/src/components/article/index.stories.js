import React from 'react';
import { storiesOf } from '@storybook/react';
import get from 'lodash/get';
import Facebook from '@discovery-web-app/shared-components/icons/facebook.svg';
import Twitter from '@discovery-web-app/shared-components/icons/twitter.svg';
import Email from '@discovery-web-app/shared-components/icons/email.svg';
import Whatsapp from '@discovery-web-app/shared-components/icons/whatsapp.svg';

import Article from '.';

const ArticleData = {
  article: {
    title: '¿Son adictivos los tatuajes?',
    short_description: 'Si hablas con alguien que se hizo un tatuaje, te confirmará la teoría. Es que quien se hace uno, se hace dos...pero no hay dos sin tres. La adicción a los tatuajes: ¿mito o realidad?',
    region: 'All',
    long_description: '<p><span><span><span><span><span><span><span><span><span><span><span><span><span><span><span><span>Si hablas con alguien que se hizo un tatuaje, te confirmará la teoría. Es que quien se hace uno, se hace dos...pero no hay dos sin tres. La adicción a los tatuajes: ¿mito o realidad?</span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span><br />\r\n<br />\r\n<span><span><span><span><span><span><span><span><span><span><span><span><span><span><span><span><img width="100%" alt="tatu" data-align="left" data-entity-type="file" data-entity-uuid="b3343fea-d1f8-40da-8d04-b6b5fd42e107" src="http://cdn.admin-tudiscovery.com/sites/default/files/inline-images/tatuaje.jpg" />Hacerse un tatuaje es todo un evento. Hubo un tiempo donde uno era suficiente. Pero son cada vez más los aficionados por la tinta que vuelven a ella en retiradas oportunidades.</span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span><br />\r\n<br />\r\n<span><span><span><span><span><span><span><span><span><span><span><span><span><span><span><span>Los tatuajes han sido objeto de estudio para varias disciplinas académicas. Pero, ¿a qué se debe este impulso incontrolable? Tiene que ver con la liberación de endorfinas como respuesta natural a que tu piel esté siendo perforada por una aguja. Los tatuajes también actúan sobre los sistemas de recompensa del cerebro y aumentan nuestra autoestima dando lugar a una adicción similar a la de otros compuestos, como la morfina.</span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span><br />\r\n<br />\r\n<u><span><span><span><span><span><span><span><span><span><span><span><span><span><span><span><span>¿Por qué nos tatuamos?</span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></u></p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p><span><span><span><span><span><span><span><span><span><span><span><span><span><span><span><span><strong>Singularidad</strong></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span><br />\r\n<br />\r\n<span><span><span><span><span><span><span><span><span><span><span><span><span><span><span><span>Los tatuajes nos hacen sentir únicos. Un estudio en 2012 halló que las diferencias entre individuos tatuados y no tatuados son reducidas, aunque las personas tatuadas tienden a ser más extrovertidas y muestran una mayor necesidad de “singularidad”.</span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span><span><span><span><span><span><span><span><span><span><span><span><span><span><span><span><span>&nbsp;</span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></p>\r\n\r\n<p><span><span><span><span><span><span><span><span><span><span><span><span><span><span><span><span><strong>Cuestión cultural</strong></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span><br />\r\n<br />\r\n<span><span><span><span><span><span><span><span><span><span><span><span><span><span><span><span>La cultura principal se ha apropiado del tatuaje. Muchos son los famosos aficionados a tatuarse que han influido en la decisión de sus seguidores. Algo que antes se consideraba antiestético o extravagante, hoy se considera “cool” o a la moda.</span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></p>\r\n\r\n<blockquote>\r\n<p><em><span><span><span><span><span><span><span><span><span><span><span><span><span><span><span><span>Fuente: </span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span><br />\r\n<span><span><span><span><span><span><span><span><span><span><span><span><span><span><span><span>https://www.bbc.com/mundo/noticias/2013/10/131006_tatuajes_repeticion_finde_jgc</span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></em></p>\r\n</blockquote>\r\n',
    preview_image: {
      image_file: 'https://cdn.admin-tudiscovery.com/sites/default/files/2018-11/son_adictivos_los_tatuajes_imagen_1.jpg',
      image_url: 'https://cdn.admin-tudiscovery.com/sites/default/files/styles/destacado_articulo/public/2018-11/son_adictivos_los_tatuajes_imagen_1.jpg?itok=HHNA3Oyc',
      image_1_1: 'https://cdn.admin-tudiscovery.com/sites/default/files/styles/destacado_articulo_mobile/public/2018-11/son_adictivos_los_tatuajes_imagen_1.jpg?itok=aBKuAD8J',
      image_alt: '¿Son adictivos los tatuajes?',
      image_title: 'Para algunos, hacerse un tatuaje es todo un evento.',
    },
    show: null,
    show_url: '',
    channel: {
      name: 'TLC',
      logo: 'https://cdn.admin-tudiscovery.com/sites/default/files/2018-12/TLC-Logo-white_0.png',
      url: '/tlc',
      logo_svg: 'https://cdn.admin-tudiscovery.com/sites/default/files/logos/tlc.svg',
      codigos: {
        Argentina: 'TLCA-SP',
        Colombia: 'TLCL-SP',
        Mexico: 'TLME-SP',
        Brasil: 'TLCB-PRT',
      },
      codes: [
        {
          Argentina: 'TLCA-SP',
        },
        {
          Colombia: 'TLCL-SP',
        },
        {
          Mexico: 'TLME-SP',
        },
        {
          Brasil: 'TLCB-PRT',
        },
      ],
    },
    categories: [
      {
        name: 'tatuajes',
        url: '/temas/tatuajes',
      },
      {
        name: 'adicciones',
        url: '/temas/adicciones',
      },
    ],
  },
  related_content: [
    {
      title: '¿Son adictivos los tatuajes?',
      description: 'Si hablas con alguien que se hizo un tatuaje, te confirmará la teoría. Es que quien se hace uno, se hace dos...pero no hay dos sin tres. La adicción a los tatuajes: ¿mito o realidad?',
      preview_image: {
        image_file: 'https://cdn.admin-tudiscovery.com/sites/default/files/2018-11/son_adictivos_los_tatuajes_imagen_1.jpg',
        image_url: 'https://cdn.admin-tudiscovery.com/sites/default/files/styles/destacados/public/2018-11/son_adictivos_los_tatuajes_imagen_1.jpg?itok=8-f51kHU',
        image_1_1: 'https://cdn.admin-tudiscovery.com/sites/default/files/styles/destacados_mobile/public/2018-11/son_adictivos_los_tatuajes_imagen_1.jpg?itok=m80BMPM5',
        image_alt: '¿Son adictivos los tatuajes?',
        image_title: 'Para algunos, hacerse un tatuaje es todo un evento.',
      },
      type: 'article',
      url: '/tlc/articulo/son-adictivos-los-tatuajes',
      channel: {
        name: 'TLC',
        logo: 'https://cdn.admin-tudiscovery.com/sites/default/files/2018-12/TLC-Logo-white_0.png',
        url: '/tlc',
        codigos: {
          Argentina: 'TLCA-SP',
          Colombia: 'TLCL-SP',
          Mexico: 'TLME-SP',
          Brasil: 'TLCB-PRT',
        },
        logo_svg: 'https://cdn.admin-tudiscovery.com/sites/default/files/logos/tlc.svg',
      },
    },
    {
      title: 'Stacey se arrepiente de tatuar el nombre de su novio en el tobillo',
      description: 'Stacey tatuó el nombre de su entonces novio hace 8 años, pero se arrepintió y quiere esconderlo para hacer las paces con su padre.',
      preview_image: {
        image_1_1: 'https://cdn.admin-tudiscovery.com/sites/default/files/styles/slider_mobile/public/321F92A985114909A6782F37FDA5EB1E.jpg?itok=9vJm7Gkf',
        image_url: 'https://cdn.admin-tudiscovery.com/sites/default/files/styles/destacados/public/321F92A985114909A6782F37FDA5EB1E.jpg?itok=A6Oa3ezJ',
        image_file: '321F92A985114909A6782F37FDA5EB1E.jpg',
        image_alt: 'Stacey se arrepiente de tatuar el nombre de su novio en el tobillo',
      },
      type: 'video',
      url: '/tlc/retatuadores/video/stacey-se-arrepiente-de-tatuar-el-nombre-de-su-novio-en-el-tobillo',
      channel: {
        name: 'TLC',
        logo: 'https://cdn.admin-tudiscovery.com/sites/default/files/2018-12/TLC-Logo-white_0.png',
        url: '/tlc',
        codigos: {
          Argentina: 'TLCA-SP',
          Colombia: 'TLCL-SP',
          Mexico: 'TLME-SP',
          Brasil: 'TLCB-PRT',
        },
        logo_svg: 'https://cdn.admin-tudiscovery.com/sites/default/files/logos/tlc.svg',
      },
    },
    {
      title: 'El tatuaje de la última noche en Portugal',
      description: 'En su última noche de estadía en Portugal, Ania celebró alocadamente, al punto de no recordar que se hizo un tatuaje con un completo desconocido.',
      preview_image: {
        image_1_1: 'https://cdn.admin-tudiscovery.com/sites/default/files/styles/slider_mobile/public/822887DB7A604F9BA57775232BD50E7A.jpg?itok=KR0BQ49v',
        image_url: 'https://cdn.admin-tudiscovery.com/sites/default/files/styles/destacados/public/822887DB7A604F9BA57775232BD50E7A.jpg?itok=59t_YvQn',
        image_file: '822887DB7A604F9BA57775232BD50E7A.jpg',
        image_alt: 'El tatuaje de la última noche en Portugal',
      },
      type: 'video',
      url: '/tlc/retatuadores/video/el-tatuaje-de-la-ultima-noche-en-portugal',
      channel: {
        name: 'TLC',
        logo: 'https://cdn.admin-tudiscovery.com/sites/default/files/2018-12/TLC-Logo-white_0.png',
        url: '/tlc',
        codigos: {
          Argentina: 'TLCA-SP',
          Colombia: 'TLCL-SP',
          Mexico: 'TLME-SP',
          Brasil: 'TLCB-PRT',
        },
        logo_svg: 'https://cdn.admin-tudiscovery.com/sites/default/files/logos/tlc.svg',
      },
    },
    {
      title: 'El tatuaje de la profesora',
      description: 'Victoria teme que su tatuaje afecte su carrera y le pide a Jay que la ayude. ',
      preview_image: {
        image_1_1: 'https://cdn.admin-tudiscovery.com/sites/default/files/styles/slider_mobile/public/550487B165344723849081B2BEAA633F.jpg?itok=xQ-IJCX8',
        image_url: 'https://cdn.admin-tudiscovery.com/sites/default/files/styles/destacados/public/550487B165344723849081B2BEAA633F.jpg?itok=xj4WtPSp',
        image_file: '550487B165344723849081B2BEAA633F.jpg',
        image_alt: 'El tatuaje de la profesora',
      },
      type: 'video',
      url: '/tlc/retatuadores/video/el-tatuaje-de-la-profesora',
      channel: {
        name: 'TLC',
        logo: 'https://cdn.admin-tudiscovery.com/sites/default/files/2018-12/TLC-Logo-white_0.png',
        url: '/tlc',
        codigos: {
          Argentina: 'TLCA-SP',
          Colombia: 'TLCL-SP',
          Mexico: 'TLME-SP',
          Brasil: 'TLCB-PRT',
        },
        logo_svg: 'https://cdn.admin-tudiscovery.com/sites/default/files/logos/tlc.svg',
      },
    },
    {
      title: 'Cómo cubrir un tatuaje con "solo un pinchazo"',
      description: 'Amina quiere cubrir el tatuaje que tiene con el nombre de su ex, y que nunca quiso terminar, porque no soporta muy bien el dolor.',
      preview_image: {
        image_1_1: 'https://cdn.admin-tudiscovery.com/sites/default/files/styles/slider_mobile/public/45E8C39D35044EB7B257DBF35EE9A9EC.jpg?itok=aJTIUjKs',
        image_url: 'https://cdn.admin-tudiscovery.com/sites/default/files/styles/destacados/public/45E8C39D35044EB7B257DBF35EE9A9EC.jpg?itok=JJiwT4oY',
        image_file: '45E8C39D35044EB7B257DBF35EE9A9EC.jpg',
        image_alt: "Cómo cubrir un tatuaje con 'solo un pinchazo'",
      },
      type: 'video',
      url: '/tlc/retatuadores/video/como-cubrir-un-tatuaje-con-solo-un-pinchazo',
      channel: {
        name: 'TLC',
        logo: 'https://cdn.admin-tudiscovery.com/sites/default/files/2018-12/TLC-Logo-white_0.png',
        url: '/tlc',
        codigos: {
          Argentina: 'TLCA-SP',
          Colombia: 'TLCL-SP',
          Mexico: 'TLME-SP',
          Brasil: 'TLCB-PRT',
        },
        logo_svg: 'https://cdn.admin-tudiscovery.com/sites/default/files/logos/tlc.svg',
      },
    },
    {
      title: 'Hombre transgénero cambia tatuaje que se hizo cuando era mujer',
      description: 'Brix quiere cambiar un tatuaje que se hizo cuando era mujer, por algo que demuestre su cambio de vida y que no sea tan femenino.',
      preview_image: {
        image_1_1: 'https://cdn.admin-tudiscovery.com/sites/default/files/styles/slider_mobile/public/7C99186A84924B7BBDC480EA995C874E.jpg?itok=NL5-TZ0L',
        image_url: 'https://cdn.admin-tudiscovery.com/sites/default/files/styles/destacados/public/7C99186A84924B7BBDC480EA995C874E.jpg?itok=Bdl5OiQr',
        image_file: '7C99186A84924B7BBDC480EA995C874E.jpg',
        image_alt: 'Hombre transgénero cambia tatuaje que se hizo cuando era mujer',
      },
      type: 'video',
      url: '/tlc/retatuadores/video/hombre-transgenero-cambia-tatuaje-que-se-hizo-cuando-era-mujer',
      channel: {
        name: 'TLC',
        logo: 'https://cdn.admin-tudiscovery.com/sites/default/files/2018-12/TLC-Logo-white_0.png',
        url: '/tlc',
        codigos: {
          Argentina: 'TLCA-SP',
          Colombia: 'TLCL-SP',
          Mexico: 'TLME-SP',
          Brasil: 'TLCB-PRT',
        },
        logo_svg: 'https://cdn.admin-tudiscovery.com/sites/default/files/logos/tlc.svg',
      },
    },
    {
      title: 'Mejores amigos comparten tatuajes en el trasero',
      description: 'Unos mejores amigos se hicieron tatuajes iguales en sus traseros pero quieren cambiarlos por algo más cool y diferente. ¡Mira lo que Sketch diseñó para ellos!',
      preview_image: {
        image_1_1: 'https://cdn.admin-tudiscovery.com/sites/default/files/styles/slider_mobile/public/5CE02550F93B452AB0C2336D3D8E0FD9.jpg?itok=P3QMYb-M',
        image_url: 'https://cdn.admin-tudiscovery.com/sites/default/files/styles/destacados/public/5CE02550F93B452AB0C2336D3D8E0FD9.jpg?itok=voxg5e5y',
        image_file: '5CE02550F93B452AB0C2336D3D8E0FD9.jpg',
        image_alt: 'Mejores amigos comparten tatuajes en el trasero',
      },
      type: 'video',
      url: '/tlc/retatuadores/video/mejores-amigos-comparten-tatuajes-en-el-trasero',
      channel: {
        name: 'TLC',
        logo: 'https://cdn.admin-tudiscovery.com/sites/default/files/2018-12/TLC-Logo-white_0.png',
        url: '/tlc',
        codigos: {
          Argentina: 'TLCA-SP',
          Colombia: 'TLCL-SP',
          Mexico: 'TLME-SP',
          Brasil: 'TLCB-PRT',
        },
        logo_svg: 'https://cdn.admin-tudiscovery.com/sites/default/files/logos/tlc.svg',
      },
    },
    {
      title: 'Flores y mariposas para cubrir un doble mentón',
      description: 'Lou usará su talento para eliminar un horrible tatuaje de una mujer que parece tener doble mentón y algo más personal sobre su cara.',
      preview_image: {
        image_1_1: 'https://cdn.admin-tudiscovery.com/sites/default/files/styles/slider_mobile/public/D0BB4E71201B468E9543912B49103EC3.jpg?itok=Mo8OCj9I',
        image_url: 'https://cdn.admin-tudiscovery.com/sites/default/files/styles/destacados/public/D0BB4E71201B468E9543912B49103EC3.jpg?itok=VI-x2Cu-',
        image_file: 'D0BB4E71201B468E9543912B49103EC3.jpg',
        image_alt: 'Flores y mariposas para cubrir un doble mentón',
      },
      type: 'video',
      url: '/tlc/retatuadores/video/flores-y-mariposas-para-cubrir-un-doble-menton',
      channel: {
        name: 'TLC',
        logo: 'https://cdn.admin-tudiscovery.com/sites/default/files/2018-12/TLC-Logo-white_0.png',
        url: '/tlc',
        codigos: {
          Argentina: 'TLCA-SP',
          Colombia: 'TLCL-SP',
          Mexico: 'TLME-SP',
          Brasil: 'TLCB-PRT',
        },
        logo_svg: 'https://cdn.admin-tudiscovery.com/sites/default/files/logos/tlc.svg',
      },
    },
    {
      title: 'Cómo deshacerse de un horrible retrato en la pierna',
      description: 'Jay tiene un gran reto por delante, al tener que encontrar la forma de cubrir un retrato que a parte de ser horrible, ¡parece otra cosa cuando su dueño viste bermudas!',
      preview_image: {
        image_1_1: 'https://cdn.admin-tudiscovery.com/sites/default/files/styles/slider_mobile/public/E0C8F370957C485C8E7492711C5448A8.jpg?itok=f5hotQVQ',
        image_url: 'https://cdn.admin-tudiscovery.com/sites/default/files/styles/destacados/public/E0C8F370957C485C8E7492711C5448A8.jpg?itok=qBqSRSMz',
        image_file: 'E0C8F370957C485C8E7492711C5448A8.jpg',
        image_alt: 'Cómo deshacerse de un horrible retrato en la pierna',
      },
      type: 'video',
      url: '/tlc/retatuadores/video/como-deshacerse-de-un-horrible-retrato-en-la-pierna',
      channel: {
        name: 'TLC',
        logo: 'https://cdn.admin-tudiscovery.com/sites/default/files/2018-12/TLC-Logo-white_0.png',
        url: '/tlc',
        codigos: {
          Argentina: 'TLCA-SP',
          Colombia: 'TLCL-SP',
          Mexico: 'TLME-SP',
          Brasil: 'TLCB-PRT',
        },
        logo_svg: 'https://cdn.admin-tudiscovery.com/sites/default/files/logos/tlc.svg',
      },
    },
    {
      title: 'Cambiando un tatuaje de la adolescencia',
      description: 'Stuart se hizo un tatuaje a los quince años, del cual hoy se arrepiente profundamente. Por eso mismo, la misión de Lou será darle un nuevo significado al diseño inicial, con el que Stuart podrá sentirse más cómodo y representado.',
      preview_image: {
        image_1_1: 'https://cdn.admin-tudiscovery.com/sites/default/files/styles/slider_mobile/public/F6B6BB0F18864337A72C3C706C40F5E2.jpg?itok=4kJbtGBF',
        image_url: 'https://cdn.admin-tudiscovery.com/sites/default/files/styles/destacados/public/F6B6BB0F18864337A72C3C706C40F5E2.jpg?itok=yVCoyaqJ',
        image_file: 'F6B6BB0F18864337A72C3C706C40F5E2.jpg',
        image_alt: 'Cambiando un tatuaje de la adolescencia',
      },
      type: 'video',
      url: '/tlc/retatuadores/video/cambiando-un-tatuaje-de-la-adolescencia',
      channel: {
        name: 'TLC',
        logo: 'https://cdn.admin-tudiscovery.com/sites/default/files/2018-12/TLC-Logo-white_0.png',
        url: '/tlc',
        codigos: {
          Argentina: 'TLCA-SP',
          Colombia: 'TLCL-SP',
          Mexico: 'TLME-SP',
          Brasil: 'TLCB-PRT',
        },
        logo_svg: 'https://cdn.admin-tudiscovery.com/sites/default/files/logos/tlc.svg',
      },
    },
    {
      title: 'Retatuadores',
      description: 'Brad Knops es un artista apasionado que crea las cabañas más asombrosas para sus clientes.  Cada proyecto es una aventura cuando sale en busca de los tesoros que le ofrece la Madre Naturaleza.',
      preview_image: {
        image_file: 'https://cdn.admin-tudiscovery.com/sites/default/files/2018-11/retatuadores_imagen_principal_1.jpg',
        image_url: 'https://cdn.admin-tudiscovery.com/sites/default/files/styles/destacados/public/2018-11/retatuadores_imagen_principal_1.jpg?itok=WikYziUb',
        image_1_1: 'https://cdn.admin-tudiscovery.com/sites/default/files/styles/destacados_mobile/public/2018-11/retatuadores_imagen_principal_1.jpg?itok=k4yjv19g',
        image_alt: 'Retatuadores en TLC',
        image_title: 'N/A',
      },
      type: 'programa',
      url: '/tlc/retatuadores',
      channel: {
        name: 'TLC',
        logo: 'https://cdn.admin-tudiscovery.com/sites/default/files/2018-12/TLC-Logo-white_0.png',
        url: '/tlc',
        codigos: {
          Argentina: 'TLCA-SP',
          Colombia: 'TLCL-SP',
          Mexico: 'TLME-SP',
          Brasil: 'TLCB-PRT',
        },
        logo_svg: 'https://cdn.admin-tudiscovery.com/sites/default/files/logos/tlc.svg',
      },
    },
  ],
  sponsor: {
    name: 'Milo',
    background_color: '#24A136',
    font_color: '#DEFDEF',
    background_image: {
      image_file: 'https://dev-discoverylatam.pantheonsite.io/sites/default/files/logos/logo_discovery_header.png',
      image_url: 'https://dev-discoverylatam.pantheonsite.io/sites/default/files/styles/recomendados/public/logos/logo_discovery_header.png?itok=snofP29a',
      image_1_1: 'https://dev-discoverylatam.pantheonsite.io/sites/default/files/styles/recomendados_mobile/public/logos/logo_discovery_header.png?itok=CcBOPVoH',
      image_alt: 'Discovery',
      image_title: 'Discovery',
    },
    logo: 'https://dev-discoverylatam.pantheonsite.io/sites/default/files/styles/logos_footer/public/sponsors/logo/civilization_white_0.png?itok=5qsiBQjm',
    circular_logo: 'https://dev-discoverylatam.pantheonsite.io/sites/default/files/styles/logos_footer/public/sponsors/logo/Group%402x.png?itok=GbFcoHFD',
    logo_svg: 'https://dev-discoverylatam.pantheonsite.io/sites/default/files/sponsors/logo/Bitmap%20Copy.svg',
    secondary_logo_svg: 'https://dev-discoverylatam.pantheonsite.io/sites/default/files/sponsors/logo/Rectangle.svg',
    url: 'https://tudiscovery.com/',
  },
  type: 'article',
  id: '4650',
};

const shareData = {
  shareDesktop: [
    {
      id: 1,
      icon: Facebook,
      color: 'blue',
      url: '',
      background: props => get(props, 'theme.colors.facebook', ''),
      title: 'Comparte',
    },
    {
      id: 2,
      icon: Twitter,
      color: 'bluetw',
      url: '',
      background: props => get(props, 'theme.colors.twitter', ''),
      title: '',
    },
    {
      id: 4,
      icon: Email,
      color: 'red',
      url: '',
      background: props => get(props, 'theme.colors.mail', ''),
      title: '',
    },
  ],
  shareMobile: [
    {
      id: 1,
      icon: Facebook,
      color: 'white',
      url: '',
      background: props => get(props, 'theme.colors.facebook', ''),
      title: '',
    },
    {
      id: 2,
      icon: Twitter,
      color: 'white',
      url: '',
      background: props => get(props, 'theme.colors.twitter', ''),
      title: '',
    },
    {
      id: 3,
      icon: Whatsapp,
      color: 'white',
      url: '',
      background: props => get(props, 'theme.colors.whatsApp', ''),
      title: '',
    },
    {
      id: 4,
      icon: Email,
      color: 'white',
      url: '',
      background: props => get(props, 'theme.colors.mail', ''),
      title: '',
    },
  ],
};

storiesOf('Article', module)
  .add('Article main layout', () => <Article data={ArticleData} shareData={shareData} />, {
    backgrounds: [{
      name: 'Dark', value: 'rgba(0,14,38)', default: true,
    }],
  });
