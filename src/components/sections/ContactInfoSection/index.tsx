import React from 'react';
import UnderlineHeader from '@/components/UnderlineHeader';
import PhoneCall from '@/components/information/PhoneCall';
import MailTo from '@/components/information/MailTo';
import classNames from 'classnames';

type ContactInfoSectionProps = {
  iframeUrl: string;
  mail: string;
  phoneCall: {
    phone: string;
    tel: string;
  }[];
  className?: string;
};

const ContactInfoSection: React.FC<ContactInfoSectionProps> = ({
  iframeUrl,
  phoneCall,
  mail,
  className,
}) => {
  return (
    <section
      className={classNames('flex flex-col md:flex-row-reverse', className)}
    >
      <iframe
        src={iframeUrl}
        className="w-full h-80 border-0 md:w-1/2 md:h-96"
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
      <div className="flex flex-col h-80 bg-primary-main md:w-1/2 px-6 lg:px-24 xl:px-32 md:px-8 md:h-96 justify-center">
        <UnderlineHeader
          title="ข้อมูลการติดต่อ"
          textClassName="text-neutral-50 text-2xl"
          underlineClassName="w-12 bg-neutral-200"
        />
        {phoneCall.map(({ phone, tel }, key) => (
          <PhoneCall
            key={key}
            phone={phone}
            tel={tel}
            className={classNames(
              `${key === 0 ? 'mt-5' : 'mt-2'}`,
              'text-neutral-50 underlineunderline-offset-1',
            )}
            textClassName="text-xl"
          />
        ))}
        <MailTo
          mail={mail}
          className="mt-6 text-neutral-50 underline underline-offset-1"
          textClassName="text-xl"
        />
      </div>
    </section>
  );
};

export default ContactInfoSection;
