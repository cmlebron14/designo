import * as React from "react";
import { Link } from "gatsby";

const Navigation = () => {
  return (
    <nav>
      <Link to="/about">Our Company</Link>
      <Link to="/locations">Locations</Link>
      <Link to="/contact">Contact</Link>
    </nav>
  )
}

export default Navigation;