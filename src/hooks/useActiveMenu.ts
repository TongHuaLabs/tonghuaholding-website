import { useState, useEffect } from 'react';
import { useLocation } from '@reach/router';

export const useActiveMenu = (title: string) => {
  const { pathname } = useLocation();
  const [isActive, setIsActive] = useState<boolean>(false);

  useEffect(() => {
    if (
      (pathname === '/' || pathname === '/th' || pathname === '/th/') &&
      title === 'หน้าหลัก'
    ) {
      setIsActive(true);
    } else if (
      pathname.includes('/businesses') &&
      (title === 'ธุรกิจในเครือ' || title === 'Businesses')
    ) {
      setIsActive(true);
    } else if (
      pathname.includes('/newsroom') &&
      (title === 'ข่าวและกิจกรรม' || title === 'News Room')
    ) {
      setIsActive(true);
    } else if (
      pathname.includes('/about') &&
      (title === 'เกี่ยวกับบริษัท' || title === 'About')
    ) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  }, [pathname, title]);

  return isActive;
};
