import React from 'react';
import { Link } from 'gatsby';
import PhoneCall from '@/components/information/PhoneCall';
import MailTo from '@/components/information/MailTo';
import DotPattern from '@/images/dot-pattern.inline.svg';
import Circles from '@/images/circles.inline.svg';
import classNames from 'classnames';
import OutlineButton from '@/components/buttons/OutlineButton';

type ContactInvestorSectionProps = {
  className?: string;
};

const ContactInvestorSection: React.FC<ContactInvestorSectionProps> = ({
  className,
}) => {
  return (
    <section
      className={classNames('bg-neutral-700 overflow-hidden', className)}
    >
      <div className="flex relative z-10 flex-col space-y-6 py-20 items-center px-4 md:px-6 lg:px-16 max-w-7xl mx-auto">
        <DotPattern className="absolute top-4 left-4 text-neutral-200 md:left-auto md:right-14 opacity-50" />
        <h2 className="text-neutral-50 relative text-3xl font-bold text-center">
          ติดต่อนักลงทุนสัมพันธ์
        </h2>
        <div className="space-x-0 flex flex-col items-center space-y-2 md:space-y-0 md:space-x-4 md:flex-row">
          <PhoneCall
            phone="02-236-9171-4"
            tel="+66223691714"
            className="underline underline-offset-1 text-neutral-50"
          />
          <PhoneCall
            phone="02-238-9286 (Fax)"
            tel="+6622389286"
            className="underline underline-offset-1 text-neutral-50"
          />
        </div>
        <MailTo
          mail="contactus@tonghuaholding.com"
          className="mt-2 underline underline-offset-1 text-neutral-50"
        />
        <Link to="/investor">
          <OutlineButton title="ข้อมูลการลงทุน" />
        </Link>
        <Circles className="absolute -bottom-4 md:left-14 md:bottom-0" />
      </div>
    </section>
  );
};

export default ContactInvestorSection;
