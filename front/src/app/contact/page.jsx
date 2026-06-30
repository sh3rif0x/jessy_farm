import styles from "./page.module.css";

export default function ContactPage() {
  return (
    <main className={styles.page}>
      <section className={styles.hero}>
        <span className={styles.badge}>📞 تواصل معنا</span>
        <h1>يسعدنا التواصل معكم</h1>
        <p>
          للاستفسار أو الحجز أو معرفة تفاصيل الأنشطة والباقات المتاحة في
          جيسي فارم، يمكنكم التواصل معنا في أي وقت وسنكون سعداء بخدمتكم.
        </p>
      </section>

      <section className={styles.container}>
        <div className={styles.formCard}>
          <h2>أرسل رسالة</h2>
          <form className={styles.form}>
            <input type="text" placeholder="الاسم بالكامل" />
            <input type="tel" placeholder="رقم الهاتف" />
            <input type="email" placeholder="البريد الإلكتروني" />
            <select>
              <option>اختر نوع الاستفسار</option>
              <option>حجز يوم عائلي</option>
              <option>رحلة مدرسية</option>
              <option>حفلة عيد ميلاد</option>
              <option>استفسار عام</option>
            </select>
            <textarea rows="6" placeholder="اكتب رسالتك هنا..."></textarea>
            <button type="submit">إرسال الرسالة</button>
          </form>
        </div>

        <div className={styles.imageCard}>
          <img src="/banner8.jpg" alt="جيسي فارم" />
        </div>
      </section>

      <section className={styles.mapSection}>
        <h2>موقع جيسي فارم</h2>
        <div className={styles.mapPlaceholder}>
          <iframe
            src="https://www.google.com/maps?q=Jessey%20Farm&output=embed"
            title="موقع جيسي فارم"
            loading="lazy"
            allowFullScreen
          />
          <a
            href="https://share.google/FEblea8KB8ToWJr5G"
            target="_blank"
            rel="noreferrer"
            className={styles.mapLink}
          >
            افتح الموقع في خرائط جوجل
          </a>
        </div>
      </section>
    </main>
  );
}
