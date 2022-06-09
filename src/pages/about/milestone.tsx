import React from 'react';

type MilestonePageProps = {};

const MilestonePage: React.FC<MilestonePageProps> = () => {
  return (
    <>
      <section className="flex items-center px-4 lg:px-36 oblique-lined bg-primary-main bg-opacity-20 h-72">
        <h1 className="text-4xl font-medium">Milestones</h1>
      </section>
    </>
  );
};

export default MilestonePage;
