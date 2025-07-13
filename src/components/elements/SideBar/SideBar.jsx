import { useEffect } from "react";
import Company from "./Company";
import useCompany from "../../../zustand/useCompany";
import useGetCompanies from "../../../Hooks/useGetCompanies";
import useTypes from "../../../zustand/useTypes";
import styles from "./SideBar.module.css";

const SideBar = () => {
  const { loading, companiesName } = useGetCompanies();
  const { setSelectedCompany } = useCompany();
  const { setSelectedType } = useTypes();

  useEffect(() => {
    setSelectedCompany("All");
    setSelectedType("All");
  }, [setSelectedCompany, setSelectedType]);

  return (
    <div className={styles.sidebar}>
      <Company key={0} name={'All'} />
      {companiesName.map((name, index) => (
        <div>
          <Company key={index} name={name} />
        </div>
      ))}
    </div>
  );
};

export default SideBar;