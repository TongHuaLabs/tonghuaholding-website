import React from 'react';
import THHLogoSvg from '@images/tonghua-holding.inline.svg';
import Social from '@/components/Social';
import DisclosureNavigation from '@/layouts/navigation/DisclosureNavigation';
import { route } from '@/layouts/navigation/route';

type FooterProps = {};

const Footer: React.FC<FooterProps> = () => {
  return (
    <footer className="flex flex-col flex-wrap px-4 py-10 md:px-6 text-neutral-900 md:justify-between md:flex-row bg-neutral-50">
      <div className="md:w-3/5 lg:w-3/5 space-y-6">
        <THHLogoSvg className="w-40 h-auto" />
        <p className="text-sm font-medium text-neutral-900">
          877-881 เจริญกรุง ตลาดน้อย สัมพันธวงศ์ กรุงเทพฯ 10100
        </p>
        <p className="text-sm font-medium text-neutral-900 whitespace-pre">
          {`customerservice@tonghuagroup.com\n+66 2236-9171-6`}
        </p>
      </div>
      <div className="flex flex-wrap justify-between mt-10 md:w-2/5 lg:w-1/3 md:mt-0">
        {route.map(({ title, href, menu }, key) => (
          <DisclosureNavigation
            className="w-1/2"
            title={title}
            href={href}
            menu={menu}
            key={key}
          />
        ))}
      </div>
      <div className="flex flex-col justify-between w-full mt-1 md:items-center md:flex-row lg:mt-0 lg:hidden">
        <Social
          className="space-x-3 text-white"
          backgroundClassName="bg-primary-main"
        />
        <div className="flex flex-col mt-7 space-y-4 text-left md:text-right md:mt-0">
          <p className="text-sm text-neutral-900">
            สงวนลิขสิทธิ์ พ.ศ. 2565 บริษัท ตงฮั้วโฮลดิ้ง จำกัด (มหาชน)
          </p>
          <p className="text-sm text-neutral-900">Cookie Policy</p>
        </div>
      </div>
      <hr className="hidden mt-7 lg:block h-0.5 w-full border-0 bg-neutral-400" />
      <div className="items-center justify-between hidden w-full lg:flex mt-7">
        <p className="text-sm text-neutral-900">
          สงวนลิขสิทธิ์ พ.ศ. 2565 บริษัท ตงฮั้วโฮลดิ้ง จำกัด (มหาชน)
        </p>
        <p className="text-sm text-neutral-900">Cookie Policy</p>
      </div>
    </footer>
  );
};

export default Footer;
