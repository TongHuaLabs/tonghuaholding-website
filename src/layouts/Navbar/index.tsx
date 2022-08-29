import React from 'react';
import { Link } from 'gatsby';
import { MenuIcon, XIcon } from '@heroicons/react/outline';
import classNames from 'classnames';
import THHLogoSvg from '@images/tonghua-holding.inline.svg';
import PopoverNavigation from '@/layouts/navigation/PopoverNavigation';
// import ChangeLocale from '@/components/ChangeLocale';
import { route } from '@/layouts/navigation/route';

type NavbarProps = {
  showClose: boolean;
  className?: string;
  onMenuClick?: () => void;
  onCloseClick?: () => void;
};

const Navbar: React.FC<NavbarProps> = ({
  showClose,
  className,
  onMenuClick,
  onCloseClick,
}) => {
  return (
    <nav
      className={classNames(
        'flex items-center justify-between px-4 py-2 h-16 bg-neutral-50 lg:bg-white shadow-none lg:shadow-md',
        className,
      )}
    >
      <Link to="/">
        <THHLogoSvg className="w-32 h-auto" />
      </Link>
      <ul className="flex items-center h-full space-x-6">
        {route.map(({ title, href, menu }, key) => (
          <PopoverNavigation
            key={key}
            title={title}
            href={href}
            menu={menu}
            className="hidden lg:block"
          />
        ))}
        {/* <li className="hidden w-px lg:block h-8 bg-neutral-200" /> */}
        {/* <ChangeLocale /> */}
        {/* <li className="w-px lg:hidden h-8 bg-neutral-200" /> */}
        <li className="block lg:hidden">
          {showClose ? (
            <XIcon
              onClick={onCloseClick}
              className="cursor-pointer w-9 h-9 text-neutral-700"
            />
          ) : (
            <MenuIcon
              onClick={onMenuClick}
              className="cursor-pointer w-9 h-9 text-neutral-700"
            />
          )}
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
