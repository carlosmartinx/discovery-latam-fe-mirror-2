import React from 'react';
import { Box, Flex, Text } from 'rebass';
import {
  GalleryTitle, Share, SliderGallery, BulletTitle, Carousel,
} from '@discovery-web-app/shared-components';

import Facebook from '@discovery-web-app/shared-components/icons/facebook.svg';
import Twitter from '@discovery-web-app/shared-components/icons/twitter.svg';
import Email from '@discovery-web-app/shared-components/icons/email.svg';

import get from 'lodash/get';
import Page from '../../components/page';
import { BoxBase, HeadlineWrapper } from './styled';

const shareDesktop = [
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
  }];

const items = [
  {
    key: 1,
    background: 'image',
    title: 'Headline 1',
    href: 'http://www.tudiscovery.com',
    headerSource: 'https://lkfsbnqnmjwfhf6vwa5w3wf47g.gcdn.anvato.net/anv-iupl/FAF/50B/FAF50BC43B504B748967A9C44CF5A337.jpg?Expires=1642437024&KeyName=mcpkey1&Signature=03OBysNVWH9wUS6IIC9VlaL5Bto',
  }, {
    key: 2,
    background: 'image',
    title: 'Headline 2',
    href: 'http://www.tudiscovery.com',
    headerSource: 'https://lkfsbnqnmjwfhf6vwa5w3wf47g.gcdn.anvato.net/anv-iupl/FAF/50B/FAF50BC43B504B748967A9C44CF5A337.jpg?Expires=1642437024&KeyName=mcpkey1&Signature=03OBysNVWH9wUS6IIC9VlaL5Bto',
  }, {
    key: 3,
    background: 'image',
    title: 'Headline 3',
    href: 'http://www.tudiscovery.com',
    headerSource: 'https://lkfsbnqnmjwfhf6vwa5w3wf47g.gcdn.anvato.net/anv-iupl/FAF/50B/FAF50BC43B504B748967A9C44CF5A337.jpg?Expires=1642437024&KeyName=mcpkey1&Signature=03OBysNVWH9wUS6IIC9VlaL5Bto',
  },
  {
    key: 4,
    background: 'image',
    title: 'Headline 4',
    href: 'http://www.tudiscovery.com',
    headerSource: 'https://lkfsbnqnmjwfhf6vwa5w3wf47g.gcdn.anvato.net/anv-iupl/FAF/50B/FAF50BC43B504B748967A9C44CF5A337.jpg?Expires=1642437024&KeyName=mcpkey1&Signature=03OBysNVWH9wUS6IIC9VlaL5Bto',
  },
  {
    key: 5,
    background: 'image',
    title: 'Headline 5',
    href: 'http://www.tudiscovery.com',
    headerSource: 'https://lkfsbnqnmjwfhf6vwa5w3wf47g.gcdn.anvato.net/anv-iupl/FAF/50B/FAF50BC43B504B748967A9C44CF5A337.jpg?Expires=1642437024&KeyName=mcpkey1&Signature=03OBysNVWH9wUS6IIC9VlaL5Bto',
  },
  {
    key: 6,
    background: 'image',
    title: 'Headline 6',
    href: 'http://www.tudiscovery.com',
    headerSource: 'https://lkfsbnqnmjwfhf6vwa5w3wf47g.gcdn.anvato.net/anv-iupl/FAF/50B/FAF50BC43B504B748967A9C44CF5A337.jpg?Expires=1642437024&KeyName=mcpkey1&Signature=03OBysNVWH9wUS6IIC9VlaL5Bto',
  }];

