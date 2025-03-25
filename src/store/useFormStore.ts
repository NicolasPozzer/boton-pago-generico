import { create } from 'zustand';

type FormStore = {
  formData: {
    firstName: string;
    lastName: string;
    email: string;
    phoneNumber: string;
    selectTitle: string;
    yesno: string;
  };
  setFormData: (data: Partial<FormStore['formData']>) => void;
};

export const useFormStore = create<FormStore>((set) => ({
  formData: {
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    selectTitle: '',
    yesno: '',
  },
  setFormData: (data) => set(
    (state) => (
      { formData: {...state.formData, ...data} }
    )
  ),
}));
