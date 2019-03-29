import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router';
import Helmet from 'react-helmet';
// import logo from '../../assets/logo.jpg';

const SITE_URL = process.env.NODE_ENV === 'development'
  ? 'http://localhost:3000'
  : 'https://tudiscovery.com';

const FACEBOOK_APP_ID = 'XXXXXXXXX';

const defaultTitle = 'Discovery Latinoamérica';
const defaultDescription = 'En Discovery encontrarás programas de televisión, videos, aventuras, ciencia, tecnología, crimen, investigación, misterios, mundo natural, gente, carros, historia y mucho más.';
// TODO add default logo
const defaultImage = `${SITE_URL}`;
const defaultTwitter = '@tudiscovery';
const defaultSep = ' | ';

class Page extends Component {
  static getMetaTags(
    {
      title,
      description,
      image,
      contentType,
      twitter,
      noCrawl,
      published,
      updated,
      category,
      tags,
    },
    pathname,
  ) {
    const theTitle = title
      ? (title + defaultSep + defaultTitle).substring(0, 60)
      : defaultTitle;
    const theDescription = description
      ? description.substring(0, 155)
      : defaultDescription;
    const theImage = image ? `${SITE_URL}${image}` : defaultImage;

    const metaTags = [
      { itemprop: 'name', content: theTitle },
      { itemprop: 'description', content: theDescription },
      { itemprop: 'image', content: theImage },
      { name: 'description', content: theDescription },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:site', content: defaultTwitter },
      { name: 'twitter:title', content: theTitle },
      { name: 'twitter:description', content: theDescription },
      { name: 'twitter:creator', content: twitter || defaultTwitter },
      { name: 'twitter:image:src', content: theImage },
      { property: 'og:title', content: theTitle },
      { property: 'og:type', content: contentType || 'website' },
      { property: 'og:url', content: SITE_URL + pathname },
      { property: 'og:image', content: theImage },
      { property: 'og:description', content: theDescription },
      { property: 'og:site_name', content: defaultTitle },
      { property: 'fb:app_id', content: FACEBOOK_APP_ID },
    ];

    if (noCrawl) {
      metaTags.push({ name: 'robots', content: 'noindex, nofollow' });
    }

    if (published) {
      metaTags.push({ name: 'article:published_time', content: published });
    }
    if (updated) {
      metaTags.push({ name: 'article:modified_time', content: updated });
    }
    if (category) {
      metaTags.push({ name: 'article:section', content: category });
    }
    if (tags) {
      metaTags.push({ name: 'article:tag', content: tags });
    }

    return metaTags;
  }

  render() {
    const {
      children, id, className, location, ...rest
    } = this.props;

    return (
      <div id={id} className={className}>
        <Helmet
          htmlAttributes={{
            lang: 'en',
            itemscope: undefined,
            itemtype: `http://schema.org/${rest.schema || 'WebPage'}`,
          }}
          title={
            rest.title ? rest.title + defaultSep + defaultTitle : defaultTitle
          }
          link={[
            {
              rel: 'canonical',
              href: SITE_URL + location.pathname,
            },
          ]}
          meta={Page.getMetaTags(rest, location.pathname)}
        />
        {children}
      </div>
    );
  }
}

Page.propTypes = {
  id: PropTypes.string.isRequired,
  className: PropTypes.string,
  location: PropTypes.shape({
    pathname: PropTypes.string,
  }).isRequired,
  children: PropTypes.node.isRequired,
};

Page.defaultProps = {
  className: '',
};

export default withRouter(Page);
