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
                          <span className="f-mulish">08:00 - 18:00</span>
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
                  <h4 className="title-widget">Programlarımız</h4>
                  <ul className="list-link">
                    <li className="fx">
                        <a className="wd-ctm f-mulish">Oyun Atölyeleri</a>
                    </li>
                    <li className="fx">
                        <a className="wd-ctm f-mulish">Gelişim Değerlendirmesi</a>
                    </li>
                    <li className="fx">
                        <a className="wd-ctm f-mulish">Biingual (Çift Dilli) Oyun Grupları</a>
                    </li>
                    <li className="fx">
                        <a className="wd-ctm f-mulish">Danışmanlık</a>
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
