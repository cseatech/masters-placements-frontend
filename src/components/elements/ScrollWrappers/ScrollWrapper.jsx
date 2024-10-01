import { useLayoutEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Home from '../../pages/Home/Home.jsx';

const ScrollWrapperContact = () => {
  const location = useLocation();

  useLayoutEffect(() => {
    if (location.pathname === '/contact') {
      window.scrollTo({ top: document.documentElement.scrollHeight, behavior: 'smooth' });
    }
  }, [location]);

  return <Home />;
};

export default ScrollWrapperContact;
