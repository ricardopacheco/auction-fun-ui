import AsyncStorage from '@react-native-async-storage/async-storage';
import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

const staffInitialState = {
  id: null,
  token: null,
};

const staffStore = (set) => ({
  staff: staffInitialState,
  _hasHydrated: false,
  setHasHydrated: (state) => {
    set({ _hasHydrated: state });
  },
  updateToken: async (token) => {
    const newStaffState = { ...token };

    set(() => ({ staff: newStaffState }));
  },
  reset: async () => {
    set(() => ({ staff: staffInitialState }));
  },
});

const useStaffStore = create(
  persist(staffStore, {
    name: 'staff',
    onRehydrateStorage: () => async (state) => state.setHasHydrated(true),
    storage: createJSONStorage(() => AsyncStorage),
  })
);

export default useStaffStore;
