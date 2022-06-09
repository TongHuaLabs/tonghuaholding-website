import React from 'react';

type ContactUsPageProps = {};

const ContactUsPage: React.FC<ContactUsPageProps> = () => {
  return (
    <>
      <section className="flex items-center px-4 md:px-6 lg:px-56 lg:py-20 oblique-lined bg-primary-main bg-opacity-20 h-72">
        <h1 className="text-4xl font-medium">ติดต่อเรา</h1>
      </section>
      {/* TONG HUA HOLDING */}
      <section className="px-4 pt-20 md:px-6 lg:px-56">
        <h2 className="text-3xl font-medium">TONG HUA HOLDING</h2>
        <p className="mt-10">
          Consequat culpa exercitation non exercitation. Dolor eu amet fugiat do
          est reprehenderit dolor Lorem voluptate et eu sunt dolore quis. Id
          esse irure anim culpa ut nulla cupidatat consectetur anim nostrud non
          magna do. Ad exercitation nostrud duis officia et. Culpa incididunt
          duis pariatur adipisicing adipisicing.
        </p>
      </section>
      {/* Address */}
      <section className="flex flex-col px-4 py-20 space-y-8 md:items-center md:space-y-0 md:flex-row md:px-6 lg:px-56">
        <div className="md:w-1/2 md:mr-4">
          <h2 className="text-3xl font-medium">TONG HUA HOLDING</h2>
          <p className="mt-6">
            Consequat culpa exercitation non exercitation. Dolor eu amet fugiat
            do est reprehenderit dolor Lorem voluptate et eu sunt dolore quis.
            Id esse irure anim culpa ut nulla cupidatat consectetur anim nostrud
            non magna do. Ad exercitation nostrud duis officia et. Culpa
            incididunt duis pariatur adipisicing adipisicing.
          </p>
        </div>
        {/* Maps */}
        <div className="md:w-1/2 md:ml-4">
          <h2 className="text-3xl font-medium md:hidden">Google Maps</h2>
          <div className="mt-6 aspect-w-16 aspect-h-9">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15503.650231408377!2d100.5183629!3d13.723743599999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e299cd81f01815%3A0x1660bd86761a92f4!2sICONSIAM!5e0!3m2!1sen!2sth!4v1654750943030!5m2!1sen!2sth"
              className="w-full h-full border-0"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactUsPage;
