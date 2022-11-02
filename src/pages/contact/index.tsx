import React from 'react';
import PrimarySection from '@/components/sections/PrimarySection';
import Badge from '@/components/information/Badge';
import UnderlineHeader from '@/components/UnderlineHeader';
import MapSvg from '@/images/map.svg';
import PhoneCall from '@/components/information/PhoneCall';
import MailTo from '@/components/information/MailTo';
import DotPattern from '@/images/dot-pattern.inline.svg';
import MainLayout from '@/layouts/MainLayout';

type ContactUsPageProps = {};

const ContactUsPage: React.FC<ContactUsPageProps> = () => {
  return (
    <MainLayout>
      <PrimarySection title="ติดต่อเรา" />

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
                textClassName="text-primary-main lg:text-lg"
              />
              <MailTo
                mail="contact@tonghuaholding.com"
                className="mt-2 hover:underline hover:decoration-primary-main max-w-max"
                textClassName="text-primary-main lg:text-lg"
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
              <p className="text-neutral-600 font-medium lg:text-lg mt-4">
                วันทำการ: วัน จันทร์ - ศุกร์
              </p>
              <p className="text-neutral-600 font-medium lg:text-lg">
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
              <p className="text-neutral-600 whitespace-pre-line font-medium lg:text-lg mt-4">
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
        <div className="absolute w-full h-full bg-white/60" />
        <div className="relative px-4 py-10 md:py-20 lg:py-28 md:flex-row md:px-6 lg:px-16 max-w-5xl mx-auto">
          <div className="relative z-10 !aspect-w-16 !aspect-h-9">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3875.748859222239!2d100.51239781483024!3d13.733648990359175!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e2999cb642394d%3A0x30bc126296234b83!2sTONG%20HUA%20HOLDING%20PCL!5e0!3m2!1sen!2sth!4v1657095822723!5m2!1sen!2sth"
              className="w-full h-full border-0 rounded-2xl"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
          <DotPattern className="text-primary-main absolute top-0 left-0 z-0 lg:hidden" />
        </div>
      </section>
    </MainLayout>
  );
};

export default ContactUsPage;
