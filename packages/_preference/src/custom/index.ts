import type { Preference } from '@vben/typings';

import { createUsePreference, type usePreferenceOptions } from '../createPreference';
import { createPreference, preference as defaultPreference } from '../index';

const definePreference = createPreference(defaultPreference);

const preference = definePreference({
  // 自定义配置
});

const usePreference = createUsePreference(preference);

export { createPreference, preference, usePreference };

export type { Preference, usePreferenceOptions };
