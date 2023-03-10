import React, { useState } from 'react';
const App = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div class="page">
  <header className='header' tabindex="0">Header</header>
  <div className='navItems'>
    <ul className='navlist'> 
        <li className='navs'><a href="/">Home</a></li>
        <li className='navs'><a href="#0">Services</a></li>
        <li className='navs'><a href="#0">Blog</a></li>
        <li className='navs'><a href="#0">About</a></li>
        <li className='navs'><a href="#0">Contact</a></li>
        {/* <li class="small"><a href="#0">Facebook</a><a href="#0">Instagram</a></li> */}
      </ul>
    </div>
  <div id="nav-container">
    <div class="bg"></div>
    <div class="button" tabindex="0">
      <span class="icon-bar"></span>
      <span class="icon-bar"></span>
      <span class="icon-bar"></span>
    </div>
    <div id="nav-content" tabindex="0">
      <ul>
        <li><a href="#0">Home</a></li>
        <li><a href="#0">Services</a></li>
        <li><a href="#0">Blog</a></li>
        <li><a href="#0">About</a></li>
        <li><a href="#0">Contact</a></li>
        <li class="small"><a href="#0">Facebook</a><a href="#0">Instagram</a></li>
      </ul>
    </div>
    
  </div>
</div>
  );
};


export default App;