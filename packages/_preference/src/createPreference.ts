import { usePreferenceStore } from '@vben/store';
import type { DeepPartial, Preference } from '@vben/typings';
import { defu } from 'defu';
import { computed, reactive, toRefs } from 'vue';

interface usePreferenceOptions extends Preference {
  setPreference: (preference: DeepPartial<Preference>) => void;
}

function createUsePreference(defaultPreference: Preference) {
  return (): usePreferenceOptions => {
    const preferenceStore = usePreferenceStore();

    const customPreference = computed(() => {
      const preference = preferenceStore.getPreference;
      return defu<Preference, [Preference]>(preference, defaultPreference);
    });

    const reactivePreference = reactive(customPreference);

    function setPreference(partialPreference: DeepPartial<Preference>) {
      const realPreference = defu<Preference, [Preference]>(partialPreference, defaultPreference);
      preferenceStore.setPreference(realPreference);
    }

    return {
      ...toRefs(reactivePreference),
      setPreference,
    };
  };
}

function createPreference(preference: Preference) {
  return function definePreference(customPreference: DeepPartial<Preference>) {
    return defu<Preference, [Preference]>(customPreference, preference);
  };
}

export { createPreference, createUsePreference, type usePreferenceOptions };
