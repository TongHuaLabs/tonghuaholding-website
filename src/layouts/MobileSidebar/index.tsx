import React from 'react';
import classNames from 'classnames';
import { Transition } from '@headlessui/react';
import MenuItem from './MenuItem';
import Navbar from '../Navbar';

type MobileSidebarProps = {
  isShowing: boolean;
  className?: string;
  onClose?: () => void;
};

const MobileSidebar: React.FC<MobileSidebarProps> = ({
  className,
  isShowing,
  onClose,
}) => {
  return (
    <Transition
      show={isShowing}
      className={classNames(className)}
      unmount={false}
      as="aside"
    >
      <Transition.Child
        enter="transition ease-in-out duration-150 transform"
        enterFrom="-translate-x-full"
        enterTo="translate-x-0"
        leave="transition ease-in-out duration-150 transform"
        leaveFrom="translate-x-0"
        leaveTo="-translate-x-full"
        unmount={false}
        as="div"
        className="fixed inset-y-0 left-0 z-20 w-full bg-white lg:hidden"
      >
        <Navbar showClose={true} onCloseClick={onClose} />
        <MenuItem onClose={onClose} />
      </Transition.Child>
    </Transition>
  );
};

export default MobileSidebar;
