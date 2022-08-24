export const route = [
  { title: 'หน้าแรก', href: '/' },
  {
    title: 'เกี่ยวกับบริษัท',
    href: '/about/',
  },
  {
    title: 'ธุรกิจในเครือ',
    menu: [
      { title: 'TONG HUA ASSET', href: '/businesses/tonghua-asset/' },
      {
        title: 'TONG HUA ASSET MANAGEMENT',
        href: '/businesses/tonghua-asset-management/',
      },
      { title: 'TONG HUA CAPITAL', href: '/businesses/tonghua-capital/' },
      { title: 'TONG HUA MEDIA LAB', href: '/businesses/tonghua-media-lab/' },
    ],
  },
  {
    title: 'นักลงทุนสัมพันธ์',
    href: '/investor/',
  },
  {
    title: 'ข่าวและกิจกรรม',
    menu: [
      { title: 'ข่าวสารและกิจกรรม', href: '/newsroom/' },
      { title: 'ข่าวสาร TH', href: '/newsroom/all-news/' },
      {
        title: 'ข่าวแจ้งตลาดหลักทรัพย์',
        href: '/newsroom/all-set-announcement/',
      },
      { title: 'เอกสารเผยแพร่', href: '/newsroom/all-document/' },
    ],
  },
  {
    title: 'สมัครงาน',
    href: '/career/',
  },
  {
    title: 'ติดต่อเรา',
    href: '/contact/',
  },
];
