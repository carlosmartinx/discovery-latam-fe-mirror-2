import React from 'react';
import { storiesOf } from '@storybook/react';

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
const settings4 = {
  dots: true,
  infinite: false,
  speed: 500,
  slide: 'span',
  slidesToShow: 4,
  slidesToScroll: 4,
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
    <SliderSlick settings={settings}>
      {items.map((item, index) => (
        <div key={index}>{item}</div> 
      ))}
    </SliderSlick>
  )
  .add('Slider Slick 4 Items', () => 
    <SliderSlick settings={settings4}>
      {items.map((item, index) => (
        <div key={index}>{item}</div> 
      ))}
    </SliderSlick>
  );