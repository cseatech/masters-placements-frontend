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
                const res = await fetch('http://localhost:5000/api/experiences/companies');

                const data = await res.json();
                console.log(data);
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