export type Route = {
  title: string;
  href?: string;
  menu?: {
    title: string;
    href: string;
    indent?: boolean;
  }[];
};

export const route: Route[] = [
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
        href: '/businesses/tonghua-media-lab/',
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