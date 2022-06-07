import React from 'react';
import { MenuIcon, XIcon } from '@heroicons/react/outline';
import classNames from 'classnames';

type NavbarProps = {
  showClose: boolean;
  className?: string;
  onMenuClick?: () => void;
  onCloseClick?: () => void;
};

const menuList = [
  'หน้าแรก',
  'เกี่ยวกับบริษัท',
  'ธุรกิจในเครือ',
  'นักลงทุนสัมพันธ์',
  'ข่าวและกิจกรรม',
  'ติดต่อเรา',
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
      <div>THH LOGO</div>
      <ul className="flex items-center h-full space-x-4">
        {menuList.map((menu, key) => (
          <li key={key} className="hidden text-sm lg:block text-neutral-700">
            {menu}
          </li>
        ))}
        <li className="hidden w-0.5 lg:block h-full bg-neutral-200" />
        <li className="text-sm text-neutral-700">EN</li>
        <li className="text-sm text-neutral-700">|</li>
        <li className="text-sm text-neutral-700">TH</li>
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
