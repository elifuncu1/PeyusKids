import Link from "next/link";
const Footer2 = () => {
  return (
    <footer id="footer" className="st-2">
      <section className="tf-subcribe-2">
        <div className="container">

        </div>
      </section>
      <div className="footer-inner st-2">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="widget-footer">
                <div className="widget widget-logo">
                  <div className="logo-bottom" id="logo-footer">
                  <Link href="/">
  <a>
    <img
      src="assets/images/logo/logofootert.png"
      alt="kinco"
      style={{ maxWidth: '70%', height: 'auto' }}
    />
  </a>
</Link>

                  </div>
                  <p className="wrap f-mulish">
                    Okulumuz, Maltepe ilçesinde en başarılı okullardan biridir.
                  </p>
                  <div className="list-contact">
                    <ul>
                      <li className="fx">
                        <span>
                          <i className="far fa-map-marker-alt" /> Piazza Konutları Maltepe
                        </span>
                      </li>
                      <li className="fx">
                        <a href="mailto:hotline@gmail.com">
                          <i className="far fa-envelope" /> info@peyuskids.com
                        </a>
                      </li>
                      <li className="fx">
                        <a href="tel:012345678">
                          <i className="fal fa-phone" /> +012 (345) 678
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="widget widget-business" style={{ display: 'inline', margin: '0 auto', borderRadius: '8px' }}>
                  <div className="inner">
                    <div className="op-time">
                      <h4 className="title-widget">Açılış Saatleri</h4>
                      <ul>
                        <li>
                          <span className="f-mulish">Pzt - Cuma</span>
                        </li>
                        <li>
                          <span className="f-mulish">08 am - 05 pm</span>
                        </li>
                      </ul>
                    </div>
                    <div className="cls-time">
                      <p>Cumartesi ve Pazar Tatili</p>
                      <h4 className="title-widget">Kapalı</h4>
                    </div>
                  </div>
                </div>
                <div className="widget widget-link">
                  <ul className="list-link">
                    <li className="fx">
                      <Link href="/about">
                      <a className="wd-ctm f-mulish">Hakkımızda</a>
                      </Link>
                        
                    </li>
                    <li className="fx">
                      <Link href="/kurucularimiz">
                      <a className="wd-ctm f-mulish">Kurucularımız</a>
                      </Link>
                        
                    </li>
                    <li className="fx">
                      <Link href="/gallery">
                      <a className="wd-ctm f-mulish">Galeri</a>
                      </Link>
                    </li>
                    <li className="fx">
                      <Link href="/contact">
                      <a className="wd-ctm f-mulish">İletişim</a>
                      </Link>
                    </li>
                  </ul>
                </div>

              </div>
            </div>
            
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer2;
