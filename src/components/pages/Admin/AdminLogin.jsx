import { useState } from 'react';
import { useAuthContext } from '../../../context/AuthContext'
import './AdminLogin.css';

const AdminLogin = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const { setAuthUser } = useAuthContext();

  const handleLogin = async (e) => {
    e.preventDefault();
    
    try {
      const res = await fetch(import.meta.env.VITE_APP_SERVER_URL + "/api/users/login-admin", {
        method: "POST",
        headers: { "Content-type" : "application/json" },
        body: JSON.stringify({ username, password }),
      });

      const data = await res.json();
      if(data.error)
        throw new Error(data.error);

      if(res.status !== 200) {
        setError(true);
        setUsername("");
        setPassword("");
        return;
      } else {
        const token = data["token"];
        localStorage.setItem('token', token);
        localStorage.setItem("admins", JSON.stringify(data));
        setAuthUser(data);
      }
    } catch(e) {

    }
  }

  return (
    <div className='container'>
      <form className='login-form'>
        <div className="title">AdminLogin&nbsp;</div><br/>
        { error && <div style={{ color: 'red' }}>Wrong Credentials</div>}
        <div className='login-label'>
          <div style={{ marginTop: '2px', color: '#fbc618' }}>
            <i className="fa-solid fa-user-graduate"></i>
          </div>
          <label htmlFor="username" style={{ color: '#fbc618', fontWeight: 'bold' }}>Username :</label>
        </div>
        <br/>
        <input className='input' value={username} onChange={(e) => setUsername(e.target.value)} type="text" id="username" name="username" placeholder='Enter username' style={{width: '300px'}}/>
        <br/><br/>
        <div className='login-label'>
          <div style={{ marginTop: '2px', color: '#fbc618' }}>
            <i className="fa-solid fa-lock"></i>
          </div>
          <label htmlFor="password" style={{ color: '#fbc618', fontWeight: 'bold' }}>Password :</label>
        </div>
        <br/>
        <input className='input' value={password} onChange={(e) => setPassword(e.target.value)} type="password" id="password" name="password" placeholder='Enter password'/><br/>
        <button className="login-btn" onClick={handleLogin}>Login</button>
      </form>
    </div>
  );
};

export default AdminLogin;
