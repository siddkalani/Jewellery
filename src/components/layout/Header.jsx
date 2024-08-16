import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { sidebarActions } from '../../store/slices/siderbarSlice';

const Header = () => {
  const dispatch = useDispatch()
  const [activeItem, setActiveItem] = useState('Stay')

  const handleOpen = () => {
    dispatch(sidebarActions.toggleOpen())
  }

  const [scrollState, setScrollState] = useState({
    isScrolling: false,
    isDarkMode: false
  });

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0 && window.scrollY <= 100) {
        setScrollState({ isScrolling: true, isDarkMode: false });
      } else if (window.scrollY > 100) {
        setScrollState({ isScrolling: true, isDarkMode: true });
      } else {
        setScrollState({ isScrolling: false, isDarkMode: false });
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header
      className={`
        ${scrollState.isScrolling ? 'z-[2] fixed w-full p-mobile' : 'z-[2] fixed w-full lg:p-h p-mobile'}
        ${scrollState.isScrolling && !scrollState.isDarkMode ? 'backdrop-blur-md bg-opacity-70' : ''}
        ${scrollState.isDarkMode ? 'bg-[var(--color-light)]' : ''}
        transition-all duration-300
      `}
    >
      <div className='flex items-center bg-transparent justify-between w-full p-nav'>

        <div className=''>
          <picture>
            <img src="/images/symbols/icon.svg" alt="" className={`hero-logo flex-custom-center ${!scrollState.isDarkMode && 'filter-white'}`} />
          </picture>
        </div>

        <nav className='flex items-center gap-nav'>
          {/* <div className='cheeseburger' onClick={handleOpen}>
            <div class="cheeseburger-inner">
              <div class={`${scrollState.isDarkMode ? "bar bg-black" : "bar"}`}></div>
              <div class={`${scrollState.isDarkMode ? "bar bg-black" : "bar"}`}></div>
              <div class={`${scrollState.isDarkMode ? "bar bg-black" : "bar"}`}></div>
            </div>
          </div>
          <div className={`lg:line hidden ${scrollState.isDarkMode ? 'bg-[var(--color-border-active)]' : 'bg-[var(--color-border-active-light)]'}`}></div> */}
          {/* will be mapped from data */}
          <ul className={`lg:flex hidden ${scrollState.isDarkMode ? 'text-[var(--color-dark)]' : 'text-[var(--color-white)]'}`}>
            {['Featured', 'Category', 'About Us', 'Gallery'].map((item, index) => (
              <li key={index} className='nav-a'>
                <a href='#' className='flex-custom-center relative overflow-hidden group font-karla'>
                  <span className='text-[1.02rem] nav-span inline-block transition-all duration-300 ease-in-out transform group-hover:-translate-y-full group-hover:opacity-0'>
                    {item}
                  </span>
                  <span className='text-[1.02rem] nav-span absolute top-full left-0 w-full transition-all duration-300 ease-in-out transform group-hover:-translate-y-full'>
                    {item}
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </nav>
        {/* button */}
        <div>
          <div className={`btn h-[2em] hover:shadow-md lg:h-[var(--btn-height-small)] rounded-none ${scrollState.isDarkMode ? 'bg-[#38220f] text-white' : ''}`}>
            <div className='btn-content'>
              <span className='lg:flex hidden text-white'>Newsletter</span>
              <span className='lg:hidden text-white'>Updates</span>
            </div>
          </div>
        </div>
      </div>
      <div className={`${scrollState.isDarkMode ? 'bg-[var(--color-border)] border-bottom' : 'border-bottom'}`}></div>
    </header>
  )
}

export default Header