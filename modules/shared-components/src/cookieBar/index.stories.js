/* eslint-disable */
import React from 'react';
import { storiesOf } from '@storybook/react';
import {
  withKnobs,
  text,
} from '@storybook/addon-knobs';

import CookieBar from '.';

const ptContent = (
  <p>
Os sites Discovery utilizam cookies para aprimorar sua experiência
com nosso conteúdo.
Para saber mais sobre como gerenciá-los, leia nossa
    {' '}
    <a href="https://www.discoverybrasil.com/pagina/politica-de-privacidade" target="_blank">Política de Privacidade</a>
    {' '}
e nossos
    {' '}
    <a href="https://www.discoverybrasil.com/pagina/acordo-de-utilizacao" target="_blank">Termos de Uso</a>
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
    <a href="https://tudiscovery.com/terminos-y-condiciones" target="_blank"> términos y condiciones</a>
    {' '}
y las
    {' '}
    <a href="políticas de privacidad" target="_blank"> políticas de privacidad </a>
  </p>
);

storiesOf('CookieBar', module)
  .addDecorator(withKnobs)
  .add('Brasil', () => 
    <CookieBar langcode={text('language', 'pt')} legal={ptContent} acceptText={acceptlegal} btnText={"Aceitar"}></CookieBar>
  )
  .add('Latam', () => 
    <CookieBar langcode='es' legal={esContent} btnText={"Aceptar"}></CookieBar>
  )
