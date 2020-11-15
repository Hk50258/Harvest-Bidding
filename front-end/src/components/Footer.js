import React from "react";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer>
    <nav class="navbar navbar-inverse">
    <p>Copyright ⓒ {year}</p>
    </nav>
    </footer>
  );
}

export default Footer;