const carouselItems = [
  {
    background: 'image',
    backtheme: 'dark',
    title: 'Headline 1',
    href: 'http://www.tudiscovery.com',
    channelLogo: 'https://cdn.admin-discoverybrasil.com/sites/default/files/logos/discovery.svg',
    channelAlt: 'Discovery Channel',
    headerSource: 'https://lkfsbnqnmjwfhf6vwa5w3wf47g.gcdn.anvato.net/anv-iupl/FAF/50B/FAF50BC43B504B748967A9C44CF5A337.jpg?Expires=1642437024&KeyName=mcpkey1&Signature=03OBysNVWH9wUS6IIC9VlaL5Bto',
  }, {
    backtheme: 'ligh',
    background: 'video',
    title: 'Headline 2',
    href: 'http://www.tudiscovery.com',
    channelLogo: 'https://cdn.admin-discoverybrasil.com/sites/default/files/logos/discovery.svg',
    channelAlt: 'Discovery Channel',
    headerSource: 'https://lkfsbnqnmjwfhf6vwa5w3wf47g.gcdn.anvato.net/anv-iupl/FAF/50B/FAF50BC43B504B748967A9C44CF5A337.jpg?Expires=1642437024&KeyName=mcpkey1&Signature=03OBysNVWH9wUS6IIC9VlaL5Bto',
    label: 'label',
    duration: '30:30',
    totalTime: '10:10',
  }, {
    background: 'image',
    title: 'Headline 3',
    href: 'http://www.tudiscovery.com',
    channelLogo: 'https://cdn.admin-discoverybrasil.com/sites/default/files/logos/discovery.svg',
    channelAlt: 'Discovery Channel',
    headerSource: 'https://lkfsbnqnmjwfhf6vwa5w3wf47g.gcdn.anvato.net/anv-iupl/FAF/50B/FAF50BC43B504B748967A9C44CF5A337.jpg?Expires=1642437024&KeyName=mcpkey1&Signature=03OBysNVWH9wUS6IIC9VlaL5Bto',
  },
  {
    background: 'gallery',
    title: 'Headline 4',
    href: 'http://www.tudiscovery.com',
    channelLogo: 'https://cdn.admin-discoverybrasil.com/sites/default/files/logos/discovery.svg',
    channelAlt: 'Discovery Channel',
    headerSource: 'https://lkfsbnqnmjwfhf6vwa5w3wf47g.gcdn.anvato.net/anv-iupl/FAF/50B/FAF50BC43B504B748967A9C44CF5A337.jpg?Expires=1642437024&KeyName=mcpkey1&Signature=03OBysNVWH9wUS6IIC9VlaL5Bto',
  },
  {
    background: 'image',
    title: 'Headline 5',
    href: 'http://www.tudiscovery.com',
    channelLogo: 'https://cdn.admin-discoverybrasil.com/sites/default/files/logos/discovery.svg',
    channelAlt: 'Discovery Channel',
    headerSource: 'https://lkfsbnqnmjwfhf6vwa5w3wf47g.gcdn.anvato.net/anv-iupl/FAF/50B/FAF50BC43B504B748967A9C44CF5A337.jpg?Expires=1642437024&KeyName=mcpkey1&Signature=03OBysNVWH9wUS6IIC9VlaL5Bto',
  },
  {
    background: 'image',
    title: 'Headline 6',
    href: 'http://www.tudiscovery.com',
    channelLogo: 'https://cdn.admin-discoverybrasil.com/sites/default/files/logos/discovery.svg',
    channelAlt: 'Discovery Channel',
    headerSource: 'https://lkfsbnqnmjwfhf6vwa5w3wf47g.gcdn.anvato.net/anv-iupl/FAF/50B/FAF50BC43B504B748967A9C44CF5A337.jpg?Expires=1642437024&KeyName=mcpkey1&Signature=03OBysNVWH9wUS6IIC9VlaL5Bto',
  },
  {
    background: 'image',
    title: 'Headline 7',
    href: 'http://www.tudiscovery.com',
    channelLogo: 'https://cdn.admin-discoverybrasil.com/sites/default/files/logos/discovery.svg',
    channelAlt: 'Discovery Channel',
    headerSource: 'https://lkfsbnqnmjwfhf6vwa5w3wf47g.gcdn.anvato.net/anv-iupl/FAF/50B/FAF50BC43B504B748967A9C44CF5A337.jpg?Expires=1642437024&KeyName=mcpkey1&Signature=03OBysNVWH9wUS6IIC9VlaL5Bto',
  },
  {
    background: 'image',
    title: 'Headline 8',
    href: 'http://www.tudiscovery.com',
    channelLogo: 'https://cdn.admin-discoverybrasil.com/sites/default/files/logos/discovery.svg',
    channelAlt: 'Discovery Channel',
    headerSource: 'https://lkfsbnqnmjwfhf6vwa5w3wf47g.gcdn.anvato.net/anv-iupl/FAF/50B/FAF50BC43B504B748967A9C44CF5A337.jpg?Expires=1642437024&KeyName=mcpkey1&Signature=03OBysNVWH9wUS6IIC9VlaL5Bto',
  }];


const Gallery = () => (
  <Page id="gallery" background="#001534">
    <BoxBase m="auto">
      <HeadlineWrapper alignItems="flex-end">
        <Box width={[1, 1, 4 / 6, 9 / 12]}>
          <GalleryTitle title="This is a Headline" description="This is the gallery description" />
        </Box>
        <Box width={[1, 1, 2 / 6, 3 / 12]}>
          <Share shareList={shareDesktop} />
        </Box>
      </HeadlineWrapper>

      <Flex flexDirection={['column', 'column', 'row', 'row']} alignItems="center">
        <Box width={[1, 1, 4 / 6, 8 / 12]}>
          <SliderGallery sliderContent={items} />
        </Box>
        <Box width={[1, 1, 2 / 6, 3 / 12]}>
          <Text>Pauta</Text>
        </Box>
      </Flex>

      <Box>
        <BulletTitle barcolor="default" backtheme="dark" />
        <Carousel sliderContent={carouselItems} />
      </Box>
    </BoxBase>
  </Page>
);

export default Gallery;
