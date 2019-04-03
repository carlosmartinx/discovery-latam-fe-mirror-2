import React from 'react';
import PropTypes from 'prop-types';
import Sponsor from '@discovery-web-app/shared-components/src/sponsor';
import ArticleImage from '@discovery-web-app/shared-components/src/article/article-image';
import ArticleBodyData from '@discovery-web-app/shared-components/src/article/article-bodytext';
import {
  Root, DescCard, ShortDesc, ModuleBox, ImageBox,
} from './styled';

export const ArticleLayout = ({ data }) => {
  const articleData = data.article;
  const sponsorData = data.sponsor || null;
  return (
    <Root>
      {sponsorData && (
        <ModuleBox width={[1, 1, 10 / 12]}>
          <Sponsor data={sponsorData} />
        </ModuleBox>
      )}
      <DescCard width={[1, 1, 10 / 12]}>
        {articleData.title && <h1>{articleData.title}</h1>}
        {articleData.short_description && <ShortDesc>{articleData.short_description}</ShortDesc>}
      </DescCard>
      { articleData.preview_image && (
        <ImageBox width={[1, 1, 10 / 12]}>
          <ArticleImage imageData={articleData.preview_image} />
        </ImageBox>
      )}
      { articleData.long_description && (
        <ModuleBox width={[1, 1, 10 / 12]}>
          <ArticleBodyData bodyData={articleData.long_description} />
        </ModuleBox>
      )}
    </Root>
  );
};

ArticleLayout.propTypes = {
  data: PropTypes.oneOfType([PropTypes.object, PropTypes.array]).isRequired,
};

export default ArticleLayout;
