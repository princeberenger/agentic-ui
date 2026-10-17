'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from './SubNav.module.css';

const pages = [
  { href: '/', label: 'Tokens' },
  { href: '/button', label: 'Button' },
  { href: '/badge', label: 'Badge' },
  { href: '/avatar', label: 'Avatar' },
  { href: '/checkbox', label: 'Checkbox' },
  { href: '/helper-text', label: 'Helper text' },
  { href: '/radio', label: 'Radio' },
  { href: '/tabs', label: 'Tabs' },
  { href: '/table', label: 'Table' },
  { href: '/menu', label: 'Menu' },
  { href: '/navigation', label: 'Navigation' },
  { href: '/stepper', label: 'Stepper' },
  { href: '/progress', label: 'Progress' },
  { href: '/dialer', label: 'Dialer' },
  { href: '/chat', label: 'Chat' },
  { href: '/tester-1', label: 'Tester 1' },
  { href: '/tester-2', label: 'Tester 2' },
  { href: '/tester-3', label: 'Tester 3' },
];

export function SubNav() {
  const pathname = usePathname();

  return (
    <nav className={styles.nav} aria-label="Page navigation">
      <ul className={styles.list}>
        {pages.map(({ href, label }) => (
          <li key={href}>
            <Link
              href={href}
              className={`${styles.link} ${pathname === href ? styles.active : ''}`}
              aria-current={pathname === href ? 'page' : undefined}
            >
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
