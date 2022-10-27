import PrimarySection from '@/components/sections/PrimarySection';
import MainLayout from '@/layouts/MainLayout';
import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';

const OrganizationChart: React.FC<{}> = () => {
  return (
    <MainLayout>
      <PrimarySection title="โครงสร้างองค์กร" />
      <section className="px-4 pt-10 pb-20 lg:pb-28 md:px-6 lg:px-16 lg:py-20 max-w-7xl mx-auto space-y-10">
        <h2 className="text-neutral-900 font-bold">ณ เดือนกันยายน 2565</h2>
        <StaticImage
          src="../../../images/organization-chart.png"
          alt="tonghuaholding organization chart"
          className="w-full"
        />
      </section>
    </MainLayout>
  );
};

export default OrganizationChart;
