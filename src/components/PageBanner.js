import Link from "next/link";
const PageBanner = ({ pageName, pageTitle }) => {
  return (
    <section className="tf-page-title">
      <div className="overlay-bg" />
      <img
    src="assets/images/header-icon3.png"
    className="bg-inner1"
    alt=""
  />
      <img
        src="assets/images/Favicon.png"
        className="bg-inner3"
        alt=""
        style={{
          
          
        }}
      />

      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="page-title inner">
              <h1 style={{color: "#bbdaa8"}} className="title">{pageTitle ? pageTitle : pageName}</h1>
              <div className="breadcrumbs">
                <ul className="jus-ct">
                  <li>
                    <Link href="/">
                      <a style={{color: "#bbdaa8"}} className="f-rubik">Ana Sayfa</a>
                    </Link>
                  </li>
                  <li>
                    <p className="breadcrumbs-inner f-rubik" style={{color: "#bbdaa8"}}>{pageName}</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    
  );
};
export default PageBanner;
