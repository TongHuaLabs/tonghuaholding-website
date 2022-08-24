import React from 'react';
import classNames from 'classnames';
import { navigate } from 'gatsby';
import { ChevronDownIcon } from '@heroicons/react/solid';
import { Disclosure } from '@headlessui/react';
import { route } from '@/layouts/navigation/route';

type MenuItemProps = {
  className?: string;
  onClose?: () => void;
};

const MenuItem: React.FC<MenuItemProps> = ({ className, onClose }) => {
  const handleNavigate = (href?: string) => {
    if (href) {
      navigate(href);
      onClose && onClose();
    }
  };

  return (
    <div className={classNames('p-5', className)}>
      {route.map(({ title, href, menu }, key) => (
        <React.Fragment key={key}>
          <Disclosure>
            {({ open }) => (
              <>
                <Disclosure.Button
                  className={`w-full flex items-center justify-between py-2.5 px-3 ${
                    open ? 'text-primary-main font-medium' : 'text-neutral-900'
                  }`}
                  onClickCapture={() => handleNavigate(href)}
                >
                  {title}
                  {menu && <ChevronDownIcon className="w-6 h-6 text-black" />}
                </Disclosure.Button>
                {menu?.map(({ title, href }, key) => (
                  <Disclosure.Panel
                    className="px-3 py-2 text-sm text-gray-500"
                    key={key}
                    onClickCapture={() => handleNavigate(href)}
                  >
                    {title}
                  </Disclosure.Panel>
                ))}
              </>
            )}
          </Disclosure>
          <hr className="h-px border-0 bg-neutral-300" />
        </React.Fragment>
      ))}
    </div>
  );
};

export default MenuItem;
