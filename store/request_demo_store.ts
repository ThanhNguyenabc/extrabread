import { create } from "zustand";

interface RequestDemoState {
  otherPOS: string;
  selectedPOS: Array<string>;
  businessType?: string;
  clearStore: () => void;
  isSubmittedForm: boolean;
}

const initialData = {
  otherPOS: "",
  selectedPOS: [],
  businessType: "",
  isSubmittedForm: false,
};

const useRequestDemoStore = create<RequestDemoState>((set) => ({
  ...initialData,
  clearStore: () => set(initialData),
}));

export default useRequestDemoStore;
