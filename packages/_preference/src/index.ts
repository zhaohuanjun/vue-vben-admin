import type { Preference } from '@vben/typings';

import {
  createPreference,
  createUsePreference,
  type usePreferenceOptions,
} from './createPreference';

const preference: Preference = {
  appName: 'Vben Admin',
  logo: '/logo.png',
  defaultAvatar:
    'https://cdn.jsdelivr.net/gh/vbenjs/vben-cdn-static@0.1.0/vben-admin/default-avatar.jpg',

  colorPrimary: '#0960bd',
  dark: false,
  compact: false,
};

const usePreference = createUsePreference(preference);

export { createPreference, preference, usePreference };

export type { Preference, usePreferenceOptions };
