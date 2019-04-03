import React from 'react';
import PropTypes from 'prop-types';
import Sticky from 'react-sticky-el';
import {
  Sponsor,
  ArticleImage,
  ArticleBodyData,
  Ads,
  FourItemCarousel,
  BulletTitle,
  Share,
} from '@discovery-web-app/shared-components/src';
import { esCodes } from '@discovery-web-app/shared-components/config/tagCodes';
import {
  Root,
  DescCard,
  ShortDesc,
  ModuleBox,
  ImageBox,
  ShareModule,
} from './styled';

export const ArticleLayout = ({ data, shareData }) => {
  const articleData = data.article || null;

  const adsData = {
    bgColor: 'ads-light',
    adTitle: 'Publicidad',
    adSlotConfig: [
      {
        adSlotSize: [300, 50],
        adUnitText: 'discoverylatam/Mobile_Leaderboard_mid',
        adSlotId: esCodes.mob_leaderboard_mid,
      },
      {
        adSlotSize: [728, 90],
        adUnitText: 'discoverylatam/Leaderboard_mid',
        adSlotId: esCodes.leaderboard_mid,
      },
    ],
  };

  const recomendedData = {
    barColor: 'default',
    backTheme: 'light',
    titleContent: 'Contenido relacionado',
  };

  return (
    <Root>
      {data.sponsor && (
        <ModuleBox width={[1, 1, 10 / 12]}>
          <Sponsor data={data.sponsor} />
        </ModuleBox>
      )}
      <DescCard width={[1, 1, 10 / 12]}>
        {articleData.title && <h1>{articleData.title}</h1>}
        {articleData.short_description && <ShortDesc>{articleData.short_description}</ShortDesc>}
      </DescCard>
      <ImageBox width={[1, 1, 10 / 12]}>
        <Sticky topOffset={0}>
          <ShareModule>
            <Share backTheme="light" shareList={shareData.shareDesktop} />
          </ShareModule>
        </Sticky>
        { articleData.preview_image && (
          <ArticleImage imageData={articleData.preview_image} />
        )}
      </ImageBox>
      { articleData.long_description && (
        <ModuleBox width={[1, 1, 10 / 12]}>
          <ArticleBodyData bodyData={articleData.long_description} />
        </ModuleBox>
      )}
      <ModuleBox width={[1, 1, 10 / 12]}>
        <Ads
          bgColor={adsData.bgColor}
          adTitle={adsData.adTitle}
          adSlotConfig={adsData.adSlotConfig}
        />
      </ModuleBox>
      <ModuleBox width={[1, 1, 11 / 12]}>
        {<BulletTitle
          barcolor={recomendedData.barColor}
          backtheme={recomendedData.backTheme}
          titleContent={recomendedData.titleContent}
        />}
        {data.related_content && <FourItemCarousel sliderContent={data.related_content} />}
      </ModuleBox>
    </Root>
  );
};

ArticleLayout.propTypes = {
  data: PropTypes.oneOfType([PropTypes.object, PropTypes.array]).isRequired,
  shareData: PropTypes.oneOfType([PropTypes.object, PropTypes.array]).isRequired,
};

export default ArticleLayout;