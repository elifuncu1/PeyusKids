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
      
  <div className="container" style={{marginBottom: "100px", marginTop: "100px"}}>
    <div className="row">
      <div className="col-xl-5 col-lg-5 col-md-12 col-12 order-lg-1 order-2">
        <div className="sc-about-2 p-t19">
          <div className="title-heading">
            <div className="sub-heading clr-pri-3 f-mulish">
              <h4 className="" style={{fontFamily: "Caveat", color: "#e9857a",fontSize: "40px"}}>Hakkımızda</h4>

            </div>
          </div>
          <div className="inner">
            <p className="clr-pri-2" data-wow-delay="0.3ms" data-wow-duration="1000ms">
              Peyus Kids olarak, çocukların öğrenme ve gelişim yolculuğunda onlara rehberlik etmek için buradayız. 0-6 yaş arası çocuklara özel tasarlanmış atölyemizde, oyunla öğrenmeyi bir araya getiriyor, onların yaratıcılıklarını ve potansiyellerini keşfetmelerine olanak tanıyoruz.
            </p>
            <br></br>
            <h4 className="" style={{fontFamily: "Caveat", color: "#e9857a",fontSize: "40px"}}>Amacımız:</h4>
            <p>Çocukların hayal gücünü geliştiren, eğlenceli ve eğitici bir atmosfer sunarak onların fiziksel, duygusal ve sosyal gelişimine katkıda bulunmak.</p>
            <br></br>
            <h4 className="" style={{fontFamily: "Caveat", color: "#e9857a",fontSize: "40px"}}>Kimleriz?</h4>
            <p>Peyus Kids, psikoloji ve çocuk gelişimi alanında uzman iki kardeşin hayali olarak doğdu. Uzman ekibimizle birlikte her çocuğun bireysel ihtiyaçlarına uygun, modern ve bilimsel yöntemler kullanıyoruz.</p>
          </div>
        </div>
      </div>
      <div className="col-xl-7 col-lg-7 col-md-12 order-lg-2 order-1">
        <div className="sc-about-2 p-t19">

            <h4 className="" style={{fontFamily: "Caveat", color: "#e9857a",fontSize: "40px"}}>Neler Sunuyoruz? </h4>
            <br></br>
            <ul>
              <li className="st-1 fx">

                <p >Oyun ve Eğitim Atölyeleri: Çocukların hayal gücünü ve becerilerini destekleyen etkinlikler.</p>
              </li>
              <li className="st-2 fx">

                <p >Aile Danışmanlığı: Ebeveynlerin çocuk gelişimiyle ilgili sorularına rehberlik eden birebir görüşmeler ve geri bildirimler.</p>
              </li>
              <li className="st-3 fx">

                <p >Sihirli Bir Mekân: Pastel tonlardaki sıcak tasarımımızla hem çocuklar hem de ebeveynler için rahat bir ortam.</p>
                
              </li>
            </ul>
            <br></br>
            <h4 className="" style={{fontFamily: "Caveat", color: "#e9857a",fontSize: "40px"}}>Misyonumuz:</h4>
            <p>Her çocuğun kendi hızında öğrenip gelişebileceği güvenli bir alan yaratmak ve ebeveynlere bu yolculukta destek olmak.</p>
            <br></br><br></br>
            <h4 className="" style={{fontFamily: "Caveat", color: "#e9857a",fontSize: "40px"}}>Vizyonumuz:</h4>
            <p>Çocukların hayal gücüne dokunan, sevgi ve güven dolu bir ortamda onların geleceğe daha güçlü bir şekilde hazırlanmasını sağlamak.</p>

        </div>
      </div>
    </div>
  </div>
    </Layout>

  );
};
export default About;
