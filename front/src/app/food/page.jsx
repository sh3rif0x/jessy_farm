import styles from "./food.module.css";

const foods = [
  {
    id: 1,
    image: "/food/item1.jpg",
    title: "المشاوي الفلاحية",
    desc: "ألذ المشويات المطهية على الفحم وسط الطبيعة.",
  },
  {
    id: 2,
    image: "/food/item2.jpg",
    title: "الفطير المشلتت",
    desc: "فطير فلاحي طازج يقدم مع العسل والجبن.",
  },
  {
    id: 3,
    image: "/food/item8.jpg",
    title: "طاجن الفراخ",
    desc: "فراخ بلدي مطهية داخل الفرن البلدي.",
  },
  {
    id: 4,
    image: "/food/item6.jpg",
    title: "الكفتة",
    desc: "كفتة مشوية على الفحم بطعم ريفي أصيل.",
  },
  {
    id: 5,
    image: "/food/item11.jpg",
    title: "الفراخ المشوية",
    desc: "دجاج مشوي بتتبيلة جيسي فارم الخاصة.",
  },
  {
    id: 6,
    image: "/food/item7.jpg",
    title: "الأرز المعمر",
    desc: "أرز معمر بالطريقة المصرية التقليدية.",
  },
];

export default function FoodList() {
  return (
    <section className={styles.foodSection}>
      <div className={styles.sectionTitle}>
        <span>Traditional Food</span>
        <h2>الأكلات الريفية الأصيلة</h2>
        <p>
          استمتع بأشهى المأكولات المصرية المحضرة من مكونات طازجة داخل جيسي فارم.
        </p>
      </div>

      <div className={styles.foodGrid}>
        {foods.map((food) => (
          <div className={styles.foodCard} key={food.id}>
            <div className={styles.imageBox}>
              <img src={food.image} alt={food.title} />
            </div>

            <div className={styles.foodInfo}>
              <h3>{food.title}</h3>
              <p>{food.desc}</p>
              <button>اعرف المزيد</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}