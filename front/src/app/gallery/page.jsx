import styles from "./page.module.css";

const galleryItems = [
  { src: "/banner3.jpg", alt: "أجواء المزرعة" },
  { src: "/banner4.jpg", alt: "جلسة عائلية" },
  { src: "/banner5.jpg", alt: "مخبز ريفي" },
  { src: "/banner6.jpg", alt: "أطفال يلعبون" },
  { src: "/banner7.jpg", alt: "طبيعة خضراء" },
  { src: "/banner8.jpg", alt: "منتجات طازجة" },
  { src: "/banner9.jpg", alt: "جلسة تصوير" },
  { src: "/banner10.jpg", alt: "ليالي الريف" },
];

export default function GalleryPage() {
  return (
    <main className={styles.page}>
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <span className={styles.badge}>📸 معرض الصور</span>
          <h1>لحظات جيسي فارم</h1>
          <p>
            استعرض مجموعة من أجمل الصور التي تبرز الأجواء الريفية، الأنشطة العائلية،
            الأكلات الطازجة، وجمال الطبيعة داخل جيسي فارم.
          </p>
        </div>
      </section>

      <section className={styles.galleryGrid}>
        {galleryItems.map((item) => (
          <article key={item.src} className={styles.card}>
            <img src={item.src} alt={item.alt} loading="lazy" />
            <div className={styles.cardOverlay}>
              <p>{item.alt}</p>
            </div>
          </article>
        ))}
      </section>
    </main>
  );
}
