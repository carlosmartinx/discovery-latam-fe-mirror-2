/* eslint-disable */
import React from 'react';
import { storiesOf } from '@storybook/react';

import ContentCardBig from '.';

const data = {  
  "name": "Discover",
  "circular_logo": "https://dev-discoverylatam.pantheonsite.io/sites/default/files/styles/logos_footer/public/sponsors/logo/Group%402x.png?itok=GbFcoHFD",
  "url": "https://tudiscovery.com/"
}

storiesOf('Content Card', module)
  .add('with Image', () => 
  <ContentCardBig 
    backtheme='dark'
    background="image"
    title="Title"
    description="Description"
    headerSource="https://lkfsbnqnmjwfhf6vwa5w3wf47g.gcdn.anvato.net/anv-iupl/FAF/50B/FAF50BC43B504B748967A9C44CF5A337.jpg"
    href='http://www.tudiscovery.com'
    channelLogo='https://cdn.admin-discoverybrasil.com/sites/default/files/logos/discovery.svg'
    channelAlt='Discovery Channel'
  >
  </ContentCardBig>,{
      backgrounds: [{
        name: 'Dark', value: 'rgba(0,14,38)', default: true
      }]
    }
  )
  .add('with Video', () => 
  <ContentCardBig 
    backtheme='light'
    background='video'
    title="Title"
    description="Description"
    headerSource="https://lkfsbnqnmjwfhf6vwa5w3wf47g.gcdn.anvato.net/anv-iupl/FAF/50B/FAF50BC43B504B748967A9C44CF5A337.jpg"
    sponsor={data} 
    label={'Label'}
    duration={'30:30'}
    totalTime={'10:10'}
    variation="short"
  >
  </ContentCardBig>,{
      backgrounds: [{
        name: 'Dark', value: 'rgba(0,14,38)', default: true
      }]
    }
  )
  .add('with Gallery', () => 
  <ContentCardBig 
    backtheme='light'
    background='gallery'
    title="Title"
    description="Description"
    headerSource="https://lkfsbnqnmjwfhf6vwa5w3wf47g.gcdn.anvato.net/anv-iupl/FAF/50B/FAF50BC43B504B748967A9C44CF5A337.jpg"
  >
  </ContentCardBig>,{
      backgrounds: [{
        name: 'Dark', value: 'rgba(0,14,38)', default: true
      }]
    }
  )
  .add('Fully sponsored', () => 
  <ContentCardBig 
    isFullySponsored={true}
    backtheme='light'
    title="Title"
    description="Description"
    headerSource="https://lkfsbnqnmjwfhf6vwa5w3wf47g.gcdn.anvato.net/anv-iupl/FAF/50B/FAF50BC43B504B748967A9C44CF5A337.jpg"
    sponsor={data}
    variation="short"
  >
  </ContentCardBig>,{
      backgrounds: [{
        name: 'Dark', value: 'rgba(0,14,38)', default: true
      }]
    }
  );
