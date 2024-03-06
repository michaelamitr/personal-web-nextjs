'use client';
import styles from './header.module.css';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import { useState } from 'react';

export default function Header() {
  const [openBurgerMenu, setOpenBurgerMenu] = useState(false);

  const pathname = usePathname();

  const handleMenuClick = () => {
    setOpenBurgerMenu(!openBurgerMenu);
  };
  return (
    <header className={styles.header}>
      <div className={styles.burgermenu_wrapper} onClick={handleMenuClick}>
        <Image
          width={100}
          height={100}
          src={openBurgerMenu ? '/close.svg' : '/burgermenuOpen.svg'}
          alt="Menu"
        />
      </div>
      {openBurgerMenu && (
        <nav className={styles.nav} onClick={handleMenuClick}>
          <li className={styles.header_link_item}>
            <Link
              href="/"
              className={`${styles.header_link} ${
                pathname === '/' ? styles.active : ''
              }`}
            >
              Home
            </Link>
          </li>
          <li className={styles.header_link_item}>
            <Link
              href="/about"
              className={`${styles.header_link} ${
                pathname === '/about' ? styles.active : ''
              }`}
            >
              About
            </Link>
          </li>
          <li className={styles.header_link_item}>
            <Link
              href="/portfolio"
              className={`${styles.header_link} ${
                pathname === '/portfolio' ? styles.active : ''
              }`}
            >
              Portfolio
            </Link>
          </li>
          <li className={styles.header_link_item}>
            <Link
              href="/contact"
              className={`${styles.header_link} ${
                pathname === '/contact' ? styles.active : ''
              }`}
            >
              Contact
            </Link>
          </li>
          <li className={styles.header_link_item}>
            <Link
              href="/references"
              className={`${styles.header_link} ${
                pathname === '/references' ? styles.active : ''
              }`}
            >
              References
            </Link>
          </li>
          <li className={styles.header_link_item}>
            <Link
              href="/skills"
              className={`${styles.header_link} ${
                pathname === '/skills' ? styles.active : ''
              }`}
            >
              Skills
            </Link>
          </li>
        </nav>
      )}
    </header>
  );
}
