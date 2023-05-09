import vue from '@vitejs/plugin-vue'
import Icons from 'unplugin-icons/vite'
import IconsResolver from 'unplugin-icons/resolver'
import { ElementPlusResolver, VueUseComponentsResolver } from 'unplugin-vue-components/resolvers'
import Components from 'unplugin-vue-components/vite'
import AutoImport from 'unplugin-auto-import/vite'
// element plus自动导入（组件+样式）
import ElementPlus from 'unplugin-element-plus/vite'

export default () => {
  return [
    vue({ include: [/\.vue$/, /\.md$/] }),
    ElementPlus({}),
    AutoImport({
      imports: ['vue', 'pinia', 'vue-router', '@vueuse/core'],
      // 指定配置文件生成的位置与文件名
      dts: 'src/automatic/auto-imports.d.ts',
      // 指定引入utils目录下所有文件
      dirs: ['src/utils/**', 'src/store/**'],
      resolvers: [ElementPlusResolver()],
      // 配置开启eslint
      eslintrc: {
        enabled: true, // Default `false`
        filepath: './src/automatic/.eslintrc-auto-import.json', // Default `./.eslintrc-auto-import.json`
        globalsPropValue: true, // Default `true`, (true | false | 'readonly' | 'readable' | 'writable' | 'writeable')
      },
    }),
    Components({
      // 指定组件位置，默认为 src/components
      dirs: ['src/components'],
      // 指定配置文件生成的位置与文件名
      dts: 'src/automatic/components.d.ts',
      extensions: ['vue', 'md'],
      include: [/\.vue$/, /\.vue\?vue/, /\.md$/],
      resolvers: [ElementPlusResolver(), IconsResolver(), VueUseComponentsResolver()],
    }),
    Icons({
      compiler: 'vue3',
      autoInstall: true,
    }),
  ]
}
