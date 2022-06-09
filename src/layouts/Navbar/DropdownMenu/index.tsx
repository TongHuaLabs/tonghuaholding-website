import React from 'react';
import { Link, navigate } from 'gatsby';
import { Menu, Transition } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/outline';
import classNames from 'classnames';

type DropdownMenuProps = {
  title: string;
  href?: string;
  menu?: {
    title: string;
    href: string;
  }[];
  className?: string;
};

const DropdownMenu: React.FC<DropdownMenuProps> = ({
  title,
  href,
  menu,
  className,
}) => {
  return (
    <Menu
      as="li"
      className={classNames('relative inline-block text-left', className)}
    >
      <Menu.Button
        className="flex items-center text-sm text-neutral-700"
        onClickCapture={() => href && navigate(href)}
      >
        {title}
        {menu && menu.length > 0 && (
          <ChevronDownIcon className="w-4 h-4 ml-2 text-neutral-700" />
        )}
      </Menu.Button>
      {menu && menu.length > 0 && (
        <Transition
          as={React.Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute right-0 z-50 flex flex-col mt-6 bg-white w-36">
            {menu.map(({ title, href }, key) => (
              <Menu.Item key={key}>
                <Link
                  to={href}
                  className="px-4 py-2 text-sm text-left text-black hover:bg-primary-main hover:text-white"
                >
                  {title}
                </Link>
              </Menu.Item>
            ))}
          </Menu.Items>
        </Transition>
      )}
    </Menu>
  );
};

export default DropdownMenu;
