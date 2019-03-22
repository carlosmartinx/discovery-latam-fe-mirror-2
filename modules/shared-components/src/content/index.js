import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from 'prop-types';
// eslint-disable-next-line import/no-extraneous-dependencies
import { Root, Card, LinkWrapper, ImgLogo, ContenLink, ContenDescription, CardText } from './styled';

const Content = ({logo, link, title, description}) => {
  return (
    <Root flexDirection="column">
      <Card p={1} width={1}>
        <LinkWrapper flexDirection={['column', 'row']} href={link} title={title} target="_blank" width={[1, 1, 10 / 12]}>
          <Card width={1}>
            <ImgLogo src={logo} mx="auto" /> <ContenLink> | {title}</ContenLink>
          </Card>
        </LinkWrapper>
      </Card>
      <Card p={1} width={1}>
        <ContenDescription>{description}</ContenDescription>
      </Card>
    </Root>
  );
};

Content.propTypes = {
  logo: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

Content.defaultProps = {
  logo: 'https://cdn.admin-tudiscovery.com/sites/default/files/2018-12/Discovery-Logo-white.png',
  link: 'https://www.tudiscovery.com/discovery',
  title: 'Discovery',
  description: 'En su viaje por México, Frank descubre y persigue varios animales que encuentra en el camino. ¡Míralo en acción!',
};

export default Content;
