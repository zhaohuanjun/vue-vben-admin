import { resolve } from 'node:path';

import dayjs from 'dayjs';
import { readPackageJSON } from 'pkg-types';
import { presetTypography, presetUno } from 'unocss';
import UnoCSS from 'unocss/vite';
import { defineConfig, loadEnv, mergeConfig, type UserConfig } from 'vite';

import { createPlugins } from '../plugins';
import { commonConfig } from './common';

interface DefineOptions {
  overrides?: UserConfig;
  options?: {
    //
  };
}

function defineApplicationConfig(defineOptions: DefineOptions = {}) {
  const { overrides = {} } = defineOptions;

  return defineConfig(async ({ command, mode }) => {
    const root = process.cwd();
    const isBuild = command === 'build';
    const { VITE_USE_MOCK, VITE_BUILD_COMPRESS, VITE_ENABLE_ANALYZE } = loadEnv(mode, root);

    const defineData = await createDefineData(root);
    const plugins = await createPlugins({
      isBuild,
      root,
      enableAnalyze: VITE_ENABLE_ANALYZE === 'true',
      enableMock: VITE_USE_MOCK === 'true',
      compress: VITE_BUILD_COMPRESS,
    });

    const applicationConfig: UserConfig = {
      esbuild: {
        drop: isBuild ? ['console', 'debugger'] : [],
      },
      resolve: {
        alias: [
          {
            find: /@\//,
            replacement: resolve(root, '.', 'src') + '/',
          },
        ],
      },
      define: defineData,

      build: {
        rollupOptions: {
          output: {
            chunkFileNames: 'js/[name]-[hash].js',
            entryFileNames: 'js/_entry-[name]-[hash].js',
            assetFileNames: '[ext]/[name]-[hash].[ext]',
            // manualChunks: {
            //   vue: ['vue', 'pinia', 'vue-router'],
            // },
          },
        },
      },
      plugins: [
        ...plugins,
        UnoCSS({
          presets: [presetUno(), presetTypography()],
          content: {
            pipeline: {
              exclude: ['node_modules'],
              include: ['**.ts', '**.tsx', '**.vue'],
            },
          },
        }),
      ],
    };

    const mergedConfig = mergeConfig(commonConfig, applicationConfig);
    return mergeConfig(mergedConfig, overrides);
  });
}

async function createDefineData(root: string) {
  try {
    const pkgJson = await readPackageJSON(root);
    const { dependencies, devDependencies, name, version } = pkgJson;

    const __APP_INFO__ = {
      pkg: { dependencies, devDependencies, name, version },
      lastBuildTime: dayjs().format('YYYY-MM-DD HH:mm:ss'),
    };
    return {
      __APP_INFO__: JSON.stringify(__APP_INFO__),
    };
  } catch (error) {
    return {};
  }
}

export { defineApplicationConfig };
