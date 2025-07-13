import { useLayoutEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Home from '../../pages/Home/Home.jsx';

const ScrollWrapper = () => {
  const location = useLocation();

  useLayoutEffect(() => {
    if (location.pathname === '/contact')
      window.scrollTo({ top: document.documentElement.scrollHeight, behavior: 'smooth' });
    else if (location.pathname === '/about')
      window.scrollTo({ top: document.documentElement.scrollHeight*0.175, behavior: 'smooth' });
    else if (location.pathname === '/faq')
      window.scrollTo({ top: document.documentElement.scrollHeight*0.55, behavior: 'smooth' });
  }, [location]);

  return <Home />;
};

export default ScrollWrapper;
