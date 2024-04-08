import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer">
      <section>
        <h4>Social Media</h4>
        <a href="https://facebook.com" aria-label="Facebook"></a>
        <a href="https://twitter.com" aria-label="Twitter"></a>
      </section>
      <section>
        <Link to="/about">
          <h4>About</h4>
        </Link>
      </section>
      <section>
        <Link to="/contact">
          <h4>Contact</h4>
        </Link>
      </section>
    </footer>
  );
}

export default Footer;
