import { addIcon } from '@iconify/vue';

/**
 * 自定义的svg图片转化为组件
 * @example ./svg/avatar.svg
 * <Icon icon="svg:avatar"></Icon>
 */

async function initIcons() {
  const svgEagers = import.meta.glob('./svg/**', { eager: true, as: 'raw' });

  await Promise.all(
    Object.entries(svgEagers).map((svg) => {
      const [key, body] = svg;

      // ./svg/xxxx.svg => xxxxxx
      const iconName = key.replace(/\.\/svg\//, '').replace(/\.svg/, '');
      addIcon(`svg:${iconName}`, {
        body,
      });
    }),
  );
}

export { initIcons };
