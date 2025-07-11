import { SearchBox, SideBar, Navbar } from "../../elements";
import styles from './Experience.module.css';
import { types } from "../../../constants";
import useTypes from "../../../zustand/useTypes";
import { useAuthContext } from "../../../context/AuthContext";
import ExperienceCard from "./ExperienceCard";
import useGetFiles from "../../../Hooks/useGetFiles";
import useCompany from "../../../zustand/useCompany";
import { EmptyBox } from "../../../assets";

const Experience = () => {
    const { selectedType, setSelectedType } = useTypes();
    const { selectedCompany } = useCompany();
    const { Experience } = useAuthContext();
    const { loading, files } = useGetFiles(selectedCompany);

    const dispFiles = (files) => {
        if(files.length == 0) return (
            <div style={{display: 'flex', justifyContent: 'center', width: '100%', height: '400px', alignItems: 'center', flexDirection: 'column', gap: '1rem', paddingTop: '15px'}}>
                <div style={{height: "160px"}}><img src={EmptyBox} className={styles.floating_box} width="200"></img></div>
                <div style={{color: 'white'}}>No {selectedType != 'All' && selectedType} experiences available yet!</div>
            </div>
        );
        return files.map((data,index) => {
            return (
                <ExperienceCard key={index} data={data} />
            )
        })
    }
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
                            ${type.title === selectedType ? 'bg-[#895c95] text-white' : 'bg-[#292d33] text-white font-2 border-2 border-white hover:bg-[#400051]'}`} key={index}>
                                <button
                                    onClick={() => {setSelectedType(type.title);}}
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
