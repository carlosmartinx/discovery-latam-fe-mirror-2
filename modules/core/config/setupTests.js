import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

/**
 * fix: `matchMedia` not present, legacy browsers require a polyfill
 */
window.matchMedia = window.matchMedia
  // eslint-disable-next-line func-names
  || function () {
    return {
      matches: false,
      addListener() {},
      removeListener() {},
    };
  };

window.requestAnimationFrame = window.requestAnimationFrame
  // eslint-disable-next-line func-names
  || function (callback) {
    setTimeout(callback, 0);
  };
