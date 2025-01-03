import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import PageBanner from "../src/components/PageBanner";
import TestimonialSlider from "../src/components/TestimonialSlider";
import TfCounter from "../src/components/TfCounter";
import { LeftArrow, RightArrow } from "../src/Icons";
import Layout from "../src/layouts/Layout";
import { fourSlider } from "../src/SliderProps";


const About = () => {
  return (
    <Layout bodyClass={"about"}>
      <PageBanner pageName={"Hakkımızda"} />
      <section className="tf-section tf-about">
        <div className="container">
          <div className="row">
            <div className="ol-xl-7 col-lg-7 col-md-12">
              <div className="wrap-img ps-re">
                <div className="img">
                  <img
                    src="assets/images/common/slider-1.png"
                    alt="combined image"
                  />
                </div>
              </div>
            </div>
            <div className="col-xl-5 col-lg-5 col-md-12 col-12">
              <div className="sc-about-2 p-t19">
                <div className="title-heading">
                  <div className="sub-heading clr-pri-3 f-mulish">
                    <span className="inner-sub st-2">Hakkımızda</span>
                    <RightArrow />
                  </div>
                  <h2 className="title clr-pri-2">
                    Akıllı Bir Şekilde Öğreniyoruz, Parlak Bir Gelecek İnşa Ediyoruz
                  </h2>
                </div>
                <div className="inner">
                  <p
                    className="wrap f-mulish clr-pri-4  wow fadeIn animated"
                    data-wow-delay="0.3ms"
                    data-wow-duration="1000ms"
                  >
                    Peyus Kids Okulunda, çocuklarımızın akıllı bir şekilde öğrenmelerini ve geleceğini parlak bir şekilde inşa etmelerini sağlıyoruz.
                  </p>
                  <h4 className="title-line">
                    Okulumuz, Maltepe ilçesinde en başarılı okullardan biridir.
                  </h4>
                  <ul>
                    <li className="st-1 fx">
                      <i className="fas fa-check" />
                      <p className="clr-pri-2">Dışarıda oyun ve aktiviteler</p>
                    </li>
                    <li className="st-2 fx">
                      <i className="fas fa-check" />
                      <p className="clr-pri-2">Spor aktiviteleri</p>
                    </li>
                    <li className="st-3 fx">
                      <i className="fas fa-check" />
                      <p className="clr-pri-2">Sağlıklı yiyecekler</p>
                    </li>
                    <li className="st-4 fx">
                      <i className="fas fa-check" />
                      <p className="clr-pri-2">Etkinlikler ve partiler</p>
                    </li>
                  </ul>
                  <Link href="/kurucularimiz">
                    <a className="fl-btn st-11">
                      <span className="inner">Daha Fazla Oku</span>
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      


      <div className="container">
        <div className="row">

          <div className="col-12">

            {/*/.slider-2*/}
          </div>
        </div>
      </div>


      <section className="tf-section tf-feedback">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="title-heading st-3">
                <div className="sub-heading clr-pri-3 f-mulish">
                  <LeftArrow />
                  <span className="inner-sub st-1">Bizden Notlar</span>
                  <RightArrow />
                </div>
                <h2 className="title clr-pri-2">
                  Kurucularımızın Gözünden{" "}
                  <span className="clr-pri-3">Peyus </span> Kids
                </h2>
              </div>
            </div>
            <div className="col-12 pd0-135">
              <div className="slider-fb">
                <TestimonialSlider />
                {/*/.themesflat-carousel*/}
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="tf-section tf-about">
  <div className="container">
    <div className="row">
      <div className="col-xl-5 col-lg-5 col-md-12 col-12 order-lg-1 order-2">
        <div className="sc-about-2 p-t19">
          <div className="title-heading">
            <div className="sub-heading clr-pri-3 f-mulish">
              <span className="inner-sub st-2">Hakkımızda</span>
              <RightArrow />
            </div>
            <h2 className="title clr-pri-2">
              Akıllı Bir Şekilde Öğreniyoruz, Parlak Bir Gelecek İnşa Ediyoruz
            </h2>
          </div>
          <div className="inner">
            <p className="wrap f-mulish clr-pri-4 wow fadeIn animated" data-wow-delay="0.3ms" data-wow-duration="1000ms">
              Peyus Kids olarak, çocukların öğrenme ve gelişim yolculuğunda onlara rehberlik etmek için buradayız. 0-6 yaş arası çocuklara özel tasarlanmış atölyemizde, oyunla öğrenmeyi bir araya getiriyor, onların yaratıcılıklarını ve potansiyellerini keşfetmelerine olanak tanıyoruz.
            </p>
            <h4 className="">Amacımız:</h4>
            <p>Çocukların hayal gücünü geliştiren, eğlenceli ve eğitici bir atmosfer sunarak onların fiziksel, duygusal ve sosyal gelişimine katkıda bulunmak.</p>
            <h4 className="">Kimleriz?</h4>
            <p>Peyus Kids, psikoloji ve çocuk gelişimi alanında uzman iki kardeşin hayali olarak doğdu. Uzman ekibimizle birlikte her çocuğun bireysel ihtiyaçlarına uygun, modern ve bilimsel yöntemler kullanıyoruz.</p>
          </div>
        </div>
      </div>
      <div className="col-xl-7 col-lg-7 col-md-12 order-lg-2 order-1">
        <div className="sc-about-2 p-t19">
          <div className="inner">
            <h4 className="">Neler Sunuyoruz?</h4>
            <ul>
              <li className="st-1 fx">

                <p className="clr-pri-2">Oyun ve Eğitim Atölyeleri: Çocukların hayal gücünü ve becerilerini destekleyen etkinlikler.</p>
              </li>
              <li className="st-2 fx">

                <p className="clr-pri-2">Aile Danışmanlığı: Ebeveynlerin çocuk gelişimiyle ilgili sorularına rehberlik eden birebir görüşmeler ve geri bildirimler.</p>
              </li>
              <li className="st-3 fx">

                <p className="clr-pri-2">Sihirli Bir Mekân: Pastel tonlardaki sıcak tasarımımızla hem çocuklar hem de ebeveynler için rahat bir ortam.</p>
              </li>
            </ul>
            <h4 className="">Misyonumuz:</h4>
            <p>Her çocuğun kendi hızında öğrenip gelişebileceği güvenli bir alan yaratmak ve ebeveynlere bu yolculukta destek olmak.</p>
            <h4 className="">Vizyonumuz:</h4>
            <p>Çocukların hayal gücüne dokunan, sevgi ve güven dolu bir ortamda onların geleceğe daha güçlü bir şekilde hazırlanmasını sağlamak.</p>

          </div>
        </div>
      </div>
    </div>
  </div>
</section>
    </Layout>

  );
};
export default About;
