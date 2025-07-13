import { useState, useRef } from 'react';
import { Alert } from 'antd';
import { emptyInput, useAuthContext } from '../../../context/AuthContext';
import { Navbar } from '../../elements';
import useSignup from '../../../Hooks/usePost';
import styles from './Post.module.css';

const Post = () => {
  const fileInputRef = useRef(null);
  const typeRef = useRef(null);
  const { input, setInput } = useAuthContext();
  const { loading, signup } = useSignup();
  const [showAlert, setShowAlert] = useState(false);
  const [alertDesc, setAlertDesc] = useState("");
    
  const handleSubmit = async (e) => {
    e.preventDefault();
        
    const res = checkError(input);
    if(!res) 
      return;

    const isSubmitted = await signup(input);
    if(isSubmitted){
      setShowAlert(true);
      setAlertDesc("Experience added successfully!");
    }
        
    setInput(emptyInput);
    
    if (fileInputRef.current)
      fileInputRef.current.value = null;
        
    typeRef.current.value = "";
  };

  function checkError(input){
    if(!input.name){
      setShowAlert(true);
      setAlertDesc("Name cannot be empty");
      return false;
    }

    if(!input.email){
      setShowAlert(true);
      setAlertDesc("Email cannot be empty");
      return false;
    }

    if(!input.type){
      setShowAlert(true);
      setAlertDesc("Type cannot be empty");
      return false;
    }

    if(!input.year){
      setShowAlert(true);
      setAlertDesc("Year cannot be empty");
      return false;
    }

    if(!input.company){
      setShowAlert(true);
      setAlertDesc("Company cannot be empty");
      return false;
    }

    if(!input.linkedin){
      setShowAlert(true);
      setAlertDesc("LinkedIn Url cannot be empty");
      return false;
    }

    if(!input.file){
      setShowAlert(true);
      setAlertDesc("PDF cannot be empty");
      return false;
    }

    return true;
  }
    
  const handleFile = (e) => {
    e.preventDefault();

    const file = e.target.files[0];
    if (file && file.type === "application/pdf") {
      if(alertDesc == "Please upload a valid PDF file.") 
        setShowAlert(false);
        
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64PDF = reader.result;
        setInput({...input,file:base64PDF});
      };
      reader.readAsDataURL(file);
    } else {
      setShowAlert(true);
      setAlertDesc("Please upload a valid PDF file.");
    }    
  };

  return (
    <div>
      <Navbar />
      <div className='flex justify-center items-center bg-[#292d33]'>
        <div className='flex-col items-center mt-16'>
          {showAlert && <div className="fixed bottom-4 right-4 z-50 w-80"><Alert name="alert" description={alertDesc} type="info" style={{ color: '#895c95', backgroundColor: '#e3d5e7', fontWeight: 'bold' }} closable onClose={()=>setShowAlert(false)}/></div>}
          <div className='text-center mb-4'>
            <h1 id={styles.title} >Connect with us</h1>
            <h1 id={styles.sub_title}>Share your Experience</h1>
          </div>
  
          <div className='flex-col'>
            <form className='flex-col space-y-7 w-full max-w-2xl' onSubmit={handleSubmit}>
              <input className='py-2 px-2 bg-[#e3d5e7]' placeholder='Your Name' value={input.name} onChange={(e)=>{setInput({...input,name:e.target.value})}}></input>
              <input className='py-2 px-2 bg-[#e3d5e7]' placeholder='Your Email' type='email' value={input.email} onChange={(e)=>{setInput({...input,email:e.target.value})}}></input>
              <select className ='py-2 px-2 bg-[#e3d5e7]' onChange={(e)=>{setInput({...input,type:e.target.value})}} ref={typeRef}>
                <option value="" disabled selected hidden>Select an employment type</option>
                <option value='Placement'>Placement</option>
                <option value='Intern'>Intern</option>
              </select>
              <input className='py-2 px-2 bg-[#e3d5e7]' placeholder='Year of passing out' value={input.year} onChange={(e)=>{setInput({...input,year:e.target.value})}}></input>
              <input className='py-2 px-2 bg-[#e3d5e7]' placeholder='Company' value={input.company} onChange={(e)=>{setInput({...input,company:e.target.value})}}></input>
              <input className='py-2 px-2 bg-[#e3d5e7]' placeholder='LinkedIn URL' type='url' value={input.linkedin} onChange={(e)=>{setInput({...input,linkedin:e.target.value})}}></input>
              <p className='text-sm text-[#c503fb] font-bold'>* Fill with '-' if you don't have a LinkedIn profile</p>
              <input className='py-2 px-2 bg-[#e3d5e7]' type='file' onChange={handleFile} ref={fileInputRef}></input>
              <p className='text-[#c503fb] font-bold'>*Please upload PDF only</p>
              <button type='submit' id={styles.btn}>Submit for review</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
  

