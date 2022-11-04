import React from 'react';
import { Link } from 'gatsby-plugin-react-i18next';
import PhoneCall from '@/components/information/PhoneCall';
import MailTo from '@/components/information/MailTo';
import DotPattern from '@/images/dot-pattern.inline.svg';
import Circles from '@/images/circles.inline.svg';
import classNames from 'classnames';
import OutlineButton from '@/components/buttons/OutlineButton';
import { useTranslation } from 'gatsby-plugin-react-i18next';

type ContactInvestorSectionProps = {
  className?: string;
};

const ContactInvestorSection: React.FC<ContactInvestorSectionProps> = ({
  className,
}) => {
  const { t } = useTranslation();
  return (
    <section
      id="contact-investor"
      className={classNames('bg-neutral-700 overflow-hidden', className)}
    >
      <div className="flex relative z-10 flex-col space-y-6 py-20 items-center px-4 md:px-6 lg:px-16 max-w-7xl mx-auto">
        <DotPattern className="absolute top-4 left-4 text-neutral-200 md:left-auto md:right-14 opacity-50" />
        <h2 className="text-neutral-50 relative text-3xl font-bold text-center">
          {/* ติดต่อนักลงทุนสัมพันธ์ */}
          {t('Components.ContactInvestorSection.Title')}
        </h2>
        <PhoneCall
          phone="02-236-9171"
          tel="+6622369171"
          className="underline underline-offset-1 text-neutral-50"
        />
        <PhoneCall
          phone="02-236-9172"
          tel="+6622369172"
          className="underline underline-offset-1 text-neutral-50"
        />
        <MailTo
          mail="contactus@tonghuagroup.com"
          className="mt-2 underline underline-offset-1 text-neutral-50"
        />
        <Link to="/investor">
          {/* ข้อมูลการลงทุน */}
          <OutlineButton
            title={t('Components.ContactInvestorSection.ReadMoreButton')}
            className="border-neutral-50 text-neutral-50"
          />
        </Link>
        <Circles className="absolute -bottom-4 md:left-14 md:bottom-0" />
      </div>
    </section>
  );
};

export default ContactInvestorSection;
