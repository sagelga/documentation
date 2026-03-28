import React from 'react';
import './styles.css';

interface FooterLink { label: string; href: string }
interface FooterColumn { title: string; links: FooterLink[] }

const COLUMNS: FooterColumn[] = [
  {
    title: 'โปรเจกต์',
    links: [
      { label: 'sagelga.com', href: 'https://sagelga.com' },
      { label: 'ไพ่นกกระจอก', href: 'https://mahjong-hands.sagelga.com' },
      { label: 'Telegram ไทย', href: 'https://telegram-thai.sagelga.com' },
      { label: 'บทเรียน', href: 'https://learn.sagelga.com' },
      { label: 'เอกสาร', href: 'https://docs.sagelga.com' },
    ],
  },
  {
    title: 'ติดตาม',
    links: [
      { label: 'GitHub', href: 'https://github.com/sagelga' },
      { label: 'Facebook', href: 'https://facebook.com/sagelga' },
    ],
  },
  {
    title: 'อื่นๆ',
    links: [
      { label: 'สถานะระบบ', href: 'https://status.sagelga.com' },
      { label: 'ลิงก์ย่อ', href: 'https://redirect.sagelga.com' },
    ],
  },
];

export default function Footer(): React.ReactElement {
  return (
    <footer className="custom-footer">
      <div className="custom-footer__container">
        <div className="custom-footer__top">
          <div className="custom-footer__brand">
            <a href="https://sagelga.com" className="custom-footer__logo-text">sagelga</a>
            <p className="custom-footer__tagline">sagelga.com — personal projects and tools</p>
          </div>
          <div className="custom-footer__columns">
            {COLUMNS.map((col) => (
              <div key={col.title} className="custom-footer__col">
                <p className="custom-footer__col-title">{col.title}</p>
                <ul>
                  {col.links.map((link) => (
                    <li key={link.href}>
                      <a href={link.href} target="_blank" rel="noopener noreferrer">
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <hr className="custom-footer__divider" />
        <div className="custom-footer__bottom">
          <span>© 2021–{new Date().getFullYear()} sagelga</span>
          <span className="custom-footer__bottom-center">sagelga.com</span>
          <span />
        </div>
      </div>
    </footer>
  );
}
