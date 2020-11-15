import React from "react";

function Header() {
  return (
    
    // <nav className="navbar navbar-expand-md navbar-dark bg-dark sticky-top">
    // <button className="navbar-toggle" data-toggle="collapse" data-target="collapse_target">
    //   <span className="navbar-toggler-icon"></span>
    // </button>
    // <div className="row">
    // <div className="col-lg-6 col-s-12 left-auto">
      
    //     Company Logo
      
    // </div>
    // <div className="col-lg-6 col-s-12 right-auto">
    //     <a href="/">Home</a>
    //     <a href="/AboutUs">About Us</a>
    //     <a href="#">Contact</a>
    // </div>
    // </div>

    // </nav>
    <nav class="navbar navbar-inverse" >
    <div class="container-fluid ">
    <div class="navbar-header ">
      <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>                        
      </button>
      <span class="navbar-brand" style={{fontColor: "blanchedalmond"}}>Harvest Bidding</span>
    </div>
    <div class="collapse navbar-collapse" id="myNavbar">
      <ul class="nav navbar-nav">
        <li class="active"><a href="/">Home</a></li>
        <li>
          <a href="/AboutUs">About Us</a>
        </li>
        <li><a href="/Contact">Contact</a></li>
      </ul>
      <ul class="nav navbar-nav navbar-right">
        <li><a href="#"><span class="glyphicon glyphicon-user"></span> Sign Up</a></li>
        <li><a href="#"><span class="glyphicon glyphicon-log-in"></span> Login</a></li>
      </ul>
    </div>
  </div>
</nav>
  );
}

export default Header;
