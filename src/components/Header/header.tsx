'use client';
import styles from './header.module.css';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import { useState } from 'react';
import getViewportWidth from '@/utils/viewport-width';

export default function Header() {
  const [openBurgerMenu, setOpenBurgerMenu] = useState(false);

  const pathname = usePathname();

  const isBigScreen = getViewportWidth() >= 1100;

  const handleMenuClick = () => {
    setOpenBurgerMenu(!openBurgerMenu);
  };
  return (
    <header className={styles.header}>
      <div className={styles.burgermenu_wrapper} onClick={handleMenuClick}>
        <Image
          width={55}
          height={!openBurgerMenu ? 40 : 55}
          src={
            openBurgerMenu ? '/icons/menu-close.png' : '/icons/burger-menu.png'
          }
          alt="Menu"
        />
      </div>
      {(openBurgerMenu || isBigScreen) && (
        <nav className={styles.nav} onClick={handleMenuClick}>
          <li className={styles.header_link_item}>
            <Link
              href="/"
              className={`${styles.header_link} ${
                pathname === '/' ? styles.active : ''
              } hover`}
            >
              Home
            </Link>
          </li>
          <li className={styles.header_link_item}>
            <Link
              href="/about"
              className={`${styles.header_link} ${
                pathname === '/about' ? styles.active : ''
              } hover`}
            >
              About
            </Link>
          </li>
          <li className={styles.header_link_item}>
            <Link
              href="/portfolio"
              className={`${styles.header_link} ${
                pathname === '/portfolio' ? styles.active : ''
              } hover`}
            >
              Portfolio
            </Link>
          </li>
          <li className={styles.header_link_item}>
            <Link
              href="/contact"
              className={`${styles.header_link} ${
                pathname === '/contact' ? styles.active : ''
              } hover`}
            >
              Contact
            </Link>
          </li>
          <li className={styles.header_link_item}>
            <Link
              href="/references"
              className={`${styles.header_link} ${
                pathname === '/references' ? styles.active : ''
              } hover`}
            >
              References
            </Link>
          </li>
        </nav>
      )}
    </header>
  );
}
