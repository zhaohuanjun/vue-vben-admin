import type { Preference } from '@vben/typings';
import { acceptHMRUpdate, defineStore } from 'pinia';

interface PreferenceState {
  preference?: Preference;
}

/**
 * @description 偏好设置相关
 */
const usePreferenceStore = defineStore('preference', {
  persist: {
    paths: ['preference'],
  },
  state: (): PreferenceState => ({
    preference: undefined,
  }),
  getters: {
    getPreference(): Preference | undefined {
      return this.preference;
    },
  },
  actions: {
    setPreference(preference: Preference) {
      this.preference = preference;
    },
  },
});

// 解决热更新问题
const hot = import.meta.hot;
if (hot) {
  hot.accept(acceptHMRUpdate(usePreferenceStore, hot));
}

export { usePreferenceStore };
