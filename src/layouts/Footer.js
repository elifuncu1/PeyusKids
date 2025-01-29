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
                        <a href="https://www.instagram.com/peyuskids" target="_blank" rel="noopener noreferrer">
                          <i className="fab fa-instagram" /> @peyuskids
                        </a>
                      </li>
                      <li className="fx">
                        <a href="mailto:peyuskids@gmail.com">
                          <i className="far fa-envelope" /> peyuskids@gmail.com
                        </a>
                      </li>
                      <li className="fx">
                        <a href="tel:05515028121">
                          <i className="fal fa-phone" /> +90 (551) 502 8121
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
                          <span className="f-mulish">Pazartesi - Pazar</span>
                        </li>
                        <li>
                          <span className="f-mulish">09:00 - 18:00</span>
                        </li>
                      </ul>
                    </div>
                    <div className="cls-time">
                      <p>Adres</p>
                      <h4 style={{fontSize: "12px"}}>Cevizli Mah. Tugay Yolu Cad. Piazza Konutları
                      No:69-B Daire:8 Kat:4 Maltepe/İstanbul</h4>
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
                        <a className="wd-ctm f-mulish">Bilingual (Çift Dilli) Oyun Grupları</a>
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
