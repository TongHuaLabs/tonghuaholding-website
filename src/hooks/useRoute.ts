import { useState, useEffect } from 'react';
import { useI18next } from 'gatsby-plugin-react-i18next';

export type RouteType = {
  title: string;
  href?: string;
  menu?: {
    title: string;
    href: string;
    indent?: boolean;
  }[];
};

const routeTH: RouteType[] = [
  { title: 'หน้าหลัก', href: '/' },
  {
    title: 'เกี่ยวกับบริษัท',
    menu: [
      {
        title: 'ข้อมูลบริษัท',
        href: '/about/',
      },
      {
        title: 'โครงสร้างองค์กร',
        href: '/about/organization-chart/',
      },
      {
        title: 'คณะกรรมการบริษัท',
        href: '/about/board-of-directors/',
      },
    ],
  },
  {
    title: 'ธุรกิจในเครือ',
    menu: [
      {
        title: 'บริษัท ตงฮั้ว แคปปิตอล จำกัด',
        href: '/businesses/tonghua-capital/',
      },
      {
        title: 'บริษัท บริหารสินทรัพย์ตงฮั้ว จำกัด',
        href: '/businesses/tonghua-asset-management/',
      },
      {
        title: 'บริษัท ตงฮั้ว แอสเซท จำกัด',
        href: '/businesses/tonghua-asset/',
      },
      {
        title: 'บริษัท ตงฮั้ว มิเดีย แล็บ จำกัด',
        href: '/businesses/tonghua-media-labs/',
      },
    ],
  },
  {
    title: 'นักลงทุนสัมพันธ์',
    href: '/investor/',
  },
  {
    title: 'ข่าวและกิจกรรม',
    menu: [
      { title: 'หน้าหลักข่าวสาร TH', href: '/newsroom/' },
      {
        title: 'ข่าวประชาสัมพันธ์บริษัท',
        href: '/newsroom/all-news/',
        indent: true,
      },
      {
        title: 'ข่าวแจ้งตลาดหลักทรัพย์',
        href: '/newsroom/all-set-announcement/',
        indent: true,
      },
    ],
  },
  {
    title: 'ร่วมงานกับเรา',
    href: '/career/',
  },
  {
    title: 'ติดต่อเรา',
    href: '/contact/',
  },
];

const routeEN: RouteType[] = [
  { title: 'Home', href: '/' },
  {
    title: 'About',
    menu: [
      {
        title: 'About',
        href: '/about/',
      },
      {
        title: 'Organization Chart',
        href: '/about/organization-chart/',
      },
      {
        title: 'Board of Directors',
        href: '/about/board-of-directors/',
      },
    ],
  },
  {
    title: 'Businesses',
    menu: [
      {
        title: 'Tong Hua Capital',
        href: '/businesses/tonghua-capital/',
      },
      {
        title: 'Tong Hua Asset Management',
        href: '/businesses/tonghua-asset-management/',
      },
      {
        title: 'Tong Hua Asset',
        href: '/businesses/tonghua-asset/',
      },
      {
        title: 'Tong Hua Media Lab',
        href: '/businesses/tonghua-media-labs/',
      },
    ],
  },
  {
    title: 'Invsestor',
    href: '/investor/',
  },
  {
    title: 'News Room',
    menu: [
      { title: 'News Room', href: '/newsroom/' },
      {
        title: 'All News',
        href: '/newsroom/all-news/',
        indent: true,
      },
      {
        title: 'Set Announcement',
        href: '/newsroom/all-set-announcement/',
        indent: true,
      },
    ],
  },
  {
    title: 'Career',
    href: '/career/',
  },
  {
    title: 'Contact',
    href: '/contact/',
  },
];

export const useRoute = () => {
  const { language } = useI18next();
  const [routeList, setRouteList] = useState<RouteType[]>([]);

  useEffect(() => {
    language === 'th' ? setRouteList(routeTH) : setRouteList(routeEN);
  }, [language]);

  return routeList;
};
