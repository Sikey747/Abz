import { create } from 'zustand';

type Store = {
  isFinishForm: boolean;
  serIsFinishForm: (val: boolean) => void;
};

const useStore = create<Store>()((set) => ({
  isFinishForm: false,
  serIsFinishForm: (val: boolean) => set((state) => ({ isFinishForm: val })),
}));

export default useStore;
