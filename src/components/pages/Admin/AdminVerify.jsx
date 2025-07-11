import React from 'react'
import { useAuthContext } from '../../../context/AuthContext'
import { useNavigate } from 'react-router-dom';
import { useGetUnverifiedFiles } from '../../../Hooks/useGetFiles';
import styles from './AdminVerify.module.css';
import PendingCard from './PendingCard';
import { verifyFile } from './PendingCard';
const AdminVerify = () => {
    const navigate = useNavigate();
    const { authUser, setAuthUser } = useAuthContext();
    const handleLogout = () => {
        setAuthUser(null);
        localStorage.removeItem('admins');
        navigate('/admin-login');
    }

    const {loading, files} = useGetUnverifiedFiles();
    const verifyFiles = () => {
      files.map((file)=>verifyFile(file._id));
    }
  return (
    <div style={{alignItems: 'center', display: 'flex', justifyContent: 'center', flexDirection: 'column'}}>
        <div>Pending Approvals</div>
        {files.length == 0 ? (<div>No pending experiences</div>) :
        (<><div>Verify all pending experiences<button onClick={() => verifyFiles()} className="border-2 bg-green-600 text-white font-bold px-5 py-2.5 rounded-md">Verify All</button></div>
        <div className={styles.experience_container}>
        {files.map((data, index)=>{return (
            <PendingCard key={index} data={data} />
        )})}
        </div></>)}
      <button className="logout" onClick={handleLogout}>Logout</button>
    </div>
  )
}

export default AdminVerify
