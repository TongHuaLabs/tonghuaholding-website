import ObliqueLineSection from '@/components/sections/ObliqueLineSection';
import { withPrefix } from 'gatsby';
import React from 'react';

const OrganizationChart: React.FC<{}> = () => {
  return (
    <>
      <ObliqueLineSection title="โครงสร้างองค์กร" />
      <section className="px-4 pt-10 pb-20 lg:pb-28 md:px-6 lg:px-16 lg:py-20 max-w-7xl mx-auto space-y-10">
        <h2 className="text-neutral-900 font-bold">ณ เดือนกันยายน 2565</h2>
        <img
          src={withPrefix('/images/organization-chart.png')}
          className="w-full"
        />
      </section>
    </>
  );
};

export default OrganizationChart;
