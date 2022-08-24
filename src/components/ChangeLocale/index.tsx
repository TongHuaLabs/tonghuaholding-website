import React, { useState } from 'react';
import { Menu, Transition } from '@headlessui/react';
import classNames from 'classnames';
import { ChevronDownIcon } from '@heroicons/react/outline';

type ChangeLocaleProps = {
  className?: string;
};

type LocaleProps = 'EN' | 'TH';

const ChangeLocale: React.FC<ChangeLocaleProps> = ({ className }) => {
  const [selected, setSelected] = useState<LocaleProps>('TH');

  const changeLocale = () => {
    selected === 'EN' ? setSelected('TH') : setSelected('EN');
  };

  return (
    <Menu
      as="li"
      className={classNames('relative inline-block text-left', className)}
    >
      <Menu.Button className="flex items-center text-neutral-900">
        {selected}
        <ChevronDownIcon className="w-4 h-4 ml-2 text-neutral-900" />
      </Menu.Button>
      <Transition
        as={React.Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items
          className="absolute right-0 z-50 cursor-pointer mt-6 bg-white w-12 py-2 text-center text-neutral-900 hover:bg-primary-main hover:text-white"
          onClick={() => changeLocale()}
        >
          {selected === 'EN' ? 'TH' : 'EN'}
        </Menu.Items>
      </Transition>
    </Menu>
  );
};

export default ChangeLocale;
