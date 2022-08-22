import classNames from 'classnames';
import React from 'react';
import {
  FacebookShareButton,
  FacebookIcon,
  TwitterShareButton,
  TwitterIcon,
  LineShareButton,
  LineIcon,
  EmailShareButton,
  EmailIcon,
  TelegramShareButton,
  TelegramIcon,
} from 'react-share';

type ShareButtonProps = {
  url: string;
  className?: string;
};

const size = 32;

const ShareButton: React.FC<ShareButtonProps> = ({ url, className }) => {
  return (
    <div className={classNames('flex space-x-3', className)}>
      <FacebookShareButton url={url}>
        <FacebookIcon size={size} round={true} />
      </FacebookShareButton>
      <TwitterShareButton url={url}>
        <TwitterIcon size={size} round={true} />
      </TwitterShareButton>
      <LineShareButton url={url}>
        <LineIcon size={size} round={true} />
      </LineShareButton>
      <TelegramShareButton url={url}>
        <TelegramIcon size={size} round={true} />
      </TelegramShareButton>
      <EmailShareButton url={url}>
        <EmailIcon size={size} round={true} />
      </EmailShareButton>
    </div>
  );
};

export default ShareButton;
