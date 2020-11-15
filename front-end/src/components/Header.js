import React from "react";

function Header() {
  return (
    <div className="container-fluid">
    <header>
    <div className="row">
    <div className="col left-auto">
      <h1>
        Company Logo
      </h1>
    </div>
    <div className="col right-auto">
        <a href="/">Home</a>
        <a href="/AboutUs">About Us</a>
        <a href="#">Contact</a>
    </div>
    </div>
    </header>
    </div>
  );
}

export default Header;
