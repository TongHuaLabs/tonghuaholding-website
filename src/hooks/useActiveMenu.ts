import { useState, useEffect } from 'react';
import { useLocation } from '@reach/router';

export const useActiveMenu = (title: string) => {
  const { pathname } = useLocation();
  const [isActive, setIsActive] = useState<boolean>(false);

  // TODO : implement after i18n completed
  useEffect(() => {
    if (pathname.includes('/businesses') && title === 'ธุรกิจในเครือ') {
      setIsActive(true);
    } else if (pathname.includes('/newsroom') && title === 'ข่าวและกิจกรรม') {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  }, [pathname, title]);

  return isActive;
};
