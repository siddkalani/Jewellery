import React from 'react'
import { Parallax } from 'react-parallax';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTwitter, faPinterest } from '@fortawesome/free-brands-svg-icons';


  const Footer = () => {
    return (
      <>
        <footer className='p-0 relative'>
          <div className='max-w-[100vw] pl-0 pr-0'>
            <div className='relative flex w-full flex-wrap justify-between'>
              <div className='border-custom'></div>
              {/* SideNav */}
              <nav className='footer-nav'>
                <div className='menu-title'><span className='eyebrow small'>Menu</span></div>
                <ul className='menu-list'>
                  {['Featured', 'Category', 'About Us', 'Newsletter'].map((item, index) => (
                    <li className='menu-item' key={index}>
                      <a href="#" className='menu-link'>
                        <span className='side-nav-link'>{item}</span>
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
              {/* ShortLinks */}
              <div className='footer-nav flex'>
                <div className="border-left"></div>
                <div className="flex flex-col min-w-[10em]">
                  <div className='column-title'><span className='eyebrow small'>stay</span></div>
                  <ul className='short-links-list'>
                    {["Garden villa", "Pool Studio", "Pool villa", "Master Pool Villa"].map((item, index) => (
                      <li className='short-link-item' key={index}><a className='short-link' href="#"><span>{item}</span></a></li>
                    ))}
                  </ul>
                </div>
                <div className='flex flex-col'>
                  <div className='short-links-column'>
                    <div className='column-title'><span className='eyebrow small'>discover</span></div>
                    <ul className='short-links-list'>
                      {["Secret Waterfall", "Dolphins of Lovina", "Diving and Snorkeling"].map((item, index) => (
                        <li className='short-link-item' key={index}><a className='short-link' href="#"><span>{item}</span></a></li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
              {/* contacts */}
              <div className='footer-nav flex'>
                <div className="border-left"></div>
                <div className="flex flex-col min-w-[10em]">
                  <div className='column-title'><span className='eyebrow small'>Contacts</span></div>
                  <div className='flex flex-col gap-[1.5em]'>
                    <ul className='short-links-list'>
                      {["Jl. Damai, Kayu Putih", "Lovina, Buleleng, Bali, Indonesia"].map((item, index) => (
                        <li className='short-link-item' key={index}><a className='short-link' href="#"><span>{item}</span></a></li>
                      ))}
                    </ul>
                    <ul className='short-links-list'>
                      {["T: +62 877 888 41008", "E: resort@thedamai.com", "Reception: WhatsApp"].map((item, index) => (
                        <li className='short-link-item' key={index}><a className='short-link' href="#"><span>{item}</span></a></li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            {/* footer-end */}
            <div className='relative flex w-full justify-between'>
              <div className="border-custom"></div>

              {/* <div className="footer-end flex justify-around items-center">
              <span className='eyebrow small flex items-center'>ratings</span>
              <div className='star-container'>
                <picture className='star-picture'>
                  {Array(6).fill().map((_, index) => (
                    <IoStarSharp key={index} color='orange' />
                  ))}
                </picture>
              </div>
            </div>

            <div className="footer-end flex justify-around">
              <div className="border-left"></div>
              <span className='eyebrow small flex items-center'>ratings</span>
              <div className='star-container'>
                <picture className='star-picture'>
                  {Array(6).fill().map((_, index) => (
                    <IoStarSharp key={index} color='orange' />
                  ))}
                </picture>
              </div>
            </div>

            <div className="footer-end flex justify-around">
              <div className="border-left"></div>
              <span className='eyebrow small flex items-center'>ratings</span>
              <div className='star-container'>
                <picture className='star-picture'>
                  {Array(6).fill().map((_, index) => (
                    <IoStarSharp key={index} color='orange' />
                  ))}
                </picture>
              </div>
            </div> */}

              <div className="footer-end flex justify-center gap-8 items-center  w-full ">
                {/* <span className='font-cormo flex items-center text-[1.5rem] leading-6'>Follow us on</span> */}
                <div className='star-container flex space-x-6'>
                  <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className='star-picture'>
                    <FontAwesomeIcon icon={faFacebook} size="2x" />
                  </a>
                  <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className='star-picture'>
                    <FontAwesomeIcon icon={faInstagram} size="2x" />
                  </a>
                  <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className='star-picture'>
                    <FontAwesomeIcon icon={faTwitter} size="2x" />
                  </a>
                  <a href="https://pinterest.com" target="_blank" rel="noopener noreferrer" className='star-picture'>
                    <FontAwesomeIcon icon={faPinterest} size="2x" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </footer>
        {/* imageWithButton */}
        <section className='w-full h-full'>
          <div className='flex-custom-center h-full w-full relative'>
            <Parallax
              strength={100}
              speed={100}
              bgImage="https://www.thedamai.com/media/pages/dining/5975de972d-1703335793/footer-menu-1920x480-crop-q72.jpg"
              bgImageAlt="Poolside table"
              bgImageStyle={{ objectFit: "cover" }}
            >
              <div style={{ height: '35vh' }} className='hero-image flex-custom-center'>
                <div className={`btn w-15 btn-svg bg-[#38220f] h-[3rem] rounded-none`}>
                  <div className='btn-content gap-1 text-[var(--copy-size-m)]'>
                    <span className='text-white font-karla'>Contact us</span>
                    <svg className='size-6' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M19.049,4.907A9.91,9.91,0,0,0,3.456,16.864L2.049,22,7.3,20.621a9.91,9.91,0,0,0,4.734,1.208h0A9.912,9.912,0,0,0,19.048,4.908Zm-7.008,15.25a8.221,8.221,0,0,1-4.195-1.15l-.3-.18-3.118.817.833-3.039-.195-.312a8.239,8.239,0,1,1,15.215-4.38,8.255,8.255,0,0,1-8.24,8.243Zm4.516-6.172c-.246-.125-1.465-.722-1.692-.8s-.391-.125-.559.125-.64.8-.785.973-.288.187-.535.062a6.8,6.8,0,0,1-1.992-1.23A7.547,7.547,0,0,1,9.616,11.4c-.145-.246-.016-.382.11-.5s.246-.289.371-.434a1.645,1.645,0,0,0,.247-.414.458.458,0,0,0-.02-.434c-.063-.125-.559-1.344-.762-1.84S9.156,7.352,9,7.344s-.31-.008-.473-.008a.917.917,0,0,0-.66.309A2.78,2.78,0,0,0,7,9.712a4.819,4.819,0,0,0,1.011,2.562,11.046,11.046,0,0,0,4.23,3.739c.59.254,1.051.406,1.41.524a3.421,3.421,0,0,0,1.559.1,2.548,2.548,0,0,0,1.672-1.176,2.061,2.061,0,0,0,.145-1.176c-.058-.111-.222-.171-.472-.3Z" fill='white' fill-rule="evenodd"></path></svg>
                  </div>
                </div>
              </div>
            </Parallax>
          </div>
        </section>
      </>
    )
  }

  export default Footer