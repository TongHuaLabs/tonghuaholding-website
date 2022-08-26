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
  { icon: <FacebookSVG className="w-4 h-4" />, href: '' },
  { icon: <InstagramSVG className="w-4 h-4" />, href: '' },
  { icon: <LinkedinSVG className="w-4 h-4" />, href: '' },
];

const Social: React.FC<SocialProps> = ({ className, backgroundClassName }) => {
  return (
    <div className={classNames('flex items-center', className)}>
      {socials.map(({ icon, href }, key) => (
        <a
          href={href}
          target="__blank"
          className={classNames(
            'h-8 w-8 rounded-full  flex justify-center items-center',
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
