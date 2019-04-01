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
  lazyLoad: 'ondemand',
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
  lazyLoad: 'ondemand',
};

// eslint-disable-next-line react/prop-types
const Slide = ({ value }) => (
  <div
    key={value}
    style={{
      height: '300px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#ccc',
      textAlign: 'center',
      border: '1px solid #000',
    }}
  >
    <h3>{value}</h3>
  </div>
);

const items = [
  {
    key: 1,
    item: <Slide value={1} />,
  },
  {
    key: 2,
    item: <Slide value={2} />,
  },
  {
    key: 3,
    item: <Slide value={3} />,
  },
  {
    key: 4,
    item: <Slide value={4} />,
  },
  {
    key: 5,
    item: <Slide value={5} />,
  },
];

storiesOf('SliderSlick', module)
  .add('Slider Slick', () => (
    <SliderSlick settings={settings}>
      <Slide value={1} />
    </SliderSlick>
  ))
  .add('Slider Slick 4 Items', () => (
    <SliderSlick settings={settings4}>
      {items.map(value => (
        value.item
      ))}
    </SliderSlick>
  ));
