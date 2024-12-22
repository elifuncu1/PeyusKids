import Link from "next/link";
const Footer2 = () => {
  return (
    <footer id="footer" className="st-2">
      <section className="tf-subcribe-2">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div
                className="fl-subcribe wow fadeIn   animated"
                data-wow-delay="0.3ms"
                data-wow-duration="1200ms"
              >
                <div className="subcribe-wp">
                  <h2 className="title clr-pri-5">Abone Ol</h2>
                  <p className="sub f-mulish clr-pri-2">
                    Okulumuz hakkında en son haberleri ve gelişmeleri almak için lütfen e-posta adresinizi giriniz.
                  </p>
                </div>
                <div className="subcribe-form fx">
                  <form
                    onSubmit={(e) => e.preventDefault()}
                    action="#"
                    id="subscribe-form"
                  >
                    <input
                      type="email"
                      id="subscribe-email"
                      placeholder="E-posta Adresi"
                    />
                    <button className="fl-btn st-7" id="subscribe-button">
                      <span className="inner">Abone Ol</span>
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
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
                <div className="widget widget-business">
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
                      <Link href="/teachers">
                      <a className="wd-ctm f-mulish">Öğretmenlerimiz</a>
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
