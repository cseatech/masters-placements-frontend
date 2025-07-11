import { useState,useEffect} from "react";
import  useCompany  from "../zustand/useCompany";
const useGetCompanies = () => {
    const [loading,setLoading] = useState(false);
    const [companiesName,setCompaniesName] = useState([]);
    const {selectedCompany} = useCompany();

    useEffect(()=> {
        const getCompanies = async () => {
            setLoading(true);

            try{
                const res = await fetch(import.meta.env.VITE_APP_SERVER_URL+'/api/experiences/companies');

                const data = await res.json();
                if(data.error) throw new Error(data.error);

                setCompaniesName(data.message);
            }catch(error){
                console.log(error)
            }finally{
                setLoading(false);
            }
        }
        getCompanies();
    },[])

    return {loading,companiesName};
}

export default useGetCompanies