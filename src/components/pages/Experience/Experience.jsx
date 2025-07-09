import { SearchBox, SideBar, Navbar } from "../../elements";
import styles from './Experience.module.css';
import { types } from "../../../constants";
import useTypes from "../../../zustand/useTypes";
import { useAuthContext } from "../../../context/AuthContext";
import ExperienceCard from "./ExperienceCard";
import useGetFiles from "../../../Hooks/useGetFiles";
import useCompany from "../../../zustand/useCompany";
const dispFiles = (files) => {
    return files.map((data,index) => {
        return (
            <ExperienceCard key={index} data={data} />
        )
    })
}
const Experience = () => {
    const { selectedType, setSelectedType } = useTypes();
    const { selectedCompany } = useCompany();
    const { Experience } = useAuthContext();
    console.log("jrbjk")
    const { loading, files } = useGetFiles(selectedCompany);
        console.log("kgkj", files, loading)
    return (
        <div>
            <Navbar />
            <div className={styles.page}>
            <div className={styles.left}>
                <div className={styles.sidebar}>
                    <SideBar />
                </div>
            </div>
            <div className={styles.right}>
                <div className={styles.search_container}>
                    <SearchBox className={styles.search_box} />

                    <div className={styles.types}>
                        {types.map((type, index) => (
                            <div className={`rounded-[10px] px-5 py-1 w-auto items-center 
                            ${type.title === selectedType ? 'bg-[#0880ff] text-white' : 'bg-[#dbdbdb]'}`} key={index}>
                                <button
                                    onClick={() => {setSelectedType(type.title);
                                        console.log(type.title);
                                    }}
                                >
                                    {type.title}
                                </button>
                            </div>
                        ))}
                    </div>
                </div>

                

                <div className={styles.experience_container}>
                    {selectedType == 'All'? dispFiles(files):''}
                    {selectedType == 'Intern'? dispFiles(files.filter(file => file.type == 'Intern')):''}
                    {selectedType == 'Placement'? dispFiles(files.filter(file => file.type == 'Placement')):''}
                </div>
            </div> 
            </div>
        </div>
    );
};

export default Experience;
