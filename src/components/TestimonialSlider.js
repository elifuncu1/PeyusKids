import { Swiper, SwiperSlide } from "swiper/react";
import { twoSlider } from "../SliderProps";

const TestimonialSlider = () => {
  return (
    <Swiper {...twoSlider} className="owl-carousel owl-theme none">
      <SwiperSlide>
        <div
          data-dot=""
          className="item-fb wow fadeIn animated"
          data-wow-delay="0.3ms"
          data-wow-duration="1300ms"
        >
          <div className="coustom-padding">
            <div className="heading fx">

              <ul>
                <li>
                  <h4 className="name-author clr-pri-2">Helin Elhüseyni</h4>
                </li>
                <li>
                  <p className="clr-pri-5 f-mulish" style={{color: "#34eb4f", fontWeight: "bold"}}>Psikolog</p>
                </li>
              </ul>
            </div>
            <div className="wrap">
            <p className="clr-pri-2" style={{ fontSize: '16px', lineHeight: '1.2' }}>
            &quot;Peyus Kids, çocukların öğrenmeye ve keşfetmeye en doğal şekilde başladığı bir yerdir. Her gün sınıfımızda sevgi dolu bir atmosferde, çocukların hayal güçlerini kullanarak oyunlarla, etkinliklerle, ve öğrenme süreçlerine katılımlarıyla büyüdüklerini görmek büyük bir mutluluk. Burada, her çocuk bireysel yeteneklerine göre destekleniyor ve eğlenerek öğreniyor. Eğitim temelimiz, çocukların sosyal ve duygusal gelişimlerini desteklemek üzerine kurulu.&quot;
              </p>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div
          data-dot=""
          className="item-fb wow fadeIn animated"
          data-wow-delay="0.3ms"
          data-wow-duration="1300ms"
        >
          <div className="coustom-padding">
            <div className="heading fx">

              <ul>
                <li>
                  <h4 className="name-author clr-pri-2">Pelin Elhüseyni</h4>
                </li>
                <li>
                  <p className="clr-pri-5 f-mulish" style={{color: "#34eb4f", fontWeight: "bold"}}>Çocuk Gelişimci</p>
                </li>
              </ul>
            </div>
            <div className="wrap">
            <p className="clr-pri-2" style={{ fontSize: '16px', lineHeight: '1.2' }}>
            &quot;Peyus Kids&apos;de, her çocuk bir keşif yolculuğuna çıkar. Onlara sadece bilgi değil, aynı zamanda empati, paylaşma ve sorumluluk gibi hayat becerileri de öğretiyoruz. Yaratıcı etkinlikler ve interaktif oyunlarla, çocuklar hem eğleniyor hem de öğreniyor. Her bir öğrencimizin potansiyelini en iyi şekilde geliştirebilmek için burada güçlü bir takım ruhu oluşturduk. Peyus, her çocuğun kendini güvende ve değerli hissettiği bir yerdir.&quot;
              </p>
            </div>
          </div>
        </div>
      </SwiperSlide>
      
      <div className="owl-dots" />
    </Swiper>
  );
};
export default TestimonialSlider;
