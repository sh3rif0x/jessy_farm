import Link from "next/link";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.page}>
      <section className={styles.hero}>
        <div className={styles.overlay}></div>

        <div className={styles.content}>
          <span className={styles.badge}>
            🌿 جيسي فارم | Jessi Farm
          </span>

          <h1 className={styles.title}>
            استمتع بأجمل تجربة ريفية
            <br />
            في قلب الطبيعة المصرية
          </h1>

          <p className={styles.description}>
            اكتشف جمال الريف المصري، واستمتع بالأكل الفلاحي الأصيل،
            والأنشطة العائلية، وجلسات التصوير، وسط الحقول الخضراء
            في تجربة لا تُنسى.
          </p>

          <div className={styles.buttons}>
            <Link href="/booking" className={styles.bookBtn}>
              احجز الآن
            </Link>

            <Link href="/about" className={styles.moreBtn}>
              اكتشف المزيد
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}