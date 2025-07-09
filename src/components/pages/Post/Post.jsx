import styles from './Post.module.css';
import { emptyInput, useAuthContext } from '../../../context/AuthContext';
import useSignup from '../../../Hooks/usePost';
import { Navbar } from '../../elements';

const Post = () => {

    const {input, setInput} = useAuthContext();
    const {loading, signup} = useSignup();

    const handleSubmit = async (e)=>{
        e.preventDefault();
        console.log(input);

        const res = checkError(input);
        if(!res) return;

        await signup(input);
        setInput(emptyInput);
    }

    const handleFile = (e)=>{
      e.preventDefault();
      const file = e.target.files[0];
      if (file && file.type === "application/pdf") {
        const reader = new FileReader();
        reader.onloadend = () => {
          // setPdfBase64(reader.result); // This will be data:application/pdf;base64,...
          const base64PDF = reader.result;
          setInput({...input,file:base64PDF});
          console.log(base64PDF);
        };
        reader.readAsDataURL(file);
      } else {
        alert("Please upload a valid PDF file.");
      }
        
    }

    return (
      <div>
        <Navbar />
      <div className='flex justify-center items-center'>
        
        <div className='flex-col items-center mt-16'>
          <div className='text-center mb-4'>
            <h1 id={styles.title} >Connect with us</h1>
            <h1 id={styles.sub_title}>Share your Experience</h1>
          </div>
  
          <div className='flex-col'>
            <form className='flex-col space-y-7 w-full max-w-2xl' onSubmit={handleSubmit}>

              <input className='py-2 px-2' placeholder='Your Name'
              value={input.name}
              onChange={(e)=>{setInput({...input,name:e.target.value})}}></input>

              <input className='py-2 px-2' placeholder='Your Email' type='email'
              value={input.email}
              onChange={(e)=>{setInput({...input,email:e.target.value})}}></input>

              <select className ='py-2 px-2' onChange={(e)=>{setInput({...input,type:e.target.value})}}>
                <option value="" disabled selected>Select an employment type</option>
                <option value='Placement'>Placement</option>
                <option value='Intern'>Intern</option>
              </select>

              <input className='py-2 px-2' placeholder='Year of passing out'
              value={input.year}
              onChange={(e)=>{setInput({...input,year:e.target.value})}}></input>

              <input className='py-2 px-2' placeholder='Company'
              value={input.company}
              onChange={(e)=>{setInput({...input,company:e.target.value})}}></input>

              <input className='py-2 px-2' placeholder='LinkedIn URL' type='url'
              value={input.linkedin}
              onChange={(e)=>{setInput({...input,linkedin:e.target.value})}}></input>
  
              <p className='text-sm text-red-600'>
                * Fill with '-' if you don't have a LinkedIn profile
              </p>

              <input className='py-2 px-2' type='file' onChange={handleFile}></input>

              <p className='text-red-600'>*Please upload PDF only</p>

              <button type='submit' id={styles.btn}>Submit for review</button>
            </form>
          </div>
        </div>
      </div>
      </div>
    );
  };
  
  export default Post;
  

function checkError(input){
    if(!input.name){
        alert("Name cannot be empty");
        return false;
    }
    if(!input.email){
        alert("Email cannot be empty");
        return false;
    }
    if(!input.type){
        alert("Type cannot be empty");
        return false;
    }
    if(!input.year){
        alert("Year cannot be empty");
        return false;
    }
    if(!input.company){
        alert("Company cannot be empty");
        return false;
    }
    if(!input.linkedin){
        alert("LinkedIn URL cannot be empty");
        return false;
    }
    if(!input.file){
        alert("PDF cannot be empty");
        return false;
    }
    return true;
}