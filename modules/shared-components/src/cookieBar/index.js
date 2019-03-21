import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Flex } from 'rebass';
import useCookie from '@use-hook/use-cookie';

import {
  Root,
  Inner,
  Content,
  Accept,
  Check,
  Label,
  Icon,
  Input,
  Checkmark,
} from './styled';

const CookieBar = ({
  addCheck, legal, acceptText, btnText
}) => {
  const [onCheckChange, setonCheckChange] = useState(false);
  const [clicked, setClicked] = useState(false);
  const [termsandconditions, setTermsandconditions] = useCookie('termsandconditions', 'false');

  const updateButton = () => {
    setonCheckChange(!onCheckChange);
  };

  const updateVisible = () => {
    setClicked(true);
    setTermsandconditions(true, { expires: 7 });
  };

  const barVisible = !(clicked === false && termsandconditions === 'false');
  const checkText = addCheck === 'show';

  return (
    <Root
      style={{ display: (barVisible) ? 'none' : 'block' }}
      p="1"
      m="auto"
    >
      <Flex
        flexDirection={checkText ? (['column', 'column', 'row']) : ('column')}
      >
        <Inner
          flexDirection={checkText ? ('column') : (['column', 'column', 'row'])}
          alignItems={checkText ? '' : ('center')}
          width={9 / 12}
          m="auto"
        >
          <Content width={[1, 1, 10 / 12]}>
            {legal}
          </Content>
          {addCheck === 'show' ? (
            <Check mt={1}>
              <Flex
                width={1}
                flexDirection={['column', 'row']}
                alignItems="center"
                justifyContent="space-between"
              >
                <Label
                  mt={[0, 0, 0]}
                  pl="4"
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
                  {btnText}
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
              {btnText}
            </Accept>
          ) }
        </Inner>
      </Flex>
    </Root>
  );
};

CookieBar.propTypes = {
  addCheck: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
  legal: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
  acceptText: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
  btnText: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
};

CookieBar.defaultProps = {
  addCheck: 'true',
  legal: 'Acepta nuestros tèrminos y condiciones',
  acceptText: 'Declaro que conozco los términos y condiciones',
  btnText: 'Aceptar',
};

export default CookieBar;
