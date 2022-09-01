import React from 'react';
import classNames from 'classnames';
import { Link } from 'gatsby';
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/outline';
import { Disclosure } from '@headlessui/react';
import { route } from '@/layouts/navigation/route';

type MenuItemProps = {
  className?: string;
  onClose?: () => void;
};

const MenuItem: React.FC<MenuItemProps> = ({ className, onClose }) => {
  return (
    <div className={classNames('p-4 space-y-4', className)}>
      {route.map(({ title, href, menu }, key) => {
        const hasChild = menu && menu.length > 0;
        return (
          <Disclosure key={key}>
            {({ open }) => (
              <>
                {hasChild ? (
                  <Disclosure.Button className="w-full flex items-center justify-between py-2.5 px-3 border-b border-neutral-200 text-neutral-900 font-medium">
                    {title}
                    {open ? (
                      <ChevronUpIcon className="w-4 h-4 text-neutral-900" />
                    ) : (
                      <ChevronDownIcon className="w-4 h-4 text-neutral-900" />
                    )}
                  </Disclosure.Button>
                ) : (
                  <Link
                    to={href || ''}
                    className={`w-full flex items-center justify-between py-2.5 px-3 border-b border-neutral-200 font-medium ${
                      open ? 'text-primary-main' : 'text-neutral-900'
                    }`}
                    activeClassName="navbar-active"
                    onClick={onClose}
                  >
                    {title}
                  </Link>
                )}
                {menu?.map(({ title, href }, key) => (
                  <Disclosure.Panel className="px-3 py-2 ml-4" key={key}>
                    <Link
                      to={href}
                      className="text-neutral-500 font-medium"
                      activeClassName="navbar-active"
                      onClick={onClose}
                    >
                      {title}
                    </Link>
                  </Disclosure.Panel>
                ))}
              </>
            )}
          </Disclosure>
        );
      })}
    </div>
  );
};

export default MenuItem;
