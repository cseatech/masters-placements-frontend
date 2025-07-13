import { create } from 'zustand';

const useCompany = create((set)=>({
  selectedCompany: 'All',
  setSelectedCompany: (selectedCompany) => set({selectedCompany}),
  exp:[],
  setExp: (exp) => set({exp}),
}));

export default useCompany;