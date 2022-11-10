import React, { useState } from 'react';
import { useActiveMenu } from '@/hooks/useActiveMenu';
import { Link } from 'gatsby-plugin-react-i18next';
import { Transition, Popover } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/24/outline';
import classNames from 'classnames';
import type { RouteType } from '@/hooks/useRoute';

interface PopoverNavigationProps extends RouteType {
  className?: string;
}

const PopoverNavigation: React.FC<PopoverNavigationProps> = ({
  title,
  href,
  menu,
  className,
}) => {
  const active = useActiveMenu(title);
  const [isShowing, setIsShowing] = useState(false);
  const hasChild = menu && menu.length > 0;

  return (
    <Popover
      className={classNames('relative text-left', className)}
      onClick={() => setIsShowing(true)}
    >
      {({ open }) => (
        <>
          {hasChild ? (
            <Popover.Button
              onMouseEnter={() => setIsShowing(true)}
              onMouseLeave={() => {
                setTimeout(() => setIsShowing(false));
              }}
              className={`flex font-medium items-center text-sm ${
                isShowing || active ? 'text-primary-main' : 'text-neutral-900'
              }`}
            >
              {title}
              <ChevronDownIcon className="w-4 h-4 ml-2" />
            </Popover.Button>
          ) : (
            <Link
              to={href || ''}
              className={`flex items-center text-sm font-medium hover:text-primary-main ${
                open ? 'text-primary-main' : 'text-neutral-900'
              }
              ${active && 'text-primary-main'}
          `}
              activeClassName="navbar-active"
            >
              {title}
            </Link>
          )}
          {hasChild && (
            <Transition
              show={isShowing}
              as={React.Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <Popover.Panel className="absolute py-2 right-0 z-50 flex rounded-lg flex-col mt-3 border border-neutral-100 bg-white w-max overflow-hidden shadow-lg">
                {menu.map(({ title, href, indent }, key) => (
                  <Link
                    key={key}
                    to={href}
                    onMouseEnter={() => setIsShowing(true)}
                    onMouseLeave={() => setIsShowing(false)}
                    onMouseDown={() => setIsShowing(false)}
                    onClick={(e) => {
                      e.stopPropagation();
                      setIsShowing(false);
                    }}
                    className={`px-4 py-2.5 text-sm text-left text-neutral-900 hover:bg-primary-main hover:text-white ${
                      indent && 'list-disc pl-12 pr-8'
                    }`}
                    activeClassName="navbar-active-popover"
                  >
                    {!indent ? title : <li>{title}</li>}
                  </Link>
                ))}
              </Popover.Panel>
            </Transition>
          )}
        </>
      )}
    </Popover>
  );
};

export default PopoverNavigation;
