/* eslint-disable */
import React from 'react';
import { storiesOf } from '@storybook/react';
import Sponsor from '.';

const data = {  
   "name": "Milo",
   "background_color": "#24A136",
   "font_color": "#DEFDEF",
   "background_image": {  
      "image_file":"https://dev-discoverylatam.pantheonsite.io/sites/default/files/logos/logo_discovery_header.png",
      "image_url":"https://dev-discoverylatam.pantheonsite.io/sites/default/files/styles/recomendados/public/logos/logo_discovery_header.png?itok=snofP29a",
      "image_1_1":"https://dev-discoverylatam.pantheonsite.io/sites/default/files/styles/recomendados_mobile/public/logos/logo_discovery_header.png?itok=CcBOPVoH",
      "image_alt":"Discovery",
      "image_title":"Discovery"
   },
   "logo": "https://dev-discoverylatam.pantheonsite.io/sites/default/files/styles/logos_footer/public/sponsors/logo/civilization_white_0.png?itok=5qsiBQjm",
   "circular_logo": "https://dev-discoverylatam.pantheonsite.io/sites/default/files/styles/logos_footer/public/sponsors/logo/Group%402x.png?itok=GbFcoHFD",
   "logo_svg": "https://dev-discoverylatam.pantheonsite.io/sites/default/files/sponsors/logo/Bitmap%20Copy.svg",
   "secondary_logo_svg": "https://dev-discoverylatam.pantheonsite.io/sites/default/files/sponsors/logo/Rectangle.svg",
   "url": "https://tudiscovery.com/"
}

storiesOf('Sponsor', module)
  .add('Sponsor long', () =>
    <Sponsor data={data}></Sponsor>
  )
  .add('Sponsor short', () =>
    <Sponsor data={data} variation="short"></Sponsor>
  );