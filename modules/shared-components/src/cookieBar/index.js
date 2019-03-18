/* eslint-disable */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Flex } from 'rebass';
import useCookie from "@use-hook/use-cookie";
import {
  Root,
  Inner,
  Content,
  Accept,
  Check,
  CookieA,
  Label,
  Icon,
  Input,
  Checkmark,
} from './styled';


const CookieBar = ({ langcode }) => {
  const [onCheckChange, setonCheckChange] = useState(false);
  const [clicked, setClicked] = useState(false);
  const [termsandconditions, setTermsandconditions] = useCookie("termsandconditions", "false"); 

  const updateButton = () => {
    setonCheckChange(!onCheckChange);
  };

  const updateVisible = () => {
    setClicked(true);
    setTermsandconditions(true, { expires: 1});
    console.log(termsandconditions, clicked);
  };

  const barVisible = !(clicked === false && termsandconditions === "false");


  return (
    
    <Root style={{ display: (barVisible) ? 'none' : 'block' }}>
      {langcode === 'es' ? (
        <Inner>
          <Content width={[1, 1, 10 / 12]}>
            Al acceder a nuestro sitio, usted entiende y acepta nuestros Términos y Condiciones.
            Como la mayoría de los sitios web, los sitios de Discovery utilizan cookies
            para mejorar su experiencia con nuestro contenido.
            Para obtener más información acerca de las cookies y cómo administrarlas,
            por favor lea nuestra Política de privacidad.
            Declaro que he leído y acepto los {' '}
            <CookieA href="https://tudiscovery.com/terminos-y-condiciones" target="_blank"> términos y condiciones</CookieA>
            y las {' '}
            <CookieA href="políticas de privacidad" target="_blank"> políticas de privacidad </CookieA>
          </Content>
          <Check mt={1}>
            <Flex width={1} flexDirection={['column', 'row']} alignItems="center" justifyContent="space-between">
              <Label mt={[2, 0, 0]}>
                <Input type="checkbox" checked={onCheckChange} onChange={() => updateButton()} />
                <Checkmark checked={onCheckChange}>
                  <Icon viewBox="0 0 24 24">
                    <polyline points="20 6 9 17 4 12" />
                  </Icon>
                </Checkmark>
                Declaro que he leído y acepto los términos de uso y
                la política de privacidad del Discovery, incluso con respecto al uso de cookies.
              </Label>
              <Accept mt={[3, 0, -6, -6]} mb={[0, 0, 2, 2]} mr={[0, 0, 0, 5]} ml={[0, 2, 0, 0]} fontSize={1} type="button" disabled={!onCheckChange} onClick={() => updateVisible()}>
                Aceptar
              </Accept>
            </Flex>
          </Check>
        </Inner>
      ) : (
        <Inner> 
          <Flex flexDirection={['column', 'column', 'row']} alignItems="center">
            <Content width={[1, 1, 10 / 12]}>
              Os sites Discovery utilizam cookies para aprimorar sua experiência
              com nosso conteúdo.
              Para saber mais sobre como gerenciá-los, leia nossa {' '}
              <CookieA href="https://www.discoverybrasil.com/pagina/politica-de-privacidade" target="_blank">Política de Privacidade</CookieA>
              {' '} e nossos {' '}
              <CookieA href="https://www.discoverybrasil.com/pagina/acordo-de-utilizacao" target="_blank">Termos de Uso</CookieA>.
            </Content>
            <Accept mt={[3, 3, 0]} ml={[0, 0, 4]} fontSize={1} type="button" onClick={() => updateVisible()}>
              Aceitar
            </Accept>
          </Flex>
        </Inner>
      )}
    </Root>
  );
};

CookieBar.propTypes = {
  langcode: PropTypes.string.isRequired,
};

export default CookieBar;