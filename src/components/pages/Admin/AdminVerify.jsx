import React from 'react'
import { useAuthContext } from '../../../context/AuthContext'
import { useNavigate } from 'react-router-dom';

const AdminVerify = () => {
    const navigate = useNavigate();
    const { authUser, setAuthUser } = useAuthContext();
    const handleLogout = () => {
        setAuthUser(null);
        console.log(authUser);
        localStorage.removeItem('admins');
        navigate('/admin-login');
    }
  return (
    <div>
      Admin
      {localStorage.getItem("hu")}
      <button className="logout" onClick={handleLogout}>Logout</button>
    </div>
  )
}

export default AdminVerify
