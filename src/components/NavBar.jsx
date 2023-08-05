import { useState } from 'react';
import burgerMenu from '../assets/images/icon-menu.svg'
import closeBtn from '../assets/images/icon-menu-close.svg'

export const NavBar = () => {

  const [menuClicked, setMenuClicked] = useState(true)

  const handleClick = () =>{
    setMenuClicked(prevState => !prevState)
  }

  return (
    <>
      <ul
        className={`${
          menuClicked ? "hidden" : ""
        } absolute bg-OffWhite top-0 right-0 w-[256px] p-[24px] h-full text-[18px] sm:flex sm:items-center sm:w-[438px] sm:place-content-around sm:p-0 sm:h-auto sm:relative sm:text-[16px]`}
      >
        <li
          className={`${
            menuClicked ? "hidden" : ""
          } cursor-pointer sm:hidden flex place-content-end`}
        >
          <img src={closeBtn} alt="close" onClick={handleClick} className='w-8 h-8 mb-[87px]' />
        </li>
        <li className='mb-8 sm:mb-0'>
          <a href="#" className='hover:text-SoftRed  sm:text-4 ' >Home</a>
        </li>
        <li className='mb-8 sm:mb-0'>
          <a href="#" className='hover:text-SoftRed sm:text-4'>New</a>
        </li>
        <li className='mb-8 sm:mb-0'>
          <a href="#" className='hover:text-SoftRed sm:text-4'>Popular</a>
        </li>
        <li className='mb-8 sm:mb-0'>
          <a href="#" className='hover:text-SoftRed sm:text-4'>Trending</a>
        </li>
        <li className='mb-8 sm:mb-0'>
          <a href="#" className='hover:text-SoftRed sm:text-4'>Categories</a>
        </li>
      </ul>
      <img
        className={`${
          menuClicked ? "" : "hidden"
        } w-10 h-4 cursor-pointer sm:hidden`}
        src={burgerMenu}
        alt="Menu"
        onClick={handleClick}
      />
    </>
  );
};



{/* <>
  <ul className="hidden sm:flex text-[18px] sm:w-[438px] sm:place-content-around sm:text-[16px] sm:items-center">
    <li>
      <a href="#">Home</a>
    </li>
    <li>
      <a href="#">New</a>
    </li>
    <li>
      <a href="#">Popular</a>
    </li>
    <li>
      <a href="#">Trending</a>
    </li>
    <li>
      <a href="#">Categories</a>
    </li>
  </ul>
  <img
    className="sm:hidden w-10 h-4 cursor-pointer"
    src={burgerMenu}
    alt="Menu"
  />
</>; */}