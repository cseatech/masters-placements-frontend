import { Navbar, ScrollWrapper } from './components/elements';
import { Home, Preparation, Experience, Post } from './components/pages';
import AdminLogin from './components/pages/Admin/AdminLogin'
import AdminVerify from './components/pages/Admin/AdminVerify';
import './App.css';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useAuthContext } from './context/AuthContext';
function App() {
  const { authUser } = useAuthContext();
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<ScrollWrapper />} />
        <Route path='/preparation' element={<Preparation />} />
        <Route path='/experience' element={<Experience />} />
        <Route path='/post' element={<Post />} />
        <Route path='/faq' element={<ScrollWrapper />} />
        <Route path='/contact' element={<ScrollWrapper />} />
        <Route path='/admin-login' element={authUser ? <Navigate to={'/admin-verify'} /> : <AdminLogin />} />
        <Route path='/admin-verify' element={authUser ? <AdminVerify /> : <Navigate to={'/admin-login'} />} />
      </Routes>
    </div>
  );
}

export default App;