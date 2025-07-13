import { useNavigate } from 'react-router-dom';
import { useAuthContext } from '../../../context/AuthContext';
import { useGetUnverifiedFiles } from '../../../Hooks/useGetFiles';
import PendingCard from './PendingCard';
import { verifyFile } from './PendingCard';
import { Loading } from '../../elements';
import { EmptyBox2 } from '../../../assets';
import styles from './AdminVerify.module.css';

const AdminVerify = () => {
  const navigate = useNavigate();
  const { authUser, setAuthUser } = useAuthContext();
  
  const handleLogout = () => {
    setAuthUser(null);
    localStorage.removeItem('admins');
    navigate('/admin-login');
  };

  const { loading, files } = useGetUnverifiedFiles();
  const verifyFiles = () => {
    files.map((file) => verifyFile(file._id));
  };

  return (
    <div style={{ alignItems: 'center', display: 'flex', justifyContent: 'start', flexDirection: 'column', backgroundColor: '#292d33', height: '100vh' }}>
      <div style={{ width: '100%', display: 'flex', flexDirection: 'row-reverse', paddingTop: '10px', paddingRight: '10px' }}>
        <button className={styles.logout} onClick={handleLogout}>Logout</button>
      </div>
      <div style={{ fontSize: '2rem', fontWeight: 'bold', color: '#fbc618' }}>Pending Approvals</div>
      {loading && <Loading color='#fbc618'/>}
      {!loading && files.length == 0 ? 
      (
        <div style={{ display: 'flex', justifyContent: 'center', width: '100%', height: '300px', alignItems: 'center', flexDirection: 'column', paddingTop: '15px' }}>
          <div style={{ height: "215px" }}><img src={EmptyBox2} className={styles.floating_box} width="200"></img></div>
          <div style={{ color: 'white' }}>No pending experiences available for approval yet!</div>
        </div>
      ) :
      (!loading && 
        <>
          <div style={{ width: '350px', display: 'flex', justifyContent: 'space-between', paddingTop: '20px' }}>
            <p style={{ paddingTop: '7px', fontSize: '1.06rem', color: 'white' }}>Verify all pending experiences</p>
            <button onClick={() => verifyFiles()} className={styles.logout}>Verify All</button>
          </div>
          <div className={styles.experience_container}>
            {!loading && files.map((data, index)=>{
              return (
                <PendingCard key={index} data={data} />
              );
            })}
          </div>
        </>
      )
      }
    </div>
  )
}

export default AdminVerify
