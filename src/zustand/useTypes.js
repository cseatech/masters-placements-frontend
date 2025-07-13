import { create } from 'zustand';

const useTypes = create((set)=>({
  selectedType: null,
  setSelectedType: (selectedType) => set({selectedType}),
  exp:[],
  setExp: (exp) => set({exp}),
}));

export default useTypes;