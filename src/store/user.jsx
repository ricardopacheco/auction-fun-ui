import AsyncStorage from '@react-native-async-storage/async-storage';
import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

const userInitialState = {
  id: null,
  token: null,
};

const userStore = (set) => ({
  user: userInitialState,
  _hasHydrated: false,
  setHasHydrated: (state) => {
    set({ _hasHydrated: state });
  },
  updateToken: async (token) => {
    const newUserState = { ...token };

    set(() => ({ user: newUserState }));
  },
  reset: async () => {
    set(() => ({ user: userInitialState }));
  },
});

const useUserStore = create(
  persist(userStore, {
    name: 'user',
    onRehydrateStorage: () => async (state) => state.setHasHydrated(true),
    storage: createJSONStorage(() => AsyncStorage),
  })
);

export default useUserStore;
