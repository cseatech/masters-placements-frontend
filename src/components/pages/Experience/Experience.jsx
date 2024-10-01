import { SearchBox, SideBar } from "../../elements";
import styles from './Experience.module.css';
import { types } from "../../../constants";
import useTypes from "../../../zustand/useTypes";
import { useAuthContext } from "../../../context/AuthContext";
import ExperienceCard from "./ExperienceCard";

const Experience = () => {
    const { selectedType, setSelectedType } = useTypes();
    const {Experience} = useAuthContext();

    return (
        <div className="overflow-x-hidden">
            <div className={styles.search_container}>
                <SearchBox className={styles.search_box} />

                <div className={styles.types}>
                    {types.map((type, index) => (
                        <div className={`rounded-[10px] px-5 py-1 w-auto items-center 
                        ${type.title === selectedType ? 'bg-[#0880ff] text-white' : 'bg-[#dbdbdb]'}`} key={index}>
                            <button
                                onClick={() => {setSelectedType(type.title);
                                    console.log(selectedType);
                                }}
                            >
                                {type.title}
                            </button>
                        </div>
                    ))}
                </div>
            </div>

            <div className={styles.sidebar}>
                <SideBar />
            </div>

            <div className={styles.experience_container}>
                {Experience.map((data,index) => {
                    return (
                        <ExperienceCard key={index} data={data} />
                    )
                })}
            </div> 
        </div>
    );
};

export default Experience;
