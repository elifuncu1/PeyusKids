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
              <div className="box-avt">
                <img src="assets/images/thumbnails/avt-quote.jpg" alt="Image" />
              </div>
              <ul>
                <li>
                  <h4 className="name-author clr-pri-2">Helin Elhuseyni</h4>
                </li>
                <li>
                  <p className="clr-pri-5 f-mulish">Psikolog</p>
                </li>
              </ul>
            </div>
            <div className="wrap">
            <p className="clr-pri-2" style={{ fontSize: '16px', lineHeight: '1.2' }}>
              "Peyus Kids, çocukların öğrenmeye ve keşfetmeye en doğal şekilde başladığı bir yerdir. Her gün sınıfımızda sevgi dolu bir atmosferde, çocukların hayal güçlerini kullanarak oyunlarla, etkinliklerle, ve öğrenme süreçlerine katılımlarıyla büyüdüklerini görmek büyük bir mutluluk. Burada, her çocuk bireysel yeteneklerine göre destekleniyor ve eğlenerek öğreniyor. Eğitim temelimiz, çocukların sosyal ve duygusal gelişimlerini desteklemek üzerine kurulu."
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
              <div className="box-avt">
                <img
                  src="assets/images/thumbnails/avt-quote-2.jpg"
                  alt="Image"
                />
              </div>
              <ul>
                <li>
                  <h4 className="name-author clr-pri-2">Pelin Elhuseyni</h4>
                </li>
                <li>
                  <p className="clr-pri-5 f-mulish">Psikolog</p>
                </li>
              </ul>
            </div>
            <div className="wrap">
            <p className="clr-pri-2" style={{ fontSize: '16px', lineHeight: '1.2' }}>
              "Peyus Kids'de, her çocuk bir keşif yolculuğuna çıkar. Onlara sadece bilgi değil, aynı zamanda empati, paylaşma ve sorumluluk gibi hayat becerileri de öğretiyoruz. Yaratıcı etkinlikler ve interaktif oyunlarla, çocuklar hem eğleniyor hem de öğreniyor. Her bir öğrencimizin potansiyelini en iyi şekilde geliştirebilmek için burada güçlü bir takım ruhu oluşturduk. Peyus, her çocuğun kendini güvende ve değerli hissettiği bir yerdir."
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
