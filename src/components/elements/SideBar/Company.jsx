import useCompany from "../../../zustand/useCompany";

const Company = ({name}) => {

    const {setSelectedCompany,selectedCompany} = useCompany();
    const isSelected = name === selectedCompany;

    return (
        <div className={`flex items-center gap-x-5 hover:bg-blue-300 py-5 px-9 rounded-lg  ml-3 text-black-500
        ${ isSelected ? "bg-[#0880ff]" : ""}`}
            onClick = {()=>{
                setSelectedCompany(name);
            }}>
            <p>{name}</p>
        </div>
    );
}

export default Company;