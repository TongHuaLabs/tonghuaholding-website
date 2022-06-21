import React from 'react';
import { Link } from 'gatsby';
import { MenuIcon, XIcon } from '@heroicons/react/outline';
import classNames from 'classnames';
import DropdownMenu from './DropdownMenu';
import { changeLocale } from 'gatsby-plugin-intl';

type NavbarProps = {
  showClose: boolean;
  className?: string;
  onMenuClick?: () => void;
  onCloseClick?: () => void;
};

export const menuList = [
  { title: 'หน้าแรก', href: '/' },
  {
    title: 'เกี่ยวกับบริษัท',
    menu: [
      { title: 'Company Info', href: '/about' },
      { title: 'Milestones', href: '/about/milestone' },
      { title: 'Vision', href: '/about/vision' },
      { title: 'BOD', href: '/about/bod' },
      { title: 'CSR', href: '/about/csr' },
    ],
  },
  {
    title: 'ธุรกิจในเครือ',
    menu: [
      { title: 'THL', href: '/business/thl' },
      { title: 'THML', href: '/business/thml' },
      { title: 'THAM', href: '/business/tham' },
      { title: 'THA', href: '/business/tha' },
      { title: 'THC', href: '/business/thc' },
    ],
  },
  {
    title: 'นักลงทุนสัมพันธ์',
    href: '/investor',
  },
  {
    title: 'ข่าวและกิจกรรม',
    href: '/newsroom',
  },
  {
    title: 'สมัครงาน',
    href: '/career',
  },
  {
    title: 'ติดต่อเรา',
    href: '/contact',
  },
];

const Navbar: React.FC<NavbarProps> = ({
  showClose,
  className,
  onMenuClick,
  onCloseClick,
}) => {
  return (
    <nav
      className={classNames(
        'flex items-center justify-between px-4 py-3.5 h-16',
        className,
      )}
    >
      <Link to="/">THH LOGO</Link>
      <ul className="flex items-center h-full space-x-4">
        {menuList.map(({ title, href, menu }, key) => (
          <DropdownMenu
            key={key}
            title={title}
            href={href}
            menu={menu}
            className="hidden lg:block"
          />
        ))}
        <li className="hidden w-0.5 lg:block h-full bg-neutral-200" />
        <li
          className="text-sm cursor-pointer text-neutral-700"
          onClick={() => changeLocale('en')}
        >
          EN
        </li>
        <li className="text-sm text-neutral-700">|</li>
        <li
          className="text-sm cursor-pointer text-neutral-700"
          onClick={() => changeLocale('th')}
        >
          TH
        </li>
        <li className="w-0.5 lg:hidden h-full bg-neutral-200" />
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
