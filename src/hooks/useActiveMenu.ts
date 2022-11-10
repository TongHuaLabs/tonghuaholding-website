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
    } else if (pathname.includes('/businesses') && title === 'ธุรกิจในเครือ') {
      setIsActive(true);
    } else if (pathname.includes('/newsroom') && title === 'ข่าวและกิจกรรม') {
      setIsActive(true);
    } else if (pathname.includes('/about') && title === 'เกี่ยวกับบริษัท') {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  }, [pathname, title]);

  return isActive;
};
