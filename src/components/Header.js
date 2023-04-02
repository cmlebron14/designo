import * as React from "react";
import { Link } from "gatsby";
import Navigation from './Navigation';

const Header = () => {
  return (
    <header>
      <Link to="/">Designo</Link>
      <Navigation />
    </header>
  )
}

export default Header;