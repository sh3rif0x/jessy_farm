"use client";

import { useEffect, useState } from "react";
import styles from "./page.module.css";

function Counter({ target, duration = 2000 }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime;
    let animationId;

    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const numTarget = parseInt(target.toString().replace(/\D/g, ""), 10);
      setCount(Math.floor(numTarget * progress));

      if (progress < 1) {
        animationId = requestAnimationFrame(animate);
      } else {
        setCount(numTarget);
      }
    };

    animationId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationId);
  }, [target, duration]);

  const displayTarget = target.toString();
  return `${count}${displayTarget.replace(/\d/g, "")}`;
}

export default function FeaturedSection() {
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
          <img src="/banner.jpg" alt="جيسي فارم" className={styles.heroImage} />
          <div className={styles.infoCard}>
            <h3>جيسي فارم</h3>
            <p>حيث الأرض الخضراء والأكل الفلاحي من زمان</p>
          </div>
        </div>
      </section>

      <section className={styles.stats}>
        <div className={styles.statCard}>
          <h2><Counter target="4000" duration={2000} /></h2>
          <p>زائر</p>
        </div>
        <div className={styles.statCard}>
          <h2><Counter target="30000" duration={2200} /></h2>
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
