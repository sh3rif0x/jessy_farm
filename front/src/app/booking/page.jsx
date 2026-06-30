import styles from "./page.module.css";

const stats = [
  { label: "عدد الزوار", value: "1200+" },
  { label: "جلسات محجوزة", value: "540" },
  { label: "ساعات متاحة", value: "24/7" },
];

const packages = [
  "حجز يوم عائلي",
  "حفلة عيد ميلاد",
  "جلسة تصوير",
  "نشاط مدرسي",
  "طلب خاص",
];

export default function BookingPage() {
  return (
    <main className={styles.page}>
      <section className={styles.hero}>
        <div className={styles.heroText}>
          <span>📅 احجز زيارتك</span>
          <h1>سجل الآن لحجز تجربتك في جيسي فارم</h1>
          <p>
            اختر اليوم والساعة وعدد الضيوف، واحجز تجربة ريفية مميزة للعائلة أو
            الاصدقاء مع أطيب الأكلات والأنشطة.
          </p>
        </div>
        <div className={styles.heroStats}>
          {stats.map((item) => (
            <div key={item.label} className={styles.statCard}>
              <h2>{item.value}</h2>
              <p>{item.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className={styles.bookingSection}>
        <div className={styles.bookingCard}>
          <h2>تفاصيل الحجز</h2>
          <form className={styles.form}>
            <div className={styles.row}>
              <label className={styles.formLabel}>
                الاسم بالكامل
                <input className={styles.formInput} type="text" placeholder="مثال: محمد علي" />
              </label>
              <label className={styles.formLabel}>
                رقم الهاتف
                <input className={styles.formInput} type="tel" placeholder="مثال: 01012345678" />
              </label>
            </div>

            <div className={styles.row}>
              <label className={styles.formLabel}>
                البريد الإلكتروني
                <input className={styles.formInput} type="email" placeholder="example@mail.com" />
              </label>
              <label className={styles.formLabel}>
                عدد الضيوف
                <input className={styles.formInput} type="number" min="1" defaultValue="4" />
              </label>
            </div>

            <div className={styles.row}>
              <label className={styles.formLabel}>
                التاريخ
                <input className={styles.formInput} type="date" />
              </label>
              <label className={styles.formLabel}>
                الوقت
                <input className={styles.formInput} type="time" />
              </label>
            </div>

            <label className={styles.formLabel}>
              نوع الحجز
              <select className={styles.formSelect}>
                <option>اختر نوع الحجز</option>
                {packages.map((item) => (
                  <option key={item} value={item}>
                    {item}
                  </option>
                ))}
              </select>
            </label>

            <label className={styles.formLabel}>
              ملاحظات إضافية
              <textarea className={styles.formTextarea} rows="5" placeholder="اكتب أي تفاصيل إضافية هنا..."></textarea>
            </label>

            <button className={styles.formButton} type="submit">أرسل طلب الحجز</button>
          </form>
        </div>

        <aside className={styles.infoCard}>
          <h3>ماذا ستحصل عليه</h3>
          <ul>
            <li>اختيار اليوم والساعة بسهولة</li>
            <li>تأكيد سريع عبر الواتساب أو البريد</li>
            <li>خدمات ضيافة وأنشطة للأطفال</li>
            <li>خيارات طعام خاصة للمجموعات</li>
          </ul>
          <div className={styles.highlight}>
            <span>مواعيد العمل</span>
            <p>من 9 صباحاً حتى 11 مساءً طوال أيام الأسبوع</p>
          </div>
        </aside>
      </section>
    </main>
  );
}
