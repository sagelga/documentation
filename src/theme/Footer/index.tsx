import React, { useState } from 'react';
import Link from '@docusaurus/Link';
import ThemeSettingsModal from './ThemeSettingsModal';
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
  const [showTheme, setShowTheme] = useState(false);

  return (
    <footer className="footer">
      <div className="footer-container">
        {/* ── Top: brand + columns ── */}
        <div className="footer-top">
          <div className="footer-brand">
            <a href="https://sagelga.com" className="footer-logo-text">
              sagelga
            </a>
            <p className="footer-tagline">sagelga.com — personal projects and tools</p>
          </div>
          <div className="footer-columns">
            {COLUMNS.map((col) => (
              <div key={col.title} className="footer-col">
                <p className="footer-col-title">{col.title}</p>
                <ul>
                  {col.links.map((link) => (
                    <li key={link.href}>
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <hr className="footer-divider" />

        {/* ── Bottom bar ── */}
        <div className="footer-bottom">
          <span className="footer-copyright">
            © 2021–{new Date().getFullYear()} sagelga
          </span>

          <span className="footer-domain">docs.sagelga.com</span>

          <div className="footer-bottom-right">
            <div className="footer-controls">
              <button
                className="footer-toggle-btn"
                onClick={() => setShowTheme(true)}
                aria-label="Theme settings"
              >
                <svg
                  width="13"
                  height="13"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <circle cx="12" cy="12" r="5" />
                  <line x1="12" y1="1" x2="12" y2="3" />
                  <line x1="12" y1="21" x2="12" y2="23" />
                  <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
                  <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
                  <line x1="1" y1="12" x2="3" y2="12" />
                  <line x1="21" y1="12" x2="23" y2="12" />
                  <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
                  <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
                </svg>
                <span>Theme</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      <ThemeSettingsModal
        isOpen={showTheme}
        onClose={() => setShowTheme(false)}
      />
    </footer>
  );
}
