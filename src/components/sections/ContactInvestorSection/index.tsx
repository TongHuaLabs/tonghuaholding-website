import React from 'react';
import { Link } from 'gatsby';
import PhoneCall from '@/components/information/PhoneCall';
import MailTo from '@/components/information/MailTo';
import DotPattern from '@/images/dot-pattern.inline.svg';
import Circles from '@/images/circles.inline.svg';
import classNames from 'classnames';

type ContactInvestorSectionProps = {
  className?: string;
};

const ContactInvestorSection: React.FC<ContactInvestorSectionProps> = ({
  className,
}) => {
  return (
    <section
      className={classNames('bg-neutral-600 overflow-hidden', className)}
    >
      <div className="flex relative z-10 flex-col space-y-6 py-20 items-center px-4 md:px-6 lg:px-16 2xl:max-w-7xl mx-auto">
        <DotPattern className="absolute top-4 left-4 text-neutral-200 md:left-auto md:right-14 opacity-50" />
        <h2 className="text-neutral-50 relative text-3xl font-bold">
          ติดต่อนักลงทุนสัมพันธ์
        </h2>
        <div className="flex flex-col space-y-2 md:space-y-0 md:space-x-4 md:flex-row">
          <PhoneCall
            phone="(+66) 2236-9171-6"
            tel="+66223691716"
            className="underline underline-offset-1 text-neutral-50"
          />
          <PhoneCall
            phone="(+66) 2236-0143-44"
            tel="+662236014344"
            className="underline underline-offset-1 text-neutral-50"
          />
        </div>
        <MailTo
          mail="contactus@tonghuagroup.com"
          className="mt-2 underline underline-offset-1 text-neutral-50"
        />
        <Link
          to="/investor"
          className="border border-neutral-50 py-1.5 rounded-lg text-neutral-50 px-4 hover:bg-white hover:text-neutral-600"
        >
          ข้อมูลการลงทุน
        </Link>
        <Circles className="absolute -bottom-4 md:left-14 md:bottom-0" />
      </div>
    </section>
  );
};

export default ContactInvestorSection;
