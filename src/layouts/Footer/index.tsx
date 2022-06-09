import React from 'react';
import Social from './Social';

type FooterProps = {};

const pages = [
  'หน้าแรก',
  'เกี่ยวกับบริษัท',
  'ธุรกิจในเครือ',
  'นักลงทุนสัมพันธ์',
  'ข่าวและกิจกรรม',
  'ติดต่อเรา',
  'กิจกรรมเพื่อสังคม',
];

const Footer: React.FC<FooterProps> = () => {
  return (
    <footer className="flex flex-col flex-wrap px-4 py-10 text-white md:justify-between md:flex-row lg:p-36 bg-primary-main">
      <div className="md:w-3/5 lg:w-3/5">
        <div className="w-32 p-4 text-black bg-white rounded-lg">THH LOGO</div>
        <p className="mt-12 font-medium">
          Address 111 / 111 ตลาดน้อย บางรัก กรุงเทพทหานคร 12345
        </p>
      </div>
      <ul className="flex flex-wrap justify-between mt-10 md:w-2/5 lg:w-1/3 md:mt-0">
        {pages.map((page, key) => (
          <li key={key} className="w-1/2 pb-6">
            {page}
          </li>
        ))}
      </ul>
      <Social className="hidden space-y-3 lg:block" />
      <div className="flex flex-col justify-between w-full mt-10 md:items-center md:flex-row lg:mt-0 lg:hidden">
        <Social className="space-x-3" />
        <div className="flex flex-col mt-10 space-y-1 text-left md:text-right md:mt-0">
          <p>สงวนลิขสิทธิ์ พ.ศ. 2565 บริษัท ตงฮั้วโฮลดิ้ง จำกัด (มหาชน)</p>
          <p>Cookie Policy</p>
        </div>
      </div>
      <hr className="hidden mt-12 lg:block h-0.5 w-full border-0 bg-white" />
      <div className="items-center justify-between hidden w-full lg:flex mt-7">
        <p>สงวนลิขสิทธิ์ พ.ศ. 2565 บริษัท ตงฮั้วโฮลดิ้ง จำกัด (มหาชน)</p>
        <p>Cookie Policy</p>
      </div>
    </footer>
  );
};

export default Footer;
