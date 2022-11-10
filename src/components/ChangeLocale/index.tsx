import React, { useState } from 'react';
import { Transition, Popover } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/24/outline';
import classNames from 'classnames';
import { useI18next, Link } from 'gatsby-plugin-react-i18next';
import ThailandFlag from '@images/thailand-flag.png';
import USAFlag from '@images/usa-flag.png';

interface ChangeLocaleProps {
  className?: string;
}

const ChangeLocale: React.FC<ChangeLocaleProps> = ({ className }) => {
  const { language, languages, originalPath } = useI18next();
  const [isShowing, setIsShowing] = useState(false);

  return (
    <Popover
      className={classNames('relative text-left', className)}
      onClick={() => setIsShowing(true)}
    >
      <Popover.Button
        onMouseEnter={() => setIsShowing(true)}
        onMouseLeave={() => {
          setTimeout(() => setIsShowing(false));
        }}
        className={`flex font-medium items-center text-sm ${
          isShowing ? 'text-primary-main' : 'text-neutral-900'
        }`}
      >
        {language === 'en' ? (
          <img src={USAFlag} className="w-7 h-7" />
        ) : (
          <img src={ThailandFlag} className="w-7 h-7" />
        )}
        <ChevronDownIcon className="w-4 h-4 ml-2" />
      </Popover.Button>
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
          {languages.map((lang, key) => (
            <Link
              key={key}
              to={originalPath}
              language={lang}
              onMouseEnter={() => setIsShowing(true)}
              onMouseLeave={() => setIsShowing(false)}
              onMouseDown={() => setIsShowing(false)}
              onClick={(e) => {
                e.stopPropagation();
                setIsShowing(false);
              }}
              className="px-4 py-2.5 text-sm text-left text-neutral-900 hover:bg-primary-main hover:text-white"
            >
              {lang === 'en' ? (
                <img src={USAFlag} className="w-7 h-7" />
              ) : (
                <img src={ThailandFlag} className="w-7 h-7" />
              )}
            </Link>
          ))}
        </Popover.Panel>
      </Transition>
    </Popover>
  );
};

export default ChangeLocale;
