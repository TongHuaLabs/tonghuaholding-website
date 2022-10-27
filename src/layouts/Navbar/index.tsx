import React from 'react';
import { Link } from 'gatsby';
import classNames from 'classnames';
import THHLogo from '@images/tonghua-holding.png';
import PopoverNavigation from '@/layouts/navigation/PopoverNavigation';
import { useRoute } from '@/hooks/useRoute';
import MenuIcon from '@/icons/hamburger-menu.inline.svg';
import CloseIcon from '@/icons/close.inline.svg';
import ChangeLocale from '@/components/ChangeLocale';

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
  const route = useRoute();
  return (
    <nav
      className={classNames(
        `flex items-center justify-between px-4 h-16 bg-white lg:bg-white ${
          !showClose && 'shadow-md'
        }`,
        className,
      )}
    >
      <Link to="/">
        <img src={THHLogo} className="w-32" />
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
        <li className="block lg:hidden">
          {showClose ? (
            <CloseIcon
              onClick={onCloseClick}
              className="cursor-pointer w-9 h-9 text-neutral-900"
            />
          ) : (
            <MenuIcon
              onClick={onMenuClick}
              className="cursor-pointer w-9 h-9 text-neutral-900"
            />
          )}
        </li>
        <ChangeLocale />
      </ul>
    </nav>
  );
};

export default Navbar;
