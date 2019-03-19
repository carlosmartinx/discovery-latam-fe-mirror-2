import React, { useState } from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from 'prop-types';
// eslint-disable-next-line import/no-extraneous-dependencies
import { Flex } from 'rebass';
// eslint-disable-next-line import/no-extraneous-dependencies
import useCookie from '@use-hook/use-cookie';

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

const CookieBar = ({
  langcode, ptLegal, esLegal, acceptText, btnEs, btnPt,
}) => {
  const [onCheckChange, setonCheckChange] = useState(false);
  const [clicked, setClicked] = useState(false);
  const [termsandconditions, setTermsandconditions] = useCookie('termsandconditions', 'false');

  const updateButton = () => {
    setonCheckChange(!onCheckChange);
  };

  const updateVisible = () => {
    setClicked(true);
    setTermsandconditions(true, { expires: 1 });
  };

  const barVisible = !(clicked === false && termsandconditions === 'false');
  const checkLang = langcode === 'pt';

  return (
    <Root
      style={{ display: (barVisible) ? 'none' : 'block' }}
      p="1"
      m="auto"
    >
      <Flex
        flexDirection={checkLang ? (['column', 'column', 'row']) : ('column')}
      >
        <Inner
          flexDirection={checkLang ? ('column') : (['column', 'column', 'row'])}
          alignItems={checkLang ? '' : ('center')}
          width={9 / 12}
          m="auto"
        >
          <Content width={[1, 1, 10 / 12]}>
            {langcode === 'pt' ? ptLegal : esLegal }
          </Content>
          {langcode === 'pt' ? (
            <Check mt={1}>
              <Flex
                width={1}
                flexDirection={['column', 'row']}
                alignItems="center"
                justifyContent="space-between"
              >
                <Label
                  mt={[0, 0, 0]}
                  pl="5"
                >
                  <Input
                    type="checkbox"
                    checked={onCheckChange}
                    onChange={() => updateButton()}
                  />
                  <Checkmark checked={onCheckChange}>
                    <Icon viewBox="0 0 24 24">
                      <polyline points="20 6 9 17 4 12" />
                    </Icon>
                  </Checkmark>
                  { acceptText }
                </Label>
                <Accept
                  mt={[1, 0, -5, -6]}
                  mr={[0, 0, 0, 5]}
                  ml={[0, 2, 0]}
                  px={2}
                  py={1}
                  fontSize={1}
                  type="button"
                  disabled={!onCheckChange}
                  onClick={() => updateVisible()}
                >
                  {btnPt}
                </Accept>
              </Flex>
            </Check>
          ) : (
            <Accept
              mt={[2, 2, 0]}
              mr={[0, 0, 4, 4]}
              ml={[0, 2, 0]}
              px={2}
              py={1}
              fontSize={1}
              type="button"
              onClick={() => updateVisible()}
            >
              {btnEs}
            </Accept>
          ) }
        </Inner>
      </Flex>
    </Root>
  );
};

const ptContent = (
  <p>
Os sites Discovery utilizam cookies para aprimorar sua experiência
com nosso conteúdo.
Para saber mais sobre como gerenciá-los, leia nossa
    {' '}
    <CookieA href="https://www.discoverybrasil.com/pagina/politica-de-privacidade" target="_blank">Política de Privacidade</CookieA>
    {' '}
e nossos
    {' '}
    <CookieA href="https://www.discoverybrasil.com/pagina/acordo-de-utilizacao" target="_blank">Termos de Uso</CookieA>
.
  </p>
);

const acceptlegal = (
  <p>
Declaro que li e aceito os termos de uso e
a política de privacidade da Discovery, inclusive no que diz respeito ao uso de cookies.
  </p>
);

const esContent = (
  <p>
Al acceder a nuestro sitio, usted entiende y acepta nuestros Términos y Condiciones.
Como la mayoría de los sitios web, los sitios de Discovery utilizan cookies
para mejorar su experiencia con nuestro contenido.
Para obtener más información acerca de las cookies y cómo administrarlas,
por favor lea nuestra Política de privacidad.
Declaro que he leído y acepto los
    {' '}
    <CookieA href="https://tudiscovery.com/terminos-y-condiciones" target="_blank"> términos y condiciones</CookieA>
    {' '}
y las
    {' '}
    <CookieA href="políticas de privacidad" target="_blank"> políticas de privacidad </CookieA>
  </p>
);

CookieBar.propTypes = {
  langcode: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
  ptLegal: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
  esLegal: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
  acceptText: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
  btnEs: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
  btnPt: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
};

CookieBar.defaultProps = {
  langcode: 'es',
  ptLegal: ptContent,
  esLegal: esContent,
  acceptText: acceptlegal,
  btnPt: 'Aceitar',
  btnEs: 'Aceptar',
};

export default CookieBar;
