import React from 'react';
import { useActiveMenu } from '@/hooks/useActiveMenu';
import { Disclosure, Transition } from '@headlessui/react';
import { Link } from 'gatsby';
import { ChevronDownIcon } from '@heroicons/react/outline';
import classNames from 'classnames';

type DisclosureNavigationProps = {
  title: string;
  href?: string;
  menu?: {
    title: string;
    href: string;
  }[];
  className?: string;
};

const DisclosureNavigation: React.FC<DisclosureNavigationProps> = ({
  title,
  href,
  menu,
  className,
}) => {
  const hasChild = menu && menu.length > 0;
  const active = useActiveMenu(title);

  return (
    <>
      {hasChild ? (
        <div className={classNames(`flex flex-col`, className)}>
          <Disclosure>
            {({ open, close }) => (
              <>
                <Disclosure.Button
                  className={`text-left flex items-center hover:text-primary-main
                    ${open ? 'pb-2 text-primary-main' : 'pb-6'}
                    ${active && 'text-primary-main'}
                    `}
                >
                  {title}
                  <ChevronDownIcon className="w-4 h-4 ml-2" />
                </Disclosure.Button>
                <Transition
                  enter="transition ease duration-300 transform"
                  enterFrom="opacity-0"
                  enterTo="opacity-100"
                  leave="transition ease duration-50 transform"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                >
                  <Disclosure.Panel className="text-gray-500 pb-6 ml-2 space-y-2">
                    <ul className="list-disc">
                      {menu.map(({ title, href }, key) => (
                        <li className="ml-3" key={key}>
                          <Link
                            className="text-sm hover:text-primary-main"
                            activeClassName="navbar-active"
                            onClick={() => close()}
                            to={href}
                          >
                            {title}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </Disclosure.Panel>
                </Transition>
              </>
            )}
          </Disclosure>
        </div>
      ) : (
        <Link
          to={href || ''}
          className="w-1/2 pb-6 hover:text-primary-main"
          activeClassName="navbar-active"
        >
          {title}
        </Link>
      )}
    </>
  );
};

export default DisclosureNavigation;
