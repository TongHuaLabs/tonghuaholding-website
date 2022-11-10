import React from 'react';
import classNames from 'classnames';
import { Link } from 'gatsby-plugin-react-i18next';
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/24/outline';
import { Disclosure } from '@headlessui/react';
import { RouteType } from '@/hooks/useRoute';
import { useActiveMenu } from '@/hooks/useActiveMenu';

interface MenuItemProps extends RouteType {
  className?: string;
  onClose?: () => void;
}

const MenuItem: React.FC<MenuItemProps> = ({
  title,
  href,
  menu,
  className,
}) => {
  const active = useActiveMenu(title);
  const hasChild = menu && menu.length > 0;
  return (
    <div className={classNames('p-4 space-y-4', className)}>
      <Disclosure>
        {({ open }) => (
          <>
            {hasChild ? (
              <Disclosure.Button
                className={`w-full flex items-center justify-between py-2.5 px-3 border-b border-neutral-200 font-medium ${
                  active ? 'text-primary-main' : 'text-neutral-900'
                }`}
              >
                {title}
                {open ? (
                  <ChevronUpIcon
                    className={`w-4 h-4 ${
                      active ? 'text-primary-main' : 'text-neutral-900'
                    }`}
                  />
                ) : (
                  <ChevronDownIcon
                    className={`w-4 h-4 ${
                      active ? 'text-primary-main' : 'text-neutral-900'
                    }`}
                  />
                )}
              </Disclosure.Button>
            ) : (
              <Link
                to={href || ''}
                className={`w-full flex items-center justify-between py-2.5 px-3 border-b border-neutral-200 font-medium ${
                  open ? 'text-primary-main' : 'text-neutral-900'
                } ${active && 'text-primary-main'}`}
                activeClassName="navbar-active"
              >
                {title}
              </Link>
            )}
            {menu?.map(({ title, href, indent }, key) => (
              <Disclosure.Panel
                className={`px-3 py-2 ml-4 ${indent && 'list-disc pl-8'}`}
                key={key}
              >
                <Link
                  to={href}
                  className={`text-neutral-500 font-medium`}
                  activeClassName="navbar-active"
                >
                  {!indent ? title : <li>{title}</li>}
                </Link>
              </Disclosure.Panel>
            ))}
          </>
        )}
      </Disclosure>
    </div>
  );
};

export default MenuItem;
