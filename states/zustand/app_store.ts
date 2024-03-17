import { create } from 'zustand';

interface IAppStore {
  onboarded: boolean;
  setOnboarded: ((value: boolean) => void);
}

const useAppStore = create<IAppStore>()(set => ({
  onboarded: false,
  setOnboarded: (value: boolean) => set(() => ({ onboarded: value })),
}));

export default useAppStore;