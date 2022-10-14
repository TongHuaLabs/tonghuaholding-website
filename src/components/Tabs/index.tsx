import React, { Fragment } from 'react';
import { Tab } from '@headlessui/react';
import classNames from 'classnames';

type TabsProps = {
  tabs: {
    title?: string;
  }[];
  components: {
    child: React.ReactNode;
  }[];
  className?: string;
  tabClassName?: string;
};

const Tabs: React.FC<TabsProps> = ({
  tabs,
  components,
  className,
  tabClassName,
}) => {
  return (
    <div className={className}>
      <Tab.Group>
        <Tab.List className="flex flex-wrap justify-between items-center overflow-auto">
          {tabs.map(({ title }, key) => (
            <Tab as={Fragment} key={key}>
              {({ selected }) => (
                <button
                  className={classNames(
                    `px-2 py-2 rounded-lg font-bold hover:bg-primary-main hover:text-neutral-50 ${
                      selected
                        ? 'bg-primary-main font-bold text-neutral-50'
                        : 'text-neutral-900'
                    }`,
                    tabClassName,
                  )}
                >
                  {title}
                </button>
              )}
            </Tab>
          ))}
        </Tab.List>
        <Tab.Panels>
          {components.map(({ child }, key) => (
            <Tab.Panel key={key}>{child}</Tab.Panel>
          ))}
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
};

export default Tabs;
