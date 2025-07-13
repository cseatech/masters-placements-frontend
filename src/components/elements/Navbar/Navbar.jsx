import { useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { AiOutlineClose } from 'react-icons/ai';
import { RxHamburgerMenu } from 'react-icons/rx';
import { CSEA } from '../../../assets';
import { navLinks } from '../../../constants';
import styles from './Navbar.module.css';

function Navbar() {
  const navRef = useRef();
  const showNavBar = () => {
    navRef.current.classList.toggle(styles.responsive_nav);
  };
  const location = useLocation();
  const currentPath = location.pathname;

  const shouldShowLink = (link, currentPath) => {
    const homePages = ["/post", "/experience", "/preparation"];
    const homeOnly = ["/", "/about", "/faq", "/contact"];

    if (homePages.includes(currentPath) && link.location === "remaining") 
      return true;
    
    if (homeOnly.includes(currentPath) && link.location === "home")
      return true;

    if (link.location === "all")
      return true;

    return false;
  };

  return (
    <header className={styles.navbar}>
      <h3 onClick={() => window.scrollTo(0, 0) }>
        <img src={CSEA} alt='logo' className={styles.nav_logo} />
      </h3>
      <nav ref={navRef}>
        {navLinks.map((link) => ( 
          shouldShowLink(link, currentPath) && <Link to={`${link.id}`}>{link.title}</Link>
        ))}
        <button onClick={showNavBar} className={styles.nav_close}>
          <p><AiOutlineClose /></p>
        </button>
      </nav>
      <div className={styles.space}></div>
      <button className={styles.nav_btn} onClick={showNavBar}>
        <p><RxHamburgerMenu /></p>
      </button>
    </header>
  );
}

export default Navbar;