import { useAuthContext} from "../../../context/AuthContext";
import styles from "./SideBar.module.css";
import Company from "./Company";
import useCompany from "../../../zustand/useCompany";
import useTypes from "../../../zustand/useTypes";

import { useEffect } from "react";
import useGetCompanies from "../../../Hooks/useGetCompanies";


const SideBar = () => {
    // const [companyList, setCompanyList] = useState([]);
    // useEffect(() => {
        
    // })
    const {loading, companiesName} = useGetCompanies();
    const {companiess} = useAuthContext();
    const {setSelectedCompany} = useCompany();
    const {setSelectedType} = useTypes();

    useEffect(() => {
        setSelectedCompany("All");
        setSelectedType("All");

    },[setSelectedCompany,setSelectedType]);

    return (
        <div className={styles.sidebar}>
            <Company key={0} name={'All'} />
            {companiesName.map((name,index)=>(
                <div>
                    <Company key={index} name={name} />
                </div>
            ))}
            
        </div>
    );
}

export default SideBar;