import styles from "./founder.module.css";

export default function FounderPage() {
  return (
    <main className={styles.page}>
      <section className={styles.hero}>
        <div className={styles.imageSection}>
          <img
            src="/founder.jpg"
            alt="Ahmed Helal"
            className={styles.founderImage}
          />

          <div className={styles.socialCard}>
            <h3>أحمد هلال</h3>
            <p>مؤسس جيسي فارم</p>

            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.facebookBtn}
            >
              زيارة الحساب الشخصي
            </a>
          </div>
        </div>

        <div className={styles.content}>
          <span className={styles.badge}>
            🌿 مؤسس جيسي فارم
          </span>

          <h1>أحمد هلال</h1>

          <p className={styles.lead}>
            صاحب رؤية طموحة آمن بأن الريف المصري يمتلك تجربة سياحية
            وثقافية فريدة تستحق أن يكتشفها الجميع.
          </p>

          <p>
            انطلقت فكرة جيسي فارم من حب الطبيعة والحياة الريفية
            المصرية الأصيلة، بهدف إنشاء مكان يجمع بين الجمال
            الطبيعي والضيافة المصرية والأكل الفلاحي التقليدي.
          </p>

          <p>
            نجحت جيسي فارم في استقبال آلاف الزوار من مختلف أنحاء
            مصر، بالإضافة إلى ضيوف من دول عديدة حول العالم، لتصبح
            واحدة من أبرز التجارب الريفية والسياحية في محافظة
            المنوفية.
          </p>

          <div className={styles.stats}>
            <div className={styles.statCard}>
              <h2>4000+</h2>
              <span>زائر</span>
            </div>

            <div className={styles.statCard}>
              <h2>30K+</h2>
              <span>متابع</span>
            </div>

            <div className={styles.statCard}>
              <h2>100%</h2>
              <span>تجربة ريفية</span>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.story}>
        <h2>رؤية جيسي فارم</h2>

        <p>
          أن تكون جيسي فارم الوجهة الريفية الأولى في مصر لمن
          يبحث عن الطبيعة والأكل المصري الأصيل والتجارب
          الثقافية الفريدة.
        </p>

        <h2>رسالتنا</h2>

        <p>
          تقديم تجربة استثنائية تعكس جمال الريف المصري وتدعم
          المجتمع المحلي وتحافظ على التراث الغذائي المصري.
        </p>
      </section>
    </main>
  );
}