import React from 'react'

const Header = () => {

  function barShowButton() {
    document.getElementsByClassName("bar-ul")[0].classList.toggle('bar-ul-show')
}
  return (
    <>
    <header>
        <nav>
        <div className='logo'>
            <h2>AlPatrn</h2>
        </div>
        <ul className='nav-ul1'>
            <li><a href='' className='home'>Home page</a></li>
            <li><a href=''>Generator</a></li>
            <li><a href=''>Pricing-plan</a></li>
            <li><a href=''>Blog-News</a></li>
        </ul>
        <ul className='nav-ul2'>
            <li><a href=''>About us</a></li>
            <li><a href=''>Features</a></li>
            <li><a href=''>Collection-2023</a></li>
            <li><a href=''>Career</a></li>
        </ul>
        <div className='menu-button'>

        
       <button  onClick={barShowButton}>Menu <i class="fa-solid fa-caret-down"></i></button>
</div>

 

        </nav>
        {/* responsive bar  */}
    <div class="bar-ul">
        <ul>
            <li><a href="">Home</a> </li>
            <li><a href="">Generator</a></li>
            <li><a href="">Pricing-plan</a></li>
            <li><a href="">Blog-News</a></li>
            <li><a href="">About us</a> </li>
            <li><a href="">Features</a> </li>
            <li><a href="">Career</a> </li>
        </ul>
    </div>
    </header>
      
    </>
  )
}

export default Header
