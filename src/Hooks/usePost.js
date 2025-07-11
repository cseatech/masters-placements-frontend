import { useState } from "react"
import { useNavigate } from "react-router-dom";
const useSignup = ()=>{

    const [loading,setLoading] = useState(false);
    const navigate = useNavigate();

    
        const signup = async({name,email,year,company,linkedin,type,file})=>{
            setLoading(true);

            try{
                const res = await fetch(import.meta.env.VITE_APP_SERVER_URL+'/api/experiences/new',{
                    method:"POST",
                    headers:{
                        "Content-Type":"application/json"
                    },
                    body:JSON.stringify({name,email,year,company,linkedin,type,file})
                })

                const data = await res.json();

                if(data.error){
                    throw new Error(data.error);
                }
                if(res.status == 200) return true;
            }
            catch(error){
                console.log(error);
            }finally{
                setLoading(false);
            }
        }

        return {loading,signup};
}

export default useSignup;