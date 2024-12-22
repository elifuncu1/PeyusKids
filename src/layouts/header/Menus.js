import Link from "next/link";
import { Fragment } from "react";

export const Home = () => (
  <Fragment>
    <li>
      <Link href="/">Anasayfa</Link>
    </li>
    
  </Fragment>
);
export const Pages = () => (
  <Fragment>
    <li>
      <Link href="/gallery">GALERİ</Link>
    </li>
   
  </Fragment>
);
export const Teacher = () => (
  <Fragment>
    <li>
      <Link href="/teacher">ÖĞRETMENLERİMİZ</Link>
    </li>
  
  </Fragment>
);
export const Classes = () => (
  <Fragment>
    <li>
      <Link href="/classes">Classes</Link>
    </li>
    <li>
      <Link href="/classe-details">Classes Details</Link>
    </li>
  </Fragment>
);
export const Event = () => (
  <Fragment>
    <li>
      <Link href="/events">Event</Link>
    </li>
    <li>
      <Link href="/event2">Event 2</Link>
    </li>
    <li>
      <Link href="/event-details">Events Details</Link>
    </li>
  </Fragment>
);
export const Program = () => (
  <Fragment>
    <li>
      <Link href="/program">Program</Link>
    </li>
    <li>
      <Link href="/program-details">program details</Link>
    </li>
  </Fragment>
);
export const Blog = () => (
  <Fragment>
    <li>
      <Link href="/blog-grid">blog grid</Link>
    </li>
    <li>
      <Link href="/blog-list">blog list</Link>
    </li>
    <li>
      <Link href="/blog-single">blog single</Link>
    </li>
  </Fragment>
);
export const Shop = () => (
  <Fragment>
    <li>
      <Link href="/shop">Shop</Link>
    </li>
    <li>
      <Link href="/shop-details">Shop Details</Link>
    </li>
  </Fragment>
);

export const About = () => <Link href="/about">Hakkımızda</Link>;
export const Contact = () => <Link href="/contact">İleTİŞİM</Link>;
export const Gallery =() =><Link href="/gallery">Galeri</Link>;

