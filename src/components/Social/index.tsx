import React from 'react';
import FacebookSVG from '@/icons/facebook.inline.svg';
import InstagramSVG from '@/icons/instagram.inline.svg';
import LinkedinSVG from '@/icons/linkedin.inline.svg';
import classNames from 'classnames';

type SocialProps = {
  className?: string;
};

const socials = [
  { icon: <FacebookSVG className="w-4 h-4 text-white" />, href: '' },
  { icon: <InstagramSVG className="w-4 h-4 text-white" />, href: '' },
  { icon: <LinkedinSVG className="w-4 h-4 text-white" />, href: '' },
];

const Social: React.FC<SocialProps> = ({ className }) => {
  return (
    <div className={classNames('flex items-center', className)}>
      {socials.map(({ icon, href }, key) => (
        <a
          href={href}
          target="__blank"
          className="h-8 w-8 rounded-full bg-primary-main flex justify-center items-center"
          key={key}
        >
          {icon}
        </a>
      ))}
    </div>
  );
};

export default Social;
