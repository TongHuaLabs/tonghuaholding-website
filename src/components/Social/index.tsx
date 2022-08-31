import React from 'react';
import FacebookSVG from '@/icons/facebook.inline.svg';
import InstagramSVG from '@/icons/instagram.inline.svg';
import LinkedinSVG from '@/icons/linkedin.inline.svg';
import classNames from 'classnames';

type SocialProps = {
  className?: string;
  backgroundClassName?: string;
};

const socials = [
  {
    icon: <FacebookSVG className="w-5 h-5" />,
    href: 'https://www.facebook.com/TongHuaLabs/',
  },
  {
    icon: <InstagramSVG className="w-5 h-5" />,
    href: 'https://www.instagram.com/tonghualabs/',
  },
  {
    icon: <LinkedinSVG className="w-5 h-5" />,
    href: 'https://www.linkedin.com/company/tonghuaholding',
  },
];

const Social: React.FC<SocialProps> = ({ className, backgroundClassName }) => {
  return (
    <div className={classNames('flex items-center', className)}>
      {socials.map(({ icon, href }, key) => (
        <a
          href={href}
          target="__blank"
          className={classNames(
            'h-10 w-10 rounded-full  flex justify-center items-center',
            backgroundClassName,
          )}
          key={key}
        >
          {icon}
        </a>
      ))}
    </div>
  );
};

export default Social;
