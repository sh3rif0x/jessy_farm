import styles from "./page.module.css";

const activities = [
  {
    id: 1,
    title: "جولة الخيل",
    desc: "تمتع بركوب الخيل وسط الحقول الخضراء والأجواء الريفية.",
    image: "/banner6.jpg",
  },
  {
    id: 2,
    title: "جلسة تصوير",
    desc: "التقط أجمل الذكريات العائلية في أجواء طبيعية خلابة.",
    image: "/banner7.jpg",
  },
  {
    id: 3,
    title: "لعبة العائلة",
    desc: "أنشطة ممتعة لكل الأسرة من سباقات ومسابقات ترفيهية.",
    image: "/banner8.jpg",
  },
  {
    id: 4,
    title: "حفلات الشواء",
    desc: "استمتع بطبق شواء لذيذ في جلسة خارجية مع الأصدقاء.",
    image: "/banner4.jpg",
  },
  {
    id: 5,
    title: "مغامرة للأطفال",
    desc: "مساحة آمنة ومليئة بالمرح للأطفال والأنشطة الترفيهية.",
    image: "/banner5.jpg",
  },
  {
    id: 6,
    title: "جلسة المساء",
    desc: "أمسية نحب الطبيعة والنجوم مع مشروبات دافئة.",
    image: "/banner10.jpg",
  },
];

export default function ActivitiesPage() {
  return (
    <main className={styles.page}>
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <span className={styles.badge}>🏞️ الأنشطة</span>
          <h1>عِش أمتع لحظات جيسي فارم</h1>
          <p>
            اختر من بين مجموعة أنشطة فريدة للعائلات، الأطفال، والمجموعات، كل
            تجربة مصممة لتمنحك لحظات لا تُنسى في قلب الريف.
          </p>
        </div>
      </section>

      <section className={styles.grid}>
        {activities.map((activity) => (
          <article key={activity.id} className={styles.card}>
            <div className={styles.cardImage}>
              <img src={activity.image} alt={activity.title} />
            </div>
            <div className={styles.cardBody}>
              <h2>{activity.title}</h2>
              <p>{activity.desc}</p>
              <button>اعرف المزيد</button>
            </div>
          </article>
        ))}
      </section>
    </main>
  );
}
