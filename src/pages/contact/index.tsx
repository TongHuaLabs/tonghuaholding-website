import React from 'react';
import ObliqueLineSection from '@/components/sections/ObliqueLineSection';
import Badge from '@/components/information/Badge';
import UnderlineHeader from '@/components/UnderlineHeader';
import MapSvg from '@/images/map.svg';
import MapIcon from '@/icons/map.inline.svg';
import PhoneCall from '@/components/information/PhoneCall';
import MailTo from '@/components/information/MailTo';
import ContactInvestorSection from '@/components/sections/ContactInvestorSection';

type ContactUsPageProps = {};

const ContactUsPage: React.FC<ContactUsPageProps> = () => {
  return (
    <>
      <ObliqueLineSection title="ติดต่อเรา" />

      {/* ติดต่อส่วนกลาง & ติดต่อฝ่ายบัญชี */}
      <section className="px-4 md:flex-row py-10 md:px-6 lg:px-16 lg:py-20 max-w-7xl mx-auto">
        <UnderlineHeader
          title="กรุณาติดต่อเรา หากท่านต้องการสอบถามข้อมูลเพิ่มเติม"
          textClassName="text-2xl"
          underlineClassName="w-12 bg-primary-main"
        />
        <div className="mt-10 space-y-10 md:space-y-16">
          <div className="flex flex-col md:flex-row space-y-10 md:space-y-0">
            {/* ติดต่อส่วนกลาง */}
            <div className="flex flex-col md:w-1/2">
              <Badge title="ติดต่อส่วนกลาง" />
              <PhoneCall
                phone="02-236-9171-4"
                tel="+66223691714"
                className="mt-4 hover:underline hover:decoration-primary-main max-w-max"
                textClassName="text-primary-main"
              />
              <PhoneCall
                phone="02-238-9286 (Fax)"
                tel="+6622389286"
                className="mt-2 hover:underline hover:decoration-primary-main max-w-max"
                textClassName="text-primary-main"
              />
              <MailTo
                mail="contactus@tonghuagroup.com"
                className="mt-2 hover:underline hover:decoration-primary-main max-w-max"
                textClassName="text-primary-main"
              />
            </div>
          </div>
          <div className="flex flex-col md:flex-row space-y-10 md:space-y-0">
            {/* วันเวลาทำการ */}
            <div className="flex flex-col md:w-1/2">
              <UnderlineHeader
                title="วันเวลาทำการ"
                textClassName="text-2xl"
                underlineClassName="w-12 bg-primary-main"
              />
              <p className="text-neutral-600 font-medium mt-4">
                วันทำการ: วัน จันทร์ - ศุกร์
              </p>
              <p className="text-neutral-600 font-medium">
                เวลาทำการ: 08.30 น. - 17.30 น.
              </p>
            </div>
            {/* ที่อยู่บริษัท */}
            <div className="flex flex-col md:w-1/2">
              <UnderlineHeader
                title="ที่อยู่บริษัท"
                textClassName="text-2xl"
                underlineClassName="w-12 bg-primary-main"
              />
              <p className="text-neutral-600 whitespace-pre-line font-medium mt-4">
                {`877-881 เจริญกรุง ตลาดน้อย สัมพันธวงศ์\nกรุงเทพมหานคร 10100`}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact & Address & Maps */}
      <section
        className="relative"
        style={{
          background: `url(${MapSvg}) no-repeat center center / cover`,
        }}
      >
        <div className="px-4 py-10 relative md:py-20 lg:py-28  z-20 md:flex-row md:px-6 lg:px-16 max-w-5xl mx-auto">
          <div className="flex items-center justify-start lg:justify-center space-x-3 relative z-10">
            <MapIcon className="h-7 w-7" />
            <h2 className="text-2xl font-medium text-neutral-900">
              Google Map
            </h2>
          </div>
          <div className="aspect-w-16 aspect-h-9 mt-5 lg:mt-10">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3875.748859222239!2d100.51239781483024!3d13.733648990359175!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e2999cb642394d%3A0x30bc126296234b83!2sTONG%20HUA%20HOLDING%20PCL!5e0!3m2!1sen!2sth!4v1657095822723!5m2!1sen!2sth"
              className="w-full h-full border-0 rounded-2xl"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
        <div className="h-1/4 absolute w-full bottom-0 z-10 bg-primary-main" />
      </section>

      {/* ติดต่อนักลงทุนสัมพันธ์ */}
      <ContactInvestorSection />
    </>
  );
};

export default ContactUsPage;
