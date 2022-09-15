import React from 'react';
import THHLogo from '@images/tonghua-logo-white.png';
import Social from '@/components/Social';
import DisclosureNavigation from '@/layouts/navigation/DisclosureNavigation';
import { route } from '@/layouts/navigation/route';

type FooterProps = {};

const Footer: React.FC<FooterProps> = () => {
  return (
    <footer className="bg-primary-main">
      <div className="flex flex-col flex-wrap px-4 py-16 md:px-6 md:justify-between md:flex-row max-w-7xl mx-auto">
        <div className="w-full md:w-2/5 xl:w-2/4 md:pr-5 space-y-6">
          <img src={THHLogo} className="w-40" />
          <p className="text-sm font-medium text-neutral-50 md:whitespace-pre-line">
            {`877-881 เจริญกรุง ตลาดน้อย สัมพันธวงศ์\nกรุงเทพมหานคร 10100`}
          </p>
          <p className="text-sm font-medium text-neutral-50 whitespace-pre-line break-words">
            {`contactus@tonghuaholding.com\n02-236-9171 -4 | Fax 02-238-9286`}
          </p>
        </div>
        <div className="flex flex-wrap justify-between mt-6 md:w-1/2 md:pl-5 xl:w-2/5 md:mt-0">
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
        <Social
          className="hidden space-y-3 lg:block"
          backgroundClassName="bg-white w-8 h-8"
          iconClassName="w-4 h-4 text-primary-main"
        />
        <div className="flex flex-col justify-between w-full mt-2 md:mt-6 md:items-center md:flex-row lg:mt-0 lg:hidden">
          <Social
            className="space-x-4"
            backgroundClassName="bg-white w-8 h-8"
            iconClassName="w-4 h-4 text-primary-main"
          />
          <div className="flex flex-col mt-6 space-y-4 text-left md:text-right md:mt-0">
            <p className="text-sm text-neutral-50">
              © สงวนลิขสิทธ์ พ.ศ. 2565 บริษัท ตงฮั้ว โฮลดิ้ง จำกัด (มหาชน)
            </p>
            <p className="text-sm font-medium text-neutral-50">Cookie Policy</p>
          </div>
        </div>
        <hr className="hidden mt-7 lg:block h-px w-full border-0 bg-neutral-50" />
        <div className="items-center justify-between hidden w-full lg:flex mt-7">
          <p className="text-sm text-neutral-50">
            © สงวนลิขสิทธ์ พ.ศ. 2565 บริษัท ตงฮั้ว โฮลดิ้ง จำกัด (มหาชน)
          </p>
          <p className="text-sm font-medium text-neutral-50">Cookie Policy</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
