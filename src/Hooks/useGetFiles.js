import { useEffect, useState } from "react";

const useGetFiles = (company) => {
  const [loading, setLoading] = useState(false);
  const [files, setFiles] = useState([]);
    
  useEffect(() => {
    const getfiles = async() => {
      setLoading(true);
            
      try {
        let url = import.meta.env.VITE_APP_SERVER_URL + "/api/experiences/";
        
        if(company != 'All' && company != null) 
          url = url + company;
                
        const res = await fetch(url);
        const data = await res.json();
        if(data.error) 
          throw new Error(data.error);
        
        setFiles(data.message);
      } catch(error) {
        throw new Error(error);
      } finally {
        setLoading(false);
      }
    }
        
    getfiles();
  }, [company]);

  return { loading, files };
};

export const useGetUnverifiedFiles = () => {
  const [loading, setLoading] = useState(false);
  const [files, setFiles] = useState([]);

  useEffect(() => {
    const getfiles = async() => {
      setLoading(true);
            
      try {
        const res = await fetch(import.meta.env.VITE_APP_SERVER_URL + "/api/experiences/unverified");
        const data = await res.json();
        if(data.error) 
          throw new Error(data.error);
                
        setFiles(data.message);
      } catch(error) {
        throw new Error(error);
      } finally {
        setLoading(false);
      }
    }
        
    getfiles();
  }, []);
    
  return { loading, files };
};

export default useGetFiles;