/* eslint-disable */
import React, { useState } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Text } from "rebass";

const Root = styled.div`
  background-color: #d6dbda;
  bottom: 0;
  left: 0;
  margin: auto;
  max-width: 1440px;
  padding: 8px 16px;
  position: fixed;
  right: 0;
`;

const Inner = styled.div`
  margin: 0 auto;
  max-width: 1038px;
`;

const CookieText = styled.p`
  color: black;
  font-size: 12px;
  line-height: 20px;
  margin: 0;
  max-width: 826px;
  & a {
    color: #000;
  }
`;

const CookieA = styled.a`
  color: black;
  font-size: 12px;
  line-height: 20px;
  margin: 0;
  max-width: 826px;
  & a {
    color: #000;
  }
`;

const CookieBar = ({ language }) => {
  const [onCheckChange, setonCheckChange] = useState(false);
  const updateButton = () => {
    setonCheckChange(!onCheckChange);
  };
  const text = language;
  return (
      <Root>
        {language === "es" ? (
          <Inner>
            <Text fontWeight="bold">
              "dfdfdfdf"<CookieA>"dfdfdfdf"</CookieA>
            </Text>
            <input type="checkbox" onChange={() => updateButton()} />
            <button type="button" disabled={!onCheckChange}>
              Aceptar
            </button>
          </Inner>
        ) : (
          <Inner>{text}</Inner>
        )}
      </Root>
  );
};

CookieBar.propTypes = {
  language: PropTypes.any
};

export default CookieBar;
