import React from "react";
import styles from "./page.module.css";

export default function Page() {
  return (
    <main className={styles.page}>
      <section className={styles.aboutSection}>
        <div className={styles.videoCard}>
          <div className={styles.videoEmbed}>
            <iframe
              src="https://www.facebook.com/plugins/video.php?href=https://www.facebook.com/reel/1304614766907656&show_text=false&width=900"
              title="Facebook Reel - Jessi Farm"
              allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>

          <div className={styles.videoFooter}>
            <h3>تقرير عن المزرعة</h3>
            <p>عرض سريع للفيديو — يمكنك فتحه ملء الشاشة أو مشاهدته على فيسبوك.</p>
            <a href="https://web.facebook.com/reel/1304614766907656" target="_blank" rel="noopener noreferrer">مشاهدة على فيسبوك</a>
          </div>
        </div>

        <div className={styles.aboutCardBottom}>
          <h2>من نحن</h2>
          <p>
            مرحبًا بكم في جيسي فارم، وجهتكم للاستمتاع بتجربة ريفية مصرية أصيلة في
            قلب الطبيعة. نحن لا نقدم مجرد زيارة لمزرعة، بل نمنحكم فرصة للعيش وسط
            الأجواء الريفية الحقيقية، والاستمتاع بالأكلات الفلاحية التقليدية، والأنشطة
            العائلية الممتعة، وجلسات التصوير وسط المساحات الخضراء والمناظر الطبيعية
            الخلابة.
          </p>
          <p>
            تأسست جيسي فارم على يد المرشد السياحي <strong>أحمد هلال</strong>، الذي يحمل
            شغفًا كبيرًا بالتراث الريفي المصري والثقافة المحلية. ومن خلال خبرته في
            مجال السياحة، سعى إلى إنشاء مكان يجمع بين البساطة والجمال والطابع المصري
            الأصيل، ليمنح الزوار تجربة فريدة تجمع بين الترفيه والتعرف على حياة الريف
            عن قرب.
          </p>
          <p>
            📍 <strong>الموقع:</strong> قرية إبنهس، مركز قويسنا، محافظة المنوفية، جمهورية
            مصر العربية.
          </p>
          <p>
            في جيسي فارم ستجد بيئة مناسبة للعائلات والأصدقاء ومحبي الطبيعة، حيث يمكنكم
            الاستمتاع بالأجواء الريفية، والتعرف على المأكولات التقليدية، والتقاط أجمل
            الصور التذكارية، وقضاء يوم هادئ بعيدًا عن صخب المدينة.
          </p>
          <p>
            نتطلع لاستقبالكم ومشاركتكم تجربة مصر الريفية الأصيلة بكل تفاصيلها.
          </p>
        </div>
      </section>
    </main>
  );
}