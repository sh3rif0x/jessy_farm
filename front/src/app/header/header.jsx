"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { FaWhatsapp, FaBars, FaTimes } from "react-icons/fa";
import styles from "./Header.module.css";

const navItems = [
  { href: "/", label: "الرئيسية" },
  { href: "/about", label: "من نحن" },
  { href: "/activities", label: "الأنشطة" },
  { href: "/booking", label: "الحجز" },
  { href: "/food", label: "الأكلات" },
  { href: "/gallery", label: "المعرض" },
  { href: "/contact", label: "تواصل معنا" },
];

function isActive(pathname, href) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(href + "/");
}

export default function Header() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link href="/" className={styles.logo}>
          <div className={styles.logoImage}>
            <Image
              src="/logo.jpeg"
              alt="جيسي فارم"
              width={55}
              height={55}
              priority
            />
          </div>
          <div>
            <h2>جيسي فارم</h2>
            <p>Jessi Farm</p>
          </div>
        </Link>

        <nav className={`${styles.nav} ${isOpen ? styles.open : ""}`}>
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className={isActive(pathname, item.href) ? `${styles.navLink} ${styles.activeLink}` : styles.navLink}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className={styles.actions}>
          <a
            href="https://wa.me/201018696230"
            target="_blank"
            rel="noreferrer"
            className={styles.whatsapp}
            title="تواصل معنا عبر واتساب"
          >
            <FaWhatsapp size={20} />
          </a>

          <Link href="/booking" className={styles.bookBtn}>
            احجز الآن
          </Link>

          <button
            className={styles.mobileMenuBtn}
            onClick={() => setIsOpen((prev) => !prev)}
            aria-label="Toggle mobile menu"
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>
    </header>
  );
}