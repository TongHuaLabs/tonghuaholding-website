import React from 'react';

type MainLayoutProps = {};

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return <main className="p-6">{children}</main>;
};

export default MainLayout;
