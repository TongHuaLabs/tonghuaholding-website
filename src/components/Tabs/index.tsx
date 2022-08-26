import React from 'react';
import { Tab } from '@headlessui/react';

type TabsProps = {
  tabs: {
    tab: React.ReactNode;
  }[];
  components: {
    child: React.ReactNode;
  }[];
  className?: string;
};

const Tabs: React.FC<TabsProps> = ({ tabs, components, className }) => {
  return (
    <div className={className}>
      <Tab.Group>
        <Tab.List className="flex flex-wrap justify-between items-center overflow-auto">
          {tabs.map(({ tab }, key) => (
            <Tab as="div" key={key}>
              {tab}
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
