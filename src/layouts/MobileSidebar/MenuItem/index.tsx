import React from 'react';
import { ChevronDownIcon } from '@heroicons/react/solid';
import { Disclosure } from '@headlessui/react';
import classNames from 'classnames';

type MenuListProps = {
  title: string;
  menu?: string[];
};

type MenuItemProps = {
  className?: string;
};

const menuList: MenuListProps[] = [
  {
    title: 'หน้าแรก',
  },
  {
    title: 'เกี่ยวกับบริษัท',
    menu: [
      'ข้อมูลบริษัท',
      'ประวัติบริษัท',
      'วิสัยทัศน์',
      'คณะกรรมการบริษัท',
      'CSR',
    ],
  },
  {
    title: 'ธุรกิจในเครือ',
    menu: [
      'Tong Hua Labs',
      'Tong Hua Media',
      'Tong Hua Asset Management',
      'Tong Hua Asset',
      'Tong Hua Capital',
    ],
  },
  {
    title: 'นักลงทุนสัมพันธ์',
    menu: [
      'ข้อมูลนักลงทุนสัมพันธ์',
      'ข้อมูลสำคัญทางการเงิน',
      'ข้อมูลผู้ถือหุ้น',
    ],
  },
  {
    title: 'ข่าวและกิจกรรม',
  },
  {
    title: 'ติดต่อเรา',
  },
];

const MenuItem: React.FC<MenuItemProps> = ({ className }) => {
  return (
    <div className={classNames('p-5', className)}>
      {menuList.map(({ title, menu }, key) => (
        <React.Fragment key={key}>
          <Disclosure>
            <Disclosure.Button className="w-full flex items-center justify-between py-2.5 px-3">
              {title}
              <ChevronDownIcon className="w-6 h-6 text-black" />
            </Disclosure.Button>
            {menu?.map((item) => (
              <Disclosure.Panel
                className="px-3 py-2 text-sm text-gray-500"
                key={item}
              >
                {item}
              </Disclosure.Panel>
            ))}
          </Disclosure>
          <hr className="h-0.5 border-0 bg-neutral-300" />
        </React.Fragment>
      ))}
    </div>
  );
};

export default MenuItem;
