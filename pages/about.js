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
      <PageBanner pageName={"About Us"} />
      <section className="tf-section tf-about">
        <div className="container">
          <div className="row">
            <div className="ol-xl-7 col-lg-7 col-md-12">
              <div className="wrap-img ps-re">
              
                <div className="fx m-b32 align-fl-end">
                  <div
                    className="img m-r30 wow fadeIn animated"
                    data-wow-delay="0.3ms"
                    data-wow-duration="1200ms"
                  >
                    <img
                      src="assets/imgs/common/sc-about1.jpg"
                      alt="imgs"
                    />
                  </div>
                  <div
                    className="img wow fadeIn animated"
                    data-wow-delay="0.3ms"
                    data-wow-duration="1200ms"
                  >
                    <img
                      src="assets/imgs/common/sc-about2.jpg"
                      alt="imgs"
                    />
                  </div>
                </div>
                <div className="img p-l70">
                  <img src="assets/imgs/common/sc-about3.jpg" alt="imgs" />
                </div>
                <div
                  className="box-parents wow fadeInUp animated"
                  data-wow-delay="0.3ms"
                  data-wow-duration="1200ms"
                >
                  <h5 className="clr-pri-2 title">
                    <span className="clr-pri-3">25638+</span>Parents Say About
                    Our School
                  </h5>
                  <ul className="fx">
                    <li>
                      <img
                        src="assets/imgs/thumbnails/list-quote-5.jpg"
                        alt="img"
                      />
                    </li>
                    <li>
                      <img
                        src="assets/imgs/thumbnails/list-quote-1.jpg"
                        alt="img"
                      />
                    </li>
                    <li>
                      <img
                        src="assets/imgs/thumbnails/list-quote-2.jpg"
                        alt="img"
                      />
                    </li>
                    <li>
                      <img
                        src="assets/imgs/thumbnails/list-quote-3.jpg"
                        alt="img"
                      />
                    </li>
                    <li>
                      <img
                        src="assets/imgs/thumbnails/list-quote-4.jpg"
                        alt="img"
                      />
                    </li>
                    <li>
                      <img
                        src="assets/imgs/thumbnails/list-quote-6.jpg"
                        alt="img"
                      />
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-xl-5 col-lg-5 col-md-12 col-12">
              <div className="sc-about-2 p-t19">
                <div className="title-heading">
                  <div className="sub-heading clr-pri-3 f-mulish">
                    <span className="inner-sub st-2">About Us</span>
                    <RightArrow />
                  </div>
                  <h2 className="title clr-pri-2">
                    We Learn Smart Way To Build Bright Futute
                  </h2>
                </div>
                <div className="inner">
                  <p
                    className="wrap f-mulish clr-pri-4  wow fadeIn animated"
                    data-wow-delay="0.3ms"
                    data-wow-duration="1000ms"
                  >
                    Amet consectetur adipiscin elitsed eiusmod tempor incididunt
                    labore et dolore magna aliqua. Quis ipsum suspendisse
                    ultrices gravida. Risus commodo maecenas accumsan
                  </p>
                  <h4 className="title-line">
                    Most Successful Results Institute For kindergarten Since
                    2021
                  </h4>
                  <ul>
                    <li className="st-1 fx">
                      <i className="fas fa-check" />
                      <p className="clr-pri-2">Outdoor Games</p>
                    </li>
                    <li className="st-2 fx">
                      <i className="fas fa-check" />
                      <p className="clr-pri-2">Sport Activites</p>
                    </li>
                    <li className="st-3 fx">
                      <i className="fas fa-check" />
                      <p className="clr-pri-2">Nutritious Foods</p>
                    </li>
                    <li className="st-4 fx">
                      <i className="fas fa-check" />
                      <p className="clr-pri-2">Event &amp; Party</p>
                    </li>
                  </ul>
                  <Link href="/teacher">
                    <a className="fl-btn st-11">
                      <span className="inner">learn more Us</span>
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="tf-section tf-courses">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="title-heading st-3">
                <div className="sub-heading clr-pri-3 f-mulish">
                  <LeftArrow />
                  <span className="inner-sub st-1">Aktivitelerimiz</span>
                  <RightArrow />
                </div>
                <h2 className="title clr-pri-2">
                Eğlenirken Öğreniyoruz!                </h2>
              </div>
            </div>
            <div className="col-md-12">
              <div className="fx sc-discovery-about">
                <div className="col-discovery">
                  <div
                    className="sc-discovery-2 wow fadeInUp animated"
                    data-wow-delay="0.3ms"
                    data-wow-duration="800ms"
                  >
                    <div className="box-feature">
                      
  <img src="assets/images/common/balloons.png" alt="Balloons" width="100" height="100" />
