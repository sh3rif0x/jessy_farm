import styles from "./page.module.css";
export default function ContactPage() {
    return ( <main className= {
        styles.page
    }
    > <section className= {
        styles.hero
    }
    > <span className= {
        styles.badge
    }
    >📞 تواصل معنا</span> <h1>يسعدنا التواصل معكم</h1> <p> للاستفسار أو الحجز أو معرفة تفاصيل الأنشطة والباقات المتاحة في جيسي فارم، يمكنكم التواصل معنا في أي وقت وسنكون سعداء بخدمتكم. </p> </section> <section className= {
        styles.container
    }
    > <div className= {
        styles.contactInfo
    }
    > <h2>معلومات التواصل</h2> <div className= {
        styles.infoCard
    }
    > <span>📱</span> <div> <h3>الهاتف وواتساب</h3> <p>01018696230</p> </div> </div> <div className= {
        styles.infoCard
    }
    > <span>📍</span> <div> <h3>العنوان</h3> <p>قرية أبنهس - مركز قويسنا - المنوفية</p> </div> </div> <div className= {
        styles.infoCard
    }
    > <span>🌿</span> <div> <h3>جيسي فارم</h3> <p>حيث الأرض الخضراء والأكل الفلاحي الأصيل</p> </div> </div> <div className= {
        styles.socials
    }
    > <a href="#">Facebook</a> <a href="#">Instagram</a> <a href="#">TikTok</a> </div> </div> <div className= {
        styles.formCard
    }
    > <h2>أرسل رسالة</h2> <form className= {
        styles.form
    }
    > <input type="text" placeholder="الاسم بالكامل" /> <input type="tel" placeholder="رقم الهاتف" /> <input type="email" placeholder="البريد الإلكتروني" /> <select> <option>اختر نوع الاستفسار</option> <option>حجز يوم عائلي</option> <option>رحلة مدرسية</option> <option>حفلة عيد ميلاد</option> <option>استفسار عام</option> </select> <textarea rows="6" placeholder="اكتب رسالتك هنا..." ></textarea> <button type="submit"> إرسال الرسالة </button> </form> </div> </section> <section className= {
        styles.mapSection
    }
    > <h2>موقع جيسي فارم</h2> <div className= {
        styles.mapPlaceholder
    }
    > 🗺️ Google Maps Location </div> </section> </main>);
}