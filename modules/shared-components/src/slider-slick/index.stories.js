/* eslint-disable */
import React from 'react';
import { storiesOf } from '@storybook/react';
// import {
//   withKnobs,
//   text,
// } from '@storybook/addon-knobs';

import SliderSlick from '.';

const settings = {
  dots: false,
  infinite: false,
  speed: 500,
  slide: 'span',
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
  accessibility: false,
  lazyLoad: 'ondemand'
};
const items = [
  (
    <div>
      <h3>1</h3>
    </div>
  ),
  (
    <div>
      <h3>2</h3>
    </div>
  ),
  (
    <div>
      <h3>3</h3>
    </div>
  ),
  (
    <div>
      <h3>4</h3>
    </div>
  ),
  (
    <div>
      <h3>5</h3>
    </div>
  ),
  (
    <div>
      <h3>6</h3>
    </div>
  )
];

storiesOf('SliderSlick', module)
  .add('Slider Slick', () => 
    <SliderSlick settings={settings} items={items} />
  )