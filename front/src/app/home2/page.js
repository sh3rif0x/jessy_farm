import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.page}>
      <section className={styles.hero}>
        <div className={styles.content}>
          <span className={styles.badge}>🌿 جيسي فارم</span>

          <h1 className={styles.title}>
            استمتع بيوم ريفي متكامل وسط الطبيعة الخضراء
          </h1>

          <p className={styles.description}>
            في قلب ريف المنوفية، تقدم جيسي فارم تجربة فريدة تجمع بين الأكل
            الفلاحي الأصيل، الأجواء الريفية الساحرة، الأنشطة العائلية، وجلسات
            التصوير المميزة. مكان مثالي لقضاء يوم لا يُنسى مع العائلة والأصدقاء.
          </p>

          <div className={styles.features}>
            <div className={styles.feature}>🌾 طبيعة خضراء</div>
            <div className={styles.feature}>🍲 أكل فلاحي أصيل</div>
            <div className={styles.feature}>📸 جلسات تصوير</div>
            <div className={styles.feature}>👨‍👩‍👧‍👦 مناسب للعائلات</div>
          </div>

          <div className={styles.actions}>
            <button className={styles.primaryBtn}>احجز الآن</button>
            <button className={styles.secondaryBtn}>تعرف علينا</button>
          </div>
        </div>

        <div className={styles.imageContainer}>
          <img
            src="/banner.jpg"
            alt="جيسي فارم"
            className={styles.heroImage}
          />

          <div className={styles.infoCard}>
            <h3>جيسي فارم</h3>
            <p>حيث الأرض الخضراء والأكل الفلاحي من زمان</p>
          </div>
        </div>
      </section>

      <section className={styles.stats}>
        <div className={styles.statCard}>
          <h2>+4000</h2>
          <p>زائر</p>
        </div>

        <div className={styles.statCard}>
          <h2>+30K</h2>
          <p>متابع</p>
        </div>

        <div className={styles.statCard}>
          <h2>100%</h2>
          <p>تجربة ريفية</p>
        </div>

        <div className={styles.statCard}>
          <h2>365</h2>
          <p>يوم من الأنشطة</p>
        </div>
      </section>
    </main>
  );
}