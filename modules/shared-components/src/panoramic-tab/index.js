/* eslint-disable */
import React from "react";
import PropTypes from "prop-types";
import { Tab, Sponsor, Content, LinkWrapper, ImgLogo } from "./styled";

const PanoramicTab = ({ sponsor, description, title, url }) => (
  <Tab>
    <Sponsor>
      {sponsor.map(spon => (
        <LinkWrapper
          href={spon.url}
          target="_blank"
        >
          <ImgLogo src={spon.logo_svg} mx="auto" />
        </LinkWrapper>
      ))}
    </Sponsor>
    <Content>
      <LinkWrapper href={url}>
        <Content width={1}>
          {title}
        </Content>
      </LinkWrapper>
      <Content width={1}>
        {description}
      </Content>
    </Content>
  </Tab>
);

PanoramicTab.propTypes = {
    day: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired
};

export default PanoramicTab;
