import React, { useState } from 'react';
import MemberCard from '../../components/cards/MemberCard';
import ListBox from '../../components/ListBox';

type BODPageProps = {};

const people = [
  { value: 1, title: 'Wade Cooper' },
  { value: 2, title: 'Arlene Mccoy' },
  { value: 3, title: 'Devon Webb' },
];

const BODPage: React.FC<BODPageProps> = () => {
  const [selected, setSelected] = useState(people[0]);
  return (
    <>
      <section className="flex items-center px-4 lg:px-36 oblique-lined bg-primary-main bg-opacity-20 h-72">
        <h1 className="text-4xl font-medium">โครงสร้างองค์กร</h1>
      </section>
      <section className="w-full px-2 py-10 lg:p-36">
        <ListBox
          className="px-2"
          items={people}
          selected={selected}
          onSelect={(selected) => setSelected(people[selected - 1])}
        />
        <div className="flex flex-wrap mt-10">
          {[...Array(5)].map((_, key) => (
            <MemberCard
              key={key}
              name="Lorem"
              className="w-1/2 p-2 md:p-4 md:w-1/3 lg:w-1/4"
              job="Esse consequat nulla laborum id reprehenderit ut qui dolor"
              profileImage="https://picsum.photos/300/300"
            />
          ))}
        </div>
      </section>
    </>
  );
};

export default BODPage;
