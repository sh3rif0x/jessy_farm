"use client";

import Link from "next/link";
import styles from "./Header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link href="/" className={styles.logo}>
          <span className={styles.logoIcon}>🌿</span>
          <div>
            <h2>جيسي فارم</h2>
            <p>Jessi Farm</p>
          </div>
        </Link>

        <nav className={styles.nav}>
          <Link href="/">الرئيسية</Link>
          <Link href="/about">من نحن</Link>
          <Link href="/activities">الأنشطة</Link>
          <Link href="/food">الأكلات</Link>
          <Link href="/gallery">المعرض</Link>
          <Link href="/contact">تواصل معنا</Link>
        </nav>

        <div className={styles.actions}>
          <a
            href="https://wa.me/201018696230"
            target="_blank"
            className={styles.whatsapp}
          >
            واتساب
          </a>

          <button className={styles.bookBtn}>
            احجز الآن
          </button>
        </div>
      </div>
    </header>
  );
}