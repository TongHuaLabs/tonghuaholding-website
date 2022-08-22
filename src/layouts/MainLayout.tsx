import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import MobileSidebar from './MobileSidebar';

type MainLayoutProps = {};

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  const [mobileSidebar, setMobileSidebar] = useState<boolean>(false);

  // lock and unlock body scroll when menu overlay visible
  useEffect(() => {
    if (mobileSidebar) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }
  }, [mobileSidebar]);

  return (
    <div className="flex flex-col justify-between min-h-screen">
      <Navbar showClose={false} onMenuClick={() => setMobileSidebar(true)} />
      <main className="flex-grow">{children}</main>
      <Footer />
      <MobileSidebar
        isShowing={mobileSidebar}
        onClose={() => setMobileSidebar(false)}
      />
    </div>
  );
};

export default MainLayout;
