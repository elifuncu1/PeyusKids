import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import PageBanner from "../src/components/PageBanner";
import TestimonialSlider from "../src/components/TestimonialSlider";
import TfCounter from "../src/components/TfCounter";
import { LeftArrow, RightArrow } from "../src/Icons";
import Layout from "../src/layouts/Layout";
import { fourSlider } from "../src/SliderProps";


const Hizmetlerimiz = () => {
  return (
    <Layout bodyClass={"Hizmetlerimiz"}>
      <PageBanner pageName={"Hizmetlerimiz"} />
      
      <div className="container" style={{ marginBottom: "100px", marginTop: "100px" }}>
  <div className="row">
    <div className="col-12">
      <div className="sc-about-2 p-t19">
        {/* Oyun Grupları */}
        <div className="title-heading">
          <div className="sub-heading clr-pri-3 f-mulish">
            <h2 className="inner-sub st-2" style={{ fontFamily: "Caveat", color: "#e9857a", fontSize: "48px" }}>
            Oyun Grupları
            </h2>
          </div>
        </div>

        {/* İçerik */}
        <div className="inner">
          <p >
          Oyun, çocukların dünyayı keşfetme, öğrenme ve sosyalleşme sürecinin en önemli parçalarından biridir. Oyun grupları ise çocukların bu süreci zenginleştiren, güvenli ve eğlenceli bir ortamda akranlarıyla bir araya gelerek sosyalleştiği ve gelişimlerine katkıda bulunduğu etkinliklerdir.
          </p> 

        </div>
        
      </div>
      <div className="sc-about-2 p-t19">
        {/* Oyun Grupları Amacı*/}
        <div className="title-heading">
          <div className="sub-heading clr-pri-3 f-mulish">
            <h2 className="inner-sub st-2" style={{ fontFamily: "Caveat", color: "#e9857a", fontSize: "48px" }}>
            Oyun Grubunun Amacı
            </h2>
          </div>
        </div>

        {/* İçerik */}
        <div className="inner">
          <p >
          Oyun gruplarının temel amacı, çocukların sosyal, duygusal, motor ve bilişsel becerilerini desteklemektir. Bu gruplarda çocuklar:          </p> 
        </div>
        <div>
        <ul style={{ listStyleType: "none", paddingLeft: 0, margin: "1rem 0", fontSize: 15 }}>
  <li ><strong>Paylaşmayı öğrenir:</strong> Ortak oyuncaklarla oynayarak paylaşma ve sıra bekleme gibi becerileri geliştirirler.</li>
  <li ><strong>Sosyalleşir:</strong> Akranlarıyla iletişim kurarak özgüvenlerini artırırlar.</li>
  <li ><strong>Duygusal gelişim sağlar:</strong> Grup içindeki dinamikler sayesinde empati ve problem çözme becerileri kazanırlar.</li>
  <li ><strong>Fiziksel becerilerini geliştirir:</strong> Hareket gerektiren oyunlarla motor becerileri desteklenir.</li>
</ul>
        </div>
        <div className="inner">
          <p >
          Oyun grupları sadece eğlenceli vakit geçirmekle kalmaz, aynı zamanda çocuğunuzun gelişimine doğrudan katkıda bulunur:        </p> 
        </div>
        <div>
        <ul style={{ listStyleType: "none", paddingLeft: 0, margin: "1rem 0", fontSize: 15 }}>
  <li ><strong>Dil gelişimi:</strong> Çocuklar oyun sırasında birbirleriyle konuşarak kelime dağarcıklarını genişletir.</li>
  <li ><strong>Problem çözme becerisi:</strong> Oyun sırasında karşılaştıkları küçük sorunları çözerek karar verme yeteneklerini geliştirirler.</li>
  <li ><strong>Duygusal dayanıklılık:</strong> Gruplarda yaşanan küçük anlaşmazlıklar, çocuklara duygusal kontrol becerisi kazandırır.</li>
</ul>
        </div>
        <div className="inner">
          <p >
          Oyun grupları, çocuklar için olduğu kadar anne-babalar için de bir fırsat sunar. Aileler, diğer ebeveynlerle tanışarak deneyimlerini paylaşabilir ve çocuklarının gelişim süreçlerini daha yakından gözlemleyebilir. </p>
<p>Oyun grupları, çocukların büyüme ve gelişme sürecinde değerli bir rol oynar. Çocuğunuzun hem eğlenmesini hem de öğrenmesini istiyorsanız, oyun gruplarını tercih edebilirsiniz. Peyus Kids olarak sunduğumuz oyun gruplarımızda çocuklarınızın gelişimini desteklemeye ve onlara güvenli bir oyun ortamı sunmaya özen gösteriyoruz.
        </p> 
        </div>
        {/* Gelişim Değerlendirmesi */}
<div className="title-heading">
  <div className="sub-heading clr-pri-3 f-mulish">
    <h2 className="inner-sub st-2" style={{ fontFamily: "Caveat", color: "#e9857a", fontSize: "48px" }}>
      Gelişim Değerlendirmesi
    </h2>
  </div>
</div>

{/* İçerik */}
<div className="inner">
  <p>
    Çocukların büyüme süreçleri sadece fiziksel değil, aynı zamanda zihinsel, duygusal, sosyal ve dil gelişimini de içerir. Gelişim değerlendirmesi, bu alanların her birini dikkatle inceleyerek çocuğun yaşına uygun beceriler kazanıp kazanmadığını anlamak için yapılan bir süreçtir.
  </p>
</div>
<div>
  <ul style={{ listStyleType: "none", paddingLeft: 0, margin: "1rem 0", fontSize: 15 }}>
    <li><strong>Çocuğun yaşına uygun beceriler kazanıp kazanmadığı belirlenir.</strong></li>
    <li><strong>Olası gecikmeler veya zorluklar erken fark edilir.</strong></li>
    <li><strong>Çocuğun güçlü yönleri ve desteklenmesi gereken alanlar tespit edilir.</strong></li>
    <li><strong>Gerekirse uzman müdahalesi için yönlendirme yapılır.</strong></li>
  </ul>
</div>

<div className="inner">
  <p>
    Gelişim değerlendirmesi, çocuğun bir bütün olarak ele alınmasını sağlar. Değerlendirilen temel alanlar şunlardır:
  </p>
</div>
<div>
  <ul style={{ listStyleType: "none", paddingLeft: 0, margin: "1rem 0", fontSize: 15 }}>
    <li><strong>Motor Gelişim:</strong> Çocuğun ince ve kaba motor becerileri (örneğin, nesneleri tutma, koşma, zıplama gibi).</li>
    <li><strong>Dil Gelişimi:</strong> Kelimeleri anlama, ifade etme ve iletişim kurma becerileri.</li>
    <li><strong>Bilişsel Gelişim:</strong> Problem çözme, mantık yürütme ve öğrenme yetenekleri.</li>
    <li><strong>Sosyal ve Duygusal Gelişim:</strong> Akran ilişkileri, duygularını ifade etme ve kontrol etme becerileri.</li>
    <li><strong>Öz Bakım Becerileri:</strong> Günlük ihtiyaçlarını bağımsız olarak karşılayabilme (örneğin, yemek yeme, giyinme).</li>
  </ul>
</div>

<div className="inner">
  <p>
    Değerlendirme süreci, uzman kişiler tarafından, oyun temelli yöntemler ve bilimsel ölçüm araçlarıyla gerçekleştirilir. Aşağıdaki yöntemler sıklıkla kullanılır:
  </p>
</div>
<div>
  <ul style={{ listStyleType: "none", paddingLeft: 0, margin: "1rem 0", fontSize: 15 }}>
    <li><strong>Gözlem:</strong> Çocuğun doğal bir ortamda sergilediği davranışlar değerlendirilir.</li>
    <li><strong>Anket ve Formlar:</strong> Anne-babalardan alınan bilgiler, çocuğun günlük hayattaki becerileri hakkında önemli ipuçları sağlar.</li>
    <li><strong>Standardize Testler:</strong> Çocuğun yaşına uygun gelişim seviyesini ölçen testler uygulanır.</li>
  </ul>
</div>

<div className="inner">
  <p>
    Erken çocukluk dönemi, gelişimin en hızlı olduğu dönemdir. Bu süreçte yapılan bir değerlendirme, çocuğun ihtiyaçlarının erken fark edilmesini sağlar. Örneğin:
  </p>
</div>
<div>
  <ul style={{ listStyleType: "none", paddingLeft: 0, margin: "1rem 0", fontSize: 15 }}>
    <li><strong>Erken Müdahale:</strong> Gelişimsel gecikme tespit edilirse, erken dönemde başlanan destekleyici çalışmalar çok daha etkili olur.</li>
    <li><strong>Bilinçli Yönlendirme:</strong> Anne-babalar, çocuklarını desteklemek için hangi alanlara odaklanmaları gerektiğini öğrenir.</li>
    <li><strong>Okul Hazırlığı:</strong> Çocuğun okula başlamadan önce temel becerilere sahip olup olmadığını belirler.</li>
  </ul>
</div>

<div className="inner">
  <p>
    Peyus Kids olarak, uzman kadromuzla çocuklarınızın gelişimini anlamaya ve onları en iyi şekilde desteklemeye hazırız. Oyun temelli değerlendirme süreçlerimizle, çocuğunuzun güçlü yanlarını keşfederken desteklenmesi gereken alanlarda doğru yönlendirmeler sunuyoruz.
  </p>
  <p>
    Eğer çocuğunuzun gelişimiyle ilgili merak ettiğiniz noktalar varsa, bizi ziyaret edebilir ve değerlendirme sürecine birlikte başlayabiliriz!
  </p>
</div>
{/* Ebeveyn Danışmanlığı */}
<div className="title-heading">
  <div className="sub-heading clr-pri-3 f-mulish">
    <h2 className="inner-sub st-2" style={{ fontFamily: "Caveat", color: "#e9857a", fontSize: "48px" }}>
      Ebeveyn Danışmanlığı
    </h2>
  </div>
</div>

{/* İçerik */}
<div className="inner">
  <p>
    Ebeveyn olmak, hem keyifli hem de zorlu bir yolculuktur. Çocukların ihtiyaçlarını anlamak, onları desteklemek ve en sağlıklı şekilde yönlendirmek zaman zaman karmaşık ve zorlayıcı olabilir. Ebeveyn danışmanlığı, ailelerin bu yolculukta karşılaştıkları sorunlara çözüm bulmalarına, çocuklarıyla daha güçlü bir bağ kurmalarına ve etkili ebeveynlik becerileri geliştirmelerine yardımcı olan bir rehberlik sürecidir.
  </p>
</div>

<div>
  <ul style={{ listStyleType: "none", paddingLeft: 0, margin: "1rem 0", fontSize: 15 }}>
    <li><strong>Çocuklarının davranışlarını ve ihtiyaçlarını daha iyi anlamayı öğrenir.</strong></li>
    <li><strong>Sorunlarla baş etme yöntemlerini geliştirir.</strong></li>
    <li><strong>Çocuklarıyla etkili ve sağlıklı iletişim kurmayı öğrenir.</strong></li>
    <li><strong>Kendilerini daha güvende ve bilinçli bir şekilde ebeveynlik yaparken bulurlar.</strong></li>
  </ul>
</div>

<div className="inner">
  <p>
    Hangi Durumlarda Ebeveyn Danışmanlığına Başvurulur?
  </p>
</div>

<div>
  <ul style={{ listStyleType: "none", paddingLeft: 0, margin: "1rem 0", fontSize: 15 }}>
    <li><strong>Davranış Sorunları:</strong> Çocuğun öfke nöbetleri, inatçılık, sınır koyma sorunları gibi durumlarında.</li>
    <li><strong>Uyum ve Kaygı Problemleri:</strong> Çocuğun okul, kardeş doğumu, taşınma gibi değişimlere adapte olmakta zorlanması durumunda.</li>
    <li><strong>Akademik Zorluklar:</strong> Çocuğun derslerde motivasyon eksikliği ya da öğrenme güçlüğü yaşaması.</li>
    <li><strong>Teknoloji Kullanımı:</strong> Çocukların ekran süresi ve teknoloji bağımlılığıyla başa çıkma.</li>
    <li><strong>Ebeveynlik Yöntemleri:</strong> Anne-babaların disiplin, sevgi ve sınır koyma konularında daha bilinçli hale gelmek istemesi.</li>
  </ul>
</div>

<div className="inner">
  <p>
    Ebeveyn Danışmanlığında Neler Yapılır?
  </p>
</div>

<div>
  <ul style={{ listStyleType: "none", paddingLeft: 0, margin: "1rem 0", fontSize: 15 }}>
    <li><strong>Sorunların Belirlenmesi:</strong> Ailelerin yaşadığı zorluklar detaylı bir şekilde konuşulur ve ele alınır.</li>
    <li><strong>Farkındalık ve Eğitim:</strong> Anne-babalar, çocuğun gelişim dönemine uygun davranışlar ve ihtiyaçlar hakkında bilgilendirilir.</li>
    <li><strong>Çözüm Önerileri:</strong> Spesifik sorunlara yönelik uygulanabilir ve pratik stratejiler geliştirilir.</li>
    <li><strong>Takip ve Destek:</strong> Aileye önerilen yöntemler takip edilir ve gerektiğinde yeniden düzenlenir.</li>
  </ul>
</div>

<div className="inner">
  <p>
    Ebeveyn Danışmanlığının Faydaları
  </p>
</div>

<div>
  <ul style={{ listStyleType: "none", paddingLeft: 0, margin: "1rem 0", fontSize: 15 }}>
    <li><strong>Güçlü Bağlar Kurma:</strong> Çocuklarla ebeveyn arasındaki bağların daha sağlam ve sağlıklı hale gelmesine yardımcı olur.</li>
    <li><strong>Stres Yönetimi:</strong> Anne-babaların karşılaştıkları sorunlarla başa çıkma becerilerini geliştirir.</li>
    <li><strong>Davranışların Yönetimi:</strong> Çocukların istenmeyen davranışlarını değiştirmek için etkili yöntemler sunar.</li>
    <li><strong>Kendine Güven:</strong> Anne-babaların ebeveynlik konusundaki özgüvenini artırır.</li>
  </ul>
</div>

<div className="inner">
  <p>
    Peyus Kids olarak, ebeveynlerin çocuklarını daha iyi anlamalarına, güçlü iletişim kurmalarına ve etkili çözümler geliştirmelerine yardımcı oluyoruz. Deneyimli uzmanlarımız, ailelerin ihtiyaçlarına göre bireysel ve özel bir danışmanlık süreci sunar.
  </p>
  <p>
    Ebeveynlik yolculuğunuzda destek arıyorsanız, Peyus Kids her adımda yanınızda!
  </p>
</div>
{/* Çift Dilli Oyun Grupları */}
<div className="title-heading">
  <div className="sub-heading clr-pri-3 f-mulish">
    <h2 className="inner-sub st-2" style={{ fontFamily: "Caveat", color: "#e9857a", fontSize: "48px" }}>
      Çift Dilli Oyun Grupları
    </h2>
  </div>
</div>

{/* İçerik */}
<div className="inner">
  <p>
    Erken çocukluk dönemi, dil öğrenimi için en kritik ve verimli dönemlerden biridir. Çift dilli oyun grupları, çocukların birden fazla dili öğrenmesine destek olan ve bunu eğlenceli bir oyun ortamında gerçekleştiren etkinliklerdir. Bu gruplar, çocukların dil becerilerini geliştirmelerine, kültürel farkındalık kazanmalarına ve farklı dillere karşı doğal bir yatkınlık oluşturmalarına yardımcı olur.
  </p>
  <p>
    Bu oyun gruplarının temel amacı, çocuklara iki dili birden doğal bir ortamda öğretmek ve her iki dilde de kendilerini ifade edebilmelerini sağlamaktır. Çift dilli oyun gruplarında çocuklar:
  </p>
</div>

<div>
  <ul style={{ listStyleType: "none", paddingLeft: 0, margin: "1rem 0", fontSize: 15 }}>
    <li><strong>Yeni bir dili oyunlarla ve günlük iletişimle öğrenir.</strong></li>
    <li><strong>Farklı kültürlere karşı açık fikirli olmayı öğrenir.</strong></li>
    <li><strong>İki dilde de iletişim kurma becerisi kazanır.</strong></li>
    <li><strong>Beyin gelişimi açısından desteklenir, çünkü çift dil öğrenimi bilişsel esneklik sağlar.</strong></li>
  </ul>
</div>

<div className="inner">
  <p>
    Çift dilli oyun gruplarında çocukların dil becerilerini geliştirmek için çeşitli etkinlikler düzenlenir. Bu etkinlikler hem eğlenceli hem de öğretici bir şekilde hazırlanır. Örnek aktiviteler:
  </p>
</div>

<div>
  <ul style={{ listStyleType: "none", paddingLeft: 0, margin: "1rem 0", fontSize: 15 }}>
    <li><strong>Şarkılar ve tekerlemeler:</strong> Çocuklar, iki dilde şarkılar söyleyerek ve tekerlemeler öğrenerek dil becerilerini güçlendirir.</li>
    <li><strong>Hikaye saatleri:</strong> Farklı dillerde kitaplar okunur ve çocukların kelime dağarcığı geliştirilir.</li>
    <li><strong>Sanat ve el işi çalışmaları:</strong> Etkinlikler sırasında iki dilde talimatlar verilerek çocukların diller arası geçiş yapması teşvik edilir.</li>
    <li><strong>Oyunlar:</strong> Grup oyunları aracılığıyla çocuklar doğal bir şekilde her iki dili de kullanma fırsatı bulur.</li>
  </ul>
</div>

<div className="inner">
  <p>
    Çift dilli oyun grupları, çocuklar için birçok avantaj sağlar:
  </p>
</div>

<div>
  <ul style={{ listStyleType: "none", paddingLeft: 0, margin: "1rem 0", fontSize: 15 }}>
    <li><strong>Doğal Öğrenme Ortamı:</strong> Dil öğrenimi, yapay bir süreç olmaktan çıkar ve oyunlar aracılığıyla doğal bir şekilde gerçekleşir.</li>
    <li><strong>Bilişsel Gelişim:</strong> Çift dil öğrenen çocukların problem çözme, hafıza ve dikkat gibi bilişsel becerilerinde gelişme görülür.</li>
    <li><strong>Sosyal ve Kültürel Farkındalık:</strong> Çocuklar, farklı kültürleri tanıma ve onlara saygı duyma becerisi kazanır.</li>
    <li><strong>Daha Hızlı Dil Öğrenimi:</strong> Çocuklar, oyun temelli yöntemlerle dil öğrenirken daha hızlı ve kalıcı bir şekilde yeni kelimeler ve gramer yapıları öğrenir.</li>
  </ul>
</div>

<div className="inner">
  <p>
    Peyus Kids olarak, çift dilli oyun gruplarımızda çocuklara eğlenirken öğrenebilecekleri bir ortam sunuyoruz. Uzmanlarımız, her çocuğun dil seviyesine uygun etkinlikler tasarlayarak onları destekler. Amacımız, çocukların hem dil hem de kültürel farkındalık açısından zenginleşmesine katkıda bulunmak.
  </p>
  <p>
    Çocuğunuzun çift dil öğrenimiyle ilgili daha fazla bilgi almak ve programlarımıza katılmak için bizimle iletişime geçebilirsiniz!
  </p>
</div>






      </div>
    </div>
  </div>
</div>

    </Layout>

  );
};
export default Hizmetlerimiz;