</div>

                    <div className="box-content" >
                  
                      <h4 className="title">
                       <a>Eğitim &amp; Oyun</a>
                        <p className="wrap f-mulish">
                       Çocuklar eğlenceli aktivitelerle öğrenirken yaratıcılıklarını, problem çözme becerilerini ve sosyal yeteneklerini geliştirme fırsatı bulur. Eğlenerek öğrenmek burada başlıyor!
                      </p>
                      <br/>
                      </h4>
                      
                     
                    </div>
                  </div>
                </div>
                <div className="col-discovery">
                  <div
                    className="sc-discovery-2 wow fadeInUp animated"
                    data-wow-delay="0.3ms"
                    data-wow-duration="1000ms"
                  >
                   <div className="box-feature">
  <img src="assets/images/common/balloons.png" alt="Balloons" width="100" height="100" />
</div>

                    <div className="box-content" >
                  
                      <h4 className="title">
                       <a>Duyusal Keşif </a>
                        <p className="wrap f-mulish">
                        Çocuklar, farklı dokuları, kokuları ve sesleri keşfetmek için duyusal tablolarda vakit geçirirler. Doğal objeler ile oynayarak duyusal gelişimlerini desteklerler.  
                      </p>
                      <br/>                   </h4>
                    </div>
                  </div>
                </div>
                <div className="col-discovery">
                  <div
                    className="sc-discovery-2 wow fadeInUp animated"
                    data-wow-delay="0.3ms"
                    data-wow-duration="1200ms"
                  >
                     <div className="box-feature">
  <img src="assets/images/common/balloons.png" alt="Balloons" width="100" height="100" />
</div>

                    <div className="box-content" >
                  
                      <h4 className="title">
                       <a>Ekip Çalışması </a>
                        <p className="wrap f-mulish">
                        Çocuklar, basit takım oyunları oynayarak iş birliği ve iletişim becerilerini geliştirirler. Bu oyunlar, paylaşma, sırayla oynama ve birlikte problem çözme yeteneklerini de pekiştirir.
                      </p>
                      <br/>  
                      </h4>
              
                    </div>
                  </div>
                </div>
                <div className="col-discovery">
                  <div
                    className="sc-discovery-2 wow fadeInUp animated"
                    data-wow-delay="0.3ms"
                    data-wow-duration="1400ms"
                  >
                     <div className="box-feature">
  <img src="assets/images/common/balloons.png" alt="Balloons" width="100" height="100" />
</div>

                    <div className="box-content" >
                  
                      <h4 className="title">
                       <a>Müzik &amp; Hareket </a>
                        <p className="wrap f-mulish">
                        Çocuklar müzik eşliğinde dans eder, şarkılar söyler ve ritim aletleri çalarak motor becerilerini geliştirir. Aynı zamanda grup çalışması ve koordinasyon becerileri de kazanılır.
                      </p>
                      <br/>  
                      </h4>
                    
                    </div>
                  </div>
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
                 Öğretmenlerimizin Gözünden{" "}
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
    </Layout>
  );
};
export default About;
