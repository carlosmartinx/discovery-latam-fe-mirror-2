import React from 'react';
import { compose } from 'redux';
import PropTypes from 'prop-types';// eslint-disable-line
import { IntlProvider, addLocaleData } from 'react-intl';
import { connect } from 'react-redux';
import pt from 'react-intl/locale-data/pt';
import es from 'react-intl/locale-data/es';
import en from 'react-intl/locale-data/en';
import { appSetLangAction } from '../../actions/app';
import localeData from '../../../public/locales/data.json';

addLocaleData([...pt, ...es, ...en]);

const withIntl = (Component) => {
  const Wrapper = ({ appState, appSetLangAction, ...props }) => {// eslint-disable-line
    // Define user's language. Different browsers have the user locale defined
    // on different fields on the `navigator` object, so we make sure to account
    // for these different by checking all of them
    let language = (navigator.languages && navigator.languages[0])
    || navigator.language
    || navigator.userLanguage;

    if (appState.lang === '') {
      appSetLangAction(language);
    } else {
      language = appState.lang;
    }
    const languageWithoutRegionCode = language.toLowerCase().split('-')[0];

    const messages = localeData[languageWithoutRegionCode] || localeData.en;

    return (
      <IntlProvider locale={language} messages={messages}>
        <Component {...props} />
      </IntlProvider>
    );
  };

  Wrapper.propTypes = {
    appState: PropTypes.object,// eslint-disable-line
    appSetLangAction: PropTypes.func,// eslint-disable-line
  };

  return Wrapper;
};

const mapStateToProps = state => ({
  appState: state.app,
});

const mapDispatchToProps = ({
  appSetLangAction,
});

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withIntl,
);
