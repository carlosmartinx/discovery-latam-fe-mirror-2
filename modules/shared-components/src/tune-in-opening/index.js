import React from 'react';
import PropTypes from 'prop-types';
import {
  Root,
  Headline,
  TuneBG,
  TuneContent,
  ChannelLogo,
  LabelContainer,
  DurationLabel,
  DurationNumber,
  ProgramIcon,
  ScheduleLink,
  Hashtag,
  SocialContainer,
  ShareBox,
  ButtonContainer,
} from './styled';
import VideoBackground from './video-background';
import VideoButton from '../video-button';
import Share from '../share';

const TuneInOpening = ({
  background,
  videoURL,
  imageSRC,
  channelLogo,
  label,
  duration,
  headline,
  headline2,
  schedule,
  scheduleLink,
  hashtag,
  buttonText,
  channelName,
  videoLink,
  shareList,
}) => (
  <Root>
    <TuneBG>
      {background === 'video' ? (
        <VideoBackground videoURL={videoURL} />
      ) : (
        <img src={imageSRC} alt={headline} />
      )}
    </TuneBG>
    <TuneContent pb={['1', '1', '2', '2']} pl={['2', '2', '3', '4']}>
      <ChannelLogo src={channelLogo} alt="Logo" />
      <LabelContainer my={2}>
        <DurationLabel p={1}>
          {label}
        </DurationLabel>
        <DurationNumber p={1}>
          { duration }
        </DurationNumber>
      </LabelContainer>
      <Headline>
        {headline}
        <br />
        {headline2}
      </Headline>
      <ScheduleLink pl={1} my={2}>
        <a href={scheduleLink}>
          <ProgramIcon />
          {schedule}
        </a>
      </ScheduleLink>
      <ButtonContainer>
        <VideoButton href={videoLink} className={channelName}>{buttonText}</VideoButton>
      </ButtonContainer>
      <SocialContainer>
        <Hashtag fontSize={['3', '4', '4', '5']}>
          {hashtag}
        </Hashtag>
        <ShareBox alignItems="center" justifyContent="flex-end">
          <Share shareList={shareList} />
        </ShareBox>
      </SocialContainer>
    </TuneContent>
  </Root>
);

TuneInOpening.propTypes = {
  videoURL: PropTypes.string,
  channelLogo: PropTypes.string.isRequired,
  imageSRC: PropTypes.string,
  label: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
  duration: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
  headline: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
  headline2: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
  schedule: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
  scheduleLink: PropTypes.string.isRequired,
  background: PropTypes.string.isRequired,
  buttonText: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
  channelName: PropTypes.string.isRequired,
  videoLink: PropTypes.string,
  hashtag: PropTypes.string.isRequired,
  shareList: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    icon: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
    background: PropTypes.func.isRequired,
    title: PropTypes.string.isRequired,
  })).isRequired,
};

TuneInOpening.defaultProps = {
  imageSRC: '',
  videoURL: '',
  videoLink: '',
  label: 'Label',
  duration: '30:30',
  headline: 'Headline',
  headline2: 'Second line',
  schedule: 'Find out more',
  buttonText: 'View more',
};

export default TuneInOpening;
