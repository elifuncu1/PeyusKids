import Head from "next/head";
import { Fragment, useEffect, useState } from "react";
import PreLoader from "../src/layouts/PreLoader";
import "../styles/globals.css";

const App = ({ Component, pageProps }) => {
  const [loader, setLoader] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoader(false);
    }, 2000);
  }, []);
  return (
    <Fragment>
      <Head>
        <title>Peyus Kids - Oyun Atölyemiz</title>
        <meta name="description" content="Peyus Kids - Çocuklar için eğlenceli ve eğitici oyun atölyemiz." />
        <meta name="keywords" content="Peyus Kids, çocuk oyunları, eğitici oyunlar, çocuk atölyesi" />
        <meta name="author" content="Peyus Kids" />
        <link rel="shortcut icon" href="assets/images/Favicon.png" />
        <link
          rel="apple-touch-icon-precomposed"
          href="assets/images/Favicon.png"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Salsa&display=swap"
          rel="stylesheet"
        />
        <meta property="og:title" content="Peyus Kids - Oyun Atölyemiz" />
        <meta property="og:description" content="Peyus Kids - Çocuklar için eğlenceli ve eğitici oyun atölyemiz." />
        <meta property="og:image" content="assets/images/og-image.png" />
        <meta property="og:url" content="https://www.peysukids.com" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Peyus Kids - Oyun Atölyemiz" />
        <meta name="twitter:description" content="Peyus Kids - Çocuklar için eğlenceli ve eğitici oyun atölyemiz." />
        <meta name="twitter:image" content="assets/images/twitter-image.png" />
      </Head>
      <div className="whatsapp-container">
      <a href="https://wa.me/905515028121" target="_blank" rel="noopener noreferrer">
        <img src="assets/images/whatsapp.png" alt="WhatsApp" width="60" height="60" style={{zIndex:"9999",position:"fixed",bottom:"20px",left:"20px"}}/>
      </a>
      </div>
      {loader && <PreLoader />}
      <Component {...pageProps}  />
    </Fragment>
  );
};
export default App;
