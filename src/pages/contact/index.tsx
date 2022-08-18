import React from 'react';
import ObliqueLineSection from '@/components/sections/ObliqueLineSection';
import Badge from '@/components/information/Badge';
import UnderlineHeader from '@/components/UnderlineHeader';
import MapSvg from '@/images/map.svg';
import DotPattern from '@/images/dot-pattern.inline.svg';
import Circles from '@/images/circles.inline.svg';
import MapIcon from '@/icons/map.inline.svg';
import PhoneCall from '@/components/information/PhoneCall';
import MailTo from '@/components/information/MailTo';
import { Link } from 'gatsby';

type ContactUsPageProps = {};

const ContactUsPage: React.FC<ContactUsPageProps> = () => {
  return (
    <>
      <ObliqueLineSection title="ติดต่อเรา" />

      {/* ติดต่อส่วนกลาง & ติดต่อฝ่ายบัญชี */}
      <section className="px-4 md:flex-row py-10 md:px-6 lg:px-16 max-w-7xl mx-auto">
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
                phone="(+66) 2236-9171-6"
                tel="+66223691716"
                className="mt-4 hover:underline hover:decoration-primary-main"
                textClassName="text-primary-main"
              />
              <PhoneCall
                phone="(+66) 2236-0143-44"
                tel="+662236014344"
                className="mt-2 hover:underline hover:decoration-primary-main"
                textClassName="text-primary-main"
              />
              <MailTo
                mail="contactus@tonghuagroup.com"
                className="mt-2 hover:underline hover:decoration-primary-main"
                textClassName="text-primary-main"
              />
            </div>
            {/* ติดต่อฝ่ายบัญชี */}
            <div className="flex flex-col md:w-1/2">
              <Badge title="ติดต่อฝ่ายบัญชี" />
              <PhoneCall
                phone="(+66) 2236-9171-6"
                tel="+66223691716"
                className="mt-4 hover:underline hover:decoration-primary-main"
                textClassName="text-primary-main"
              />
              <PhoneCall
                phone="(+66) 2236-0143-44"
                tel="+662236014344"
                className="mt-2 hover:underline hover:decoration-primary-main"
                textClassName="text-primary-main"
              />
              <MailTo
                mail="contactus@tonghuagroup.com"
                className="mt-2 hover:underline hover:decoration-primary-main"
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
              <p className="text-neutral-600 font-medium mt-4">
                877, 881 Charoen Krung Rd, Talat Noi, Samphanthawong, Bangkok
                10100
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
        <div className="px-4 py-10 relative z-20 md:flex-row lg:py-20 md:px-6 lg:px-16 2xl:max-w-7xl mx-auto">
          <DotPattern className="absolute top-0 left-0 lg:left-auto text-primary-main opacity-50" />
          <div className="flex items-center space-x-3 relative z-10">
            <MapIcon className="h-6 w-6" />
            <h2 className="text-xl font-medium text-neutral-900">Google Map</h2>
          </div>
          <div className="aspect-w-16 aspect-h-9 mt-5">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3875.748859222239!2d100.51239781483024!3d13.733648990359175!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e2999cb642394d%3A0x30bc126296234b83!2sTONG%20HUA%20HOLDING%20PCL!5e0!3m2!1sen!2sth!4v1657095822723!5m2!1sen!2sth"
              className="w-full h-full border-0 rounded-2xl"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
        <div className="h-28 absolute w-full bottom-0 z-10 md:h-36 lg:h-48 bg-primary-main" />
      </section>

      {/* ติดต่อนักลงทุนสัมพันธ์ */}
      <section className="bg-neutral-600 overflow-hidden">
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
    </>
  );
};

export default ContactUsPage;
