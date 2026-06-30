import Link from "next/link";
import styles from "./footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        {/* About */}
        <div className={styles.column}>
          <div className={styles.logo}>
            <img src="/logo.png" alt="Jessi Farm" />
            <div>
              <h2>جيسي فارم</h2>
              <span>Jessi Farm</span>
            </div>
          </div>

          <p className={styles.description}>
            جيسي فارم هي وجهة ريفية وسياحية في قلب محافظة المنوفية، تقدم تجربة
            مصرية أصيلة تجمع بين الطبيعة الخضراء، الأكل الفلاحي، الأنشطة
            العائلية، والضيافة الريفية في أجواء هادئة ومميزة.
          </p>
        </div>

        {/* Quick Links */}
        <div className={styles.column}>
          <h3>روابط سريعة</h3>

          <ul>
            <li><Link href="/">الرئيسية</Link></li>
            <li><Link href="/about">من نحن</Link></li>
            <li><Link href="/founder">المؤسس</Link></li>
            <li><Link href="/activities">الأنشطة</Link></li>
            <li><Link href="/gallery">المعرض</Link></li>
            <li><Link href="/contact">تواصل معنا</Link></li>
          </ul>
        </div>

        {/* Explore */}
        <div className={styles.column}>
          <h3>اكتشف جيسي فارم</h3>

          <ul>
            <li><Link href="/food_menu">الأكلات المصرية</Link></li>
            <li><Link href="/reviews">آراء الزوار</Link></li>
            <li><Link href="/booking">الحجز</Link></li>
            <li><Link href="/international-visitors">الزوار الأجانب</Link></li>
            <li><Link href="/famous-guests">الضيوف المميزون</Link></li>
            <li><Link href="/village-women">سيدات القرية</Link></li>
          </ul>
        </div>

        {/* Contact */}
        <div className={styles.column}>
          <h3>تواصل معنا</h3>

          <p>📍 المنوفية - مصر</p>
          <p>📞 +20 101 869 6230</p>
          <p>✉️ info@jessifarm.com</p>

          <div className={styles.socials}>
            <a href="#" target="_blank">Facebook</a>
            <a href="#" target="_blank">Instagram</a>
            <a href="#" target="_blank">TikTok</a>
            <a href="#" target="_blank">WhatsApp</a>
          </div>
        </div>
      </div>

      <div className={styles.bottom}>
        <p>
          © {new Date().getFullYear()} Jessi Farm. جميع الحقوق محفوظة.
        </p>

        <p>
          Designed & Developed with ❤️ for Jessi Farm
        </p>
      </div>
    </footer>
  );
}