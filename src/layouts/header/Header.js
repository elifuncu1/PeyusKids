import Link from "next/link";
import { useEffect, useState } from "react";
import HeaderSearchForm from "../../components/HeaderSearchForm";
import Sidebar from "../../components/Sidebar";
import {
  About,
  Blog,
  Classes,
  Contact,
  Event,
  Home,
  Pages,
  Program,
  Shop,
  Teacher,
} from "./Menus";

const Header = () => {
  useEffect(() => {
    document.querySelector("body").className =
      "counter-scroll header-fixed inner-page";
  }, []);
  const [form, setForm] = useState(false);
  const [sidebarToggle, setSidebarToggle] = useState(false);

  return (
    <header id="header" className="d-none d-xl-block">
      <div className="top-bar">
        <div className="inner jus-ct">
          <p className="clr-pri-1">
           Çalışma Saatleri : Pazartesi - Pazar, 09:00 - 18:00
          </p>
        </div>
      </div>
      <div id="site-header" className="">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12">
              <div className="site-header-inner fx">
              <div id="site-logo" className="clearfix" style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center', paddingLeft: '25px' }}>
  <Link href="/">
    <a className="logo">
      <img src="assets/images/logo/logodark.png" alt="Peyus Kids" style={{  width: '300px', height: '150px' }} />
    </a>
  </Link>
</div>

                <div className="btn-menu">
                  <span />
                </div>
                <div className="nav-wrap">
                <nav id="mainnav" className="mainnav st-2">
  <ul className="menu" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '20px' , paddingLeft: '150px'}}>
    <li className="menu-item">
      <Home />
    </li>
    <li className="menu-item">
      <About />
    </li>
    <li className="menu-item">
     <Teacher/>
    </li>
    <li className="menu-item">
      <Pages/>
    </li>
    <li className="inner">
      <Contact />
    </li>
  </ul>
  {/* /.menu */}
  
</nav>

                </div>
                
              </div>
            </div>
          </div>
        </div>
        <Sidebar show={sidebarToggle} close={() => setSidebarToggle(false)} />
      </div>
      <div />
    </header>
    
  );
};
export default Header;
