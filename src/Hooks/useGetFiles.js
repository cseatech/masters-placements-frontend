import { useEffect, useState } from "react"
import useCompany from "../zustand/useCompany";
import useTypes from "../zustand/useTypes";

const useGetFiles = () => {
    const [loading,setLoading] = useState(false);
    const {getFiles,setGetFiles} = useState(null);
    const {selectedCompany} = useCompany();
    const {selectedType} = useTypes();

    useEffect(()=>{
        const getFiles = async()=> {
            setLoading(true);
    
            try{
                const res = await fetch('');
                const data = res.json();
                if(data.error) throw new Error(data.error);
                setGetFiles(data);
            }catch(error){
                throw new Error(error);
            }finally{
                setLoading(false);
            }
        }

        getFiles();
        
    },[])

    return {loading,getFiles}
}

export default useGetFiles;