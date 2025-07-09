import { useEffect, useState } from "react"
// import useCompany from "../zustand/useCompany";
// import useTypes from "../zustand/useTypes";

const useGetFiles = (company) => {
    const [loading,setLoading] = useState(false);
    const [files,setFiles] = useState([]);
    // const {selectedCompany} = useCompany();
    // const {selectedType} = useTypes();
    console.log("hk", company)
    useEffect(()=>{
        console.log("eiatkhjk")
        const getfiles = async()=> {
            setLoading(true);
            console.log("eughu")
            try{
                let url = "http://localhost:5000/api/experiences/all-experiences/";
                console.log(url)
                if(company != 'All' && company != null) url = url + company;
                const res = await fetch(url);
                const data = await res.json();
                if(data.error) throw new Error(data.error);
                setFiles(data.message);
            }catch(error){
                throw new Error(error);
            }finally{
                setLoading(false);
            }
        }
        console.log("eiatkhjk")
        getfiles();
        console.log("egihkj")
    },[company])

    return {loading,files}
}

export default useGetFiles;