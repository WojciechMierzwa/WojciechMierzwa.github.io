'use client';

import Link from 'next/link';
'@/'
import styles from '@/styles/navbar.module.css';

export default function Navbar() {
  return (
    <header className={styles.navbar}>
      <nav>
        <ul>
          <li className={styles.logo}>Moja Strona</li>
          <li>
            <Link href="/" className={styles.navLink}>
              Strona Główna
            </Link>
          </li>
          <li>
            <Link href="/o-mnie" className={styles.navLink}>
              O Mnie
            </Link>
          </li>
          <li>
            <Link href="/moje-zainteresowania" className={styles.navLink}>
              Zainteresowania
            </Link>
          </li>
          <li>
            <Link href="/ulubiona-gra" className={styles.navLink}>
              Ulubiona Gra
            </Link>
          </li>
          <li>
            <Link href="/kontakt" className={styles.navLink}>
              Kontakt
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
