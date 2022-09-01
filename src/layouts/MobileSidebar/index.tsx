import React from 'react';
import classNames from 'classnames';
import { Transition } from '@headlessui/react';
import MenuItem from './MenuItem';
import Navbar from '@/layouts/Navbar';

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
      className={classNames('', className)}
      unmount={false}
      as="aside"
    >
      <Transition.Child
        unmount={false}
        as="div"
        enter="transition-opacity duration-100"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="transition-opacity duration-100"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
        className="fixed inset-y-0 left-0 z-50 w-full bg-white lg:hidden"
      >
        <Navbar showClose={true} onCloseClick={onClose} />
        <MenuItem onClose={onClose} />
      </Transition.Child>
    </Transition>
  );
};

export default MobileSidebar;
