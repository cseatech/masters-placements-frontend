import { FaSearch } from "react-icons/fa";
import styles from './SearchBox.module.css';
import { useState } from "react";
// import useGetFiles from "../../../Hooks/useGetFiles";
import useGetCompanies from "../../../Hooks/useGetCompanies";
import useCompany from "../../../zustand/useCompany";

const SearchBox = () => {
    const [search,setSearch] = useState("");
    // const {loading,setGetFiles} = useGetFiles();
    const {setSelectedCompany} = useCompany();
    const {companiesName} = useGetCompanies();

    const handleSubmit = (e)=>{
        e.preventDefault();

        if(!search) return;

        const searchCompany = companiesName.find(
            (company)=>company.toLowerCase().includes(search.toLowerCase())
        );
        if(!searchCompany) return;
        else{
            setSelectedCompany(searchCompany);
            setSearch("");
        }
    }

    return (
        <div className={styles.search_box_container}>
            <form className={styles.search_box} onSubmit={handleSubmit}>
                
                    <input className={styles.search_box_input} 
                    value={search} onChange={(e)=>setSearch(e.target.value)}placeholder="Enter the company name"></input>
                
                <div>
                    <button className={styles.search_box_button} ><FaSearch size={25} color="grey"/></button>
                </div>
            </form>
        </div>
    );
}

export default SearchBox;