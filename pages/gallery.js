import PageBanner from "../src/components/PageBanner";
import Layout from "../src/layouts/Layout";

const imgStyle = {
  width: "100%",
  height: "auto",
  objectFit: "cover",
};

const galleryStyle = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  position: "relative"
};

const overlayStyle = {
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  background: "rgba(0, 0, 0, 0.3)",
  opacity: 0,
  transition: "opacity 0.3s ease-in-out"
};

const hoverEffect = {
  ...overlayStyle,
  opacity: 1
};

const Gallery = () => {
  return (
    <Layout bodyClass={"gallery"}>
      <PageBanner pageName={"Galeri"} />

      <section style={{ padding: "50px 0" }}>
        <div className="container">
          <div className="row gx-3 gy-3">
            <div className="col-12">
              <div style={{ textAlign: "center", marginBottom: "30px" }}>
                <h2 style={{ color: "#2c3e50" }}>Oyun Atölyemiz</h2>
              </div>
            </div>

            {Array.from({ length: 11 }).map((_, index) => (
              <div key={index} className="col-xl-4 col-lg-4 col-md-6 col-12">
                <div
                  style={galleryStyle}
                  className="sc-gallery wow fadeIn animated"
                  data-wow-delay="0.3s"
                  data-wow-duration="1.2s"
                >
                  <div style={{ position: "relative" }}>
                    <img
                      src={`/assets/images/gallery/image${index + 1}.jpeg`}
                      alt={`Image ${index + 1}`}
                      style={imgStyle}
                    />
                    <div style={overlayStyle} className="overlay" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Gallery;
