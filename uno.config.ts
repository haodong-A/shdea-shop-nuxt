import { createLocalFontProcessor } from '@unocss/preset-web-fonts/local'
import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetTypography,
  presetUno,
  presetWebFonts,
  transformerDirectives,
  transformerVariantGroup,
} from 'unocss'

export default defineConfig({
  shortcuts: [
    ['btn', 'px-4 py-1 rounded inline-block bg-teal-600 text-white cursor-pointer hover:bg-teal-700 disabled:cursor-default disabled:bg-gray-600 disabled:opacity-50'],
    ['icon-btn', 'inline-block cursor-pointer select-none opacity-75 transition duration-200 ease-in-out hover:opacity-100 hover:text-teal-600'],
  ],
  presets: [
    presetUno(),
    presetAttributify(),
    presetIcons({
      scale: 1.2,
    }),
    presetTypography(),
    presetWebFonts({
      fonts: {
        sans: 'DM Sans',
        serif: 'DM Serif Display',
        mono: 'DM Mono',
      },
      processors: createLocalFontProcessor(),
    }),
  ],
  theme: {
    colors: {
      primary: {
        light: '#AE7DDD',
        // eslint-disable-next-line node/prefer-global/process
        DEFAULT: process.env.PRIMARY_COLOR || '#7F54B2',
        dark: '#754fa3',
      },
    },
    // breakpoints: {
    //   xs: '0', // 自定义最小断点
    //   sm: '768px', // 小屏幕
    //   md: '991px', // 中屏幕
    //   lg: '1200px', // 大屏幕
    //   xl: '1920px', // 超大屏幕
    // },
    container: {
      center: true,
      padding: '1rem',
    },
  },
  transformers: [
    transformerDirectives(),
    transformerVariantGroup(),
  ],
})
