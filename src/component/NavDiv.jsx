import React, { useState } from 'react'
import logo from '../../icon/logo.svg'
import menuIcon from '../../icon/icon-hamburger.svg'
import arrow from '../../icon/icon-arrow-down.svg'

const NavDiv = () => {
  const [menu, setMenu] = useState(false);
  console.log(menu)
  return (
    <nav className=' bg-navBg-mobile p-5 bg-cover  bg-no-repeat ph:bg-navBg-desktop h-3/4 bg-center'>
        <div className=' mb-14 flex justify-between items-center'>
            <img src={logo} alt='logo' />
            <img src={menuIcon} alt='menu' onClick={() => setMenu(prevMenu => !prevMenu)} className=' cursor-pointer md:hidden' />
            <div className=' hidden md:block'>
              <ul className=' items-center flex space-x-10 text-neutral-White text-base '>
                <li>About</li>
                <li>Services</li>
                <li>Projects</li>
                <button className=' delay-75 transition-colors hover:bg-neutral-White-opacity hover:text-neutral-White text-base px-6 py-2 rounded-full text-neutral-Very-dark-desaturated-blue bg-neutral-White font-fraun'>CONTACT</button>
              </ul>
            </div>
        </div>
        <div className=' mt-24 w-full mb-40'>
          <h1 className=' my-8 text-center font-fraun text-white smph:text-4xl tracking-widest font-black'>WE ARE CREATIVES</h1>
          <img src={arrow} alt='arrowIcon' className='  mx-auto' />
        </div>
          <div className={` -mt-96 md:-mt-0 mb-24 relative ${!menu && 'hidden'} `} >
              <div className=' text-center bg-neutral-White text-neutral-Dark-grayish-blue p-8'>
                  <p>About</p>
                  <p className='m-8'>Services</p>
                  <p>Projects</p>
                  <button type='button' className=' rounded-3xl py-3 px-6 mt-8 bg-primary-Yellow font- text-neutral-Very-dark-desaturated-blue font-fraun'>CONTACT</button>
              </div>
              <div className='tooltip w-1 absolute -top-7 right-0'></div>
          </div>
    </nav>
  )
}

export default NavDiv
