/* eslint-disable */
import React, { useState } from "react";
import PropTypes from "prop-types";
import { Text, Box, Button, Flex } from "rebass";
import styled from "styled-components";
import theme from '../../../core/src/styles/mainTheme';
import get from 'lodash/get';


export const Root = styled(Box)`
  background: ${props => get(props, 'theme.colors.tdBlueGray', '')};
  bottom: 0;
  font-family: ${props => get(props, 'theme.fonts.sans', '')};
  font-style: italic;
  font-weight: 400;
  left: 0;
  margin: auto;
  max-width: 1440px;
  padding: 8px 16px;
  position: fixed;
  right: 0;
`;

export const Inner = styled(Box)`
  margin: 0 auto;
  max-width: 1038px;
`;

export const Content = styled(Text)`
  color: black;
  font-size: 12px;
  line-height: 20px;
  margin: 0;
  max-width: 826px;
  & a {
    color: #000;
  }
`;

export const Accept = styled(Button)`
  background: ${props => get(props, 'theme.colors.tdBlueGray', '#00255b')};
  border-radius: 0;
  cursor: pointer;
  text-transform: uppercase;
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
  &:focus {
    outline: none;
  }
`;

export const Check = styled(Flex)`
  font-size: 12px;
`;

export const CookieA = styled.a`
  color: black;
  font-size: 12px;
  line-height: 20px;
  margin: 0;
  max-width: 826px;
  & a {
    color: #000;
  }
`;


export const Label = styled(Text)`
  display: inline-block;
  font-size: 12px;
  line-height: 20px;
  padding-left: 32px;
  position: relative;
  vertical-align: middle;
`;


export const Icon = styled.svg`
  fill: none;
  stroke: white;
  stroke-width: 2px;
`;

export const Input = styled.input`
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 24px;
  top: 0;
  bottom: 0;
  left: 0;
  margin: auto;
  width: 24px;

`;


export const Checkmark = styled.span`
  display: inline-block;
  width: 16px;
  height: 16px;
  background: white;
  position: absolute;
  pointer-events: none;
  left: 0;
  margin: auto;
  top: 0;
  bottom: 0;
  transition: all 150ms;
  ${Icon} {
    stroke: ${props => (props.checked ? 'black' : '#efefef')}
  }
`;



const CookieBar = ({ langcode }) => {
  const [onCheckChange, setonCheckChange] = useState(false);
  const [clicked, setClicked] = useState();
  

  const updateButton = () => {
    setonCheckChange(!onCheckChange);
  };

  const updateVisible = () => {
    setClicked(!clicked);
  };
  
  return (
      <Root theme={theme} style={{display: clicked ? 'none' : 'block'}}>
        {langcode === "es" ? (
          <Inner>
            <Content width={[ 1, 1, 10/12 ]}>
              Al acceder a nuestro sitio, usted entiende y acepta nuestros Términos y Condiciones. 
              Como la mayoría de los sitios web, los sitios de Discovery utilizan cookies para mejorar su experiencia con nuestro contenido. 
              Para obtener más información acerca de las cookies y cómo administrarlas, por favor lea nuestra Política de privacidad. 
              Declaro que he leído y acepto los&nbsp;
              <CookieA href="https://tudiscovery.com/terminos-y-condiciones"> términos y condiciones</CookieA> y las&nbsp;
              <CookieA href="políticas de privacidad"> políticas de privacidad </CookieA>  
            </Content>
            <Check mt={1}>
              <Flex width={1} flexDirection={[ 'column', 'row' ]} alignItems={'center'} justifyContent={'space-between'}>
                <Label mt={[2,2,1]}>
                  <Input type="checkbox" checked={onCheckChange} onChange={() => updateButton()} />
                  <Checkmark checked={onCheckChange}>
                  <Icon viewBox="0 0 24 24">
                    <polyline points="20 6 9 17 4 12" />
                  </Icon>
                  </Checkmark>
                  Declaro que he leído y acepto los términos de uso y la política de privacidad del Discovery, incluso con respecto al uso de cookies.
                </Label>
                <Accept mt={[3,0,-5,-5]} ml={[0,4]} fontSize={1} type="button" disabled={!onCheckChange} onClick={() => updateVisible()}>
                  Aceptar
                </Accept>
              </Flex>
            </Check>
          </Inner>
        ) : (
          <Inner>
            <Flex flexDirection={[ 'column', 'column', 'row' ]} alignItems={'center'}>
              <Content width={1}>
                Os sites Discovery utilizam cookies para aprimorar sua experiência com nosso conteúdo. 
                Para saber mais sobre como gerenciá-los, leia nossa &nbsp;
                <CookieA href="https://www.discoverybrasil.com/pagina/politica-de-privacidade">Política de Privacidade</CookieA> e nossos&nbsp;
                <CookieA href="https://www.discoverybrasil.com/pagina/acordo-de-utilizacao">Termos de Uso</CookieA>.
              </Content>
              <Accept mt={[3,3,0]} ml={[0,0,4]} fontSize={1} type="button" onClick={() => updateVisible()}>
                Aceitar
              </Accept>
            </Flex>
          </Inner>
        )}
      </Root>
  );
};

CookieBar.propTypes = {
  langcode: PropTypes.any
};

export default CookieBar;
