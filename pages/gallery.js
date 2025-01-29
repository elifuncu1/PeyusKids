import PageBanner from "../src/components/PageBanner";
import PhotoGallerySlider from "../src/components/PhotoGallerySlider";
import { LeftArrow, RightArrow } from "../src/Icons";
import Layout from "../src/layouts/Layout";

const Gallery = () => {
  return (
    <Layout bodyClass={"gallery"}>
      <PageBanner pageName={"Galeri"} />

      <section className="tf-section tf-galley">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="title-heading st-4">

                <h2 className="title clr-pri-2">
                Oyun Atölyemiz
                </h2>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-4 col-12">
              <div
                className="sc-gallery wow fadeIn animated"
                data-wow-delay="0.3ms"
                data-wow-duration="1200ms"
              >
                <div >
                  <img
                    src="/assets/images/gallery/image1.jpeg"
                    alt="Image"
                  />

                  <div className="overlay" />
                  
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-4 col-12">
              <div
                className="sc-gallery wow fadeIn animated"
                data-wow-delay="0.3ms"
                data-wow-duration="1200ms"
              >
                <div className="box-feature">
                  <img
                    src="/assets/images/gallery/image2.jpeg"
                    alt="Image"
                  />
                                    <div className="overlay" />

                 
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-4 col-12">
              <div
                className="sc-gallery wow fadeIn animated"
                data-wow-delay="0.3ms"
                data-wow-duration="1200ms"
              >
                <div className="box-feature">
                  <img
                    src="/assets/images/gallery/image3.jpeg"
                    alt="Image"
                  />
                  <div className="overlay" />
                  
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6 col-md-6 col-12">
              <div
                className="sc-gallery mg-bt wow fadeIn animated"
                data-wow-delay="0.3ms"
                data-wow-duration="1200ms"
              >
                <div className="box-feature">
                  <img
                    src="/assets/images/gallery/image4.jpeg"
                    alt="Image"
                  />
                  <div className="overlay" />
                 
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6 col-md-6 col-12">
              <div
                className="sc-gallery mgbt-0 wow fadeIn animated"
                data-wow-delay="0.3ms"
                data-wow-duration="1200ms"
              >
                <div className="box-feature">
                  <img
                    src="/assets/images/gallery/image5.jpeg"
                    alt="Image"
                  />
                  <div className="overlay" />
                  
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6 col-md-6 col-12">
              <div
                className="sc-gallery mgbt-0 wow fadeIn animated"
                data-wow-delay="0.3ms"
                data-wow-duration="1200ms"
              >
                <div className="box-feature">
                  <img src="/assets/images/gallery/image6.jpeg" alt="Image" />
                  <div className="overlay" />
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6 col-md-6 col-12">
              <div
                className="sc-gallery mgbt-0 wow fadeIn animated"
                data-wow-delay="0.3ms"
                data-wow-duration="1200ms"
              >
                <div className="box-feature">
                  <img src="/assets/images/gallery/image7.jpeg" alt="Image" />
                  <div className="overlay" />
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6 col-md-6 col-12">
              <div
                className="sc-gallery mgbt-0 wow fadeIn animated"
                data-wow-delay="0.3ms"
                data-wow-duration="1200ms"
              >
                <div className="box-feature">
                  <img src="/assets/images/gallery/image8.jpeg" alt="Image" />
                  <div className="overlay" />
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6 col-md-6 col-12">
              <div
                className="sc-gallery mgbt-0 wow fadeIn animated"
                data-wow-delay="0.3ms"
                data-wow-duration="1200ms"
              >
                <div className="box-feature">
                  <img src="/assets/images/gallery/image9.jpeg" alt="Image" />
                  <div className="overlay" />
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6 col-md-6 col-12">
              <div
                className="sc-gallery mgbt-0 wow fadeIn animated"
                data-wow-delay="0.3ms"
                data-wow-duration="1200ms"
              >
                <div className="box-feature">
                  <img src="/assets/images/gallery/image10.jpeg" alt="Image" />
                  <div className="overlay" />
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6 col-md-6 col-12">
              <div
                className="sc-gallery mgbt-0 wow fadeIn animated"
                data-wow-delay="0.3ms"
                data-wow-duration="1200ms"
              >
                <div className="box-feature">
                  <img src="/assets/images/gallery/image11.jpeg" alt="Image" />
                  <div className="overlay" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
    </Layout>
  );
};
export default Gallery;
