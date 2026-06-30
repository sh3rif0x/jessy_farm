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
            <button className={styles.bookBtn}>
              احجز الآن
            </button>

            <button className={styles.moreBtn}>
              اكتشف المزيد
            </button>
          </div>

          <div className={styles.info}>
            <div>
              <h2>4000+</h2>
              <span>زائر</span>
            </div>

            <div>
              <h2>30K+</h2>
              <span>متابع</span>
            </div>

            <div>
              <h2>100%</h2>
              <span>تجربة ريفية</span>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}