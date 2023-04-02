import * as React from "react";
import { Link } from "gatsby";
import Navigation from './Navigation';

const Footer = () => {
  return (
    <footer>
      <Link to="/">Designo</Link>
      <Navigation />
    </footer>
  );
}

export default Footer;