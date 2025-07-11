import useCompany from "../../../zustand/useCompany";
import useTypes from "../../../zustand/useTypes";

const Company = ({name}) => {

    const {setSelectedType} = useTypes();
    const {setSelectedCompany,selectedCompany} = useCompany();
    const isSelected = name === selectedCompany;

    return (
        <div className={`flex items-center gap-x-5 hover:bg-[#400051] py-5 px-9 rounded-lg  ml-3 text-white-500
        ${ isSelected ? "bg-[#895c95]" : ""}`}
            onClick = {()=>{
                setSelectedType("All");
                setSelectedCompany(name);
            }}>
            <p className="text-white">{name}</p>
        </div>
    );
}

export default Company;