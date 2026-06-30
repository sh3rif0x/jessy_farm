import React from "react";
import Link from "next/link";
import styles from "./page.module.css";

export default function Page() {
  return (
    <main className={styles.maindiv}>
      <section className={styles.hero}>
        <div className={styles.content}>
          <span className={styles.badge}>🌿 جيسي فارم - Jessi Farm</span>

          <h1 className={styles.title}>
            عِش تجربة الريف المصري كما لم تعشها من قبل
          </h1>

          <p className={styles.description}>
            وسط الحقول الخضراء والطبيعة الساحرة في قلب المنوفية، تقدم جيسي
            فارم تجربة ريفية متكاملة تجمع بين الأكل الفلاحي الأصيل، الأجواء
            العائلية الدافئة، الأنشطة الريفية الممتعة، وجلسات التصوير المميزة.
            استمتع بيوم كامل من الراحة والذكريات الجميلة بعيداً عن صخب المدينة.
          </p>

          <div className={styles.features}>
            <span>🌾 طبيعة خضراء</span>
            <span>🍲 أكل فلاحي أصيل</span>
            <span>📸 جلسات تصوير</span>
            <span>👨‍👩‍👧‍👦 مناسب للعائلات</span>
          </div>

          <div className={styles.actions}>
            <Link href="/booking" className={styles.primaryBtn}>
              احجز الآن
            </Link>

            <Link href="/food" className={styles.secondaryBtn}>
              استكشف المزرعة
            </Link>
          </div>
        </div>

        <div className={styles.imageWrapper}>
          <img
            src="/banner.jpg"
            alt="Jessi Farm"
            className={styles.bannerImage}
          />

          <div className={styles.card}>
            <h3>🌿 جيسي فارم</h3>
            <p>تجربة ريفية فريدة وسط الطبيعة الخلابة</p>
          </div>
        </div>
      </section>
    </main>
  );
}