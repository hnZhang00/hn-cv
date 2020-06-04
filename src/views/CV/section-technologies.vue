<template>
  <section class="cv-section experiences">
    <!-- <cv-section-header :title="title"></cv-section-header> -->
    <div v-for="item in list" class="cv-section-item">
      <div v-if="item.type" class="type">{{ item.type }}</div>
      <p class="title">{{ item.title }}</p>
      <ul class="list">
        <li v-for="desc in item.descriptions" class="list-item" v-html="desc"></li>
      </ul>
    </div>
  </section>
</template>

<script>
import cvSectionHeader from './section-header.vue'

export default {
  name: 'CV-section-experiences',
  components: {
    cvSectionHeader,
  },
  data() {
    return {
      title: '技能',
      list: [
        {
          title: '源码',
          descriptions: [
            'Vue、Vuex、Vue Router',
          ],
        },
        {
          title: '熟练',
          descriptions: [
            'React、Redux、React Hooks',
            'Hybrid APP、Cordova',
            '微信小程序',
            // 'Lodash、Underscore',
            // 'Fetch、Axios',
            'Webpack',
            'Less、Sass',
            // 'ElementUI、Vant、<br>Ant Design、FrameWork7',
          ],
        },
        {
          title: '了解',
          descriptions: [
            'Node、Express、Egg',
            'MongoDB',
            'Nginx',
          ],
        },
        {
          title: '其他涉略',
          descriptions: [
            'Http、Https、Tcp',
            'Git、Linux',
          ],
        },
        /*{
          title: 'Web',
          type: '掌握',
          descriptions: [
            '熟知 JS 基本语法与 API',
            '熟练使用 CSS、LESS 重构页面，还原设计稿',
            '熟练使用前端各大流行技术 <span class="highlight">Vue</span>、<span class="highlight">React</span>、<span class="highlight">微信小程序</span> 等',
            // '熟练开发 <span class="highlight">Hybrid APP</span>，熟练使用 <span class="highlight">Cordova</span>',
            '熟练开发 <span class="highlight">Hybrid APP</span>，熟练使用 <span class="highlight">Cordova</span> 实现应用与原生之间的交互',
            // '有兼容 <span class="highlight">IE</span>、主流浏览器、移动设备的实际开发经验',
            '熟练使用 <span class="highlight">Chrome</span> 等浏览器的调试工具',
            // '熟练使用 <span class="highlight">Chrome</span>、<span class="highlight">Safari</span> 等浏览器的调试工具',
          ],
        },
        {
          title: 'Vue',
          type: '掌握',
          descriptions: [
            '有过多个 Vue 项目开发经验，熟知其基本语法与 API',
            '结合 <span class="highlight">vue-cli</span>、<span class="highlight">Element UI</span>，可快速开发项目',
            '阅读过 <span class="highlight">Vue、Vuex、Vue Router 源码</span>，熟悉其底层原理以及内部实现',
            '深入理解 <span class="highlight">Vue 组件</span>的设计与开发原理，沉淀出多个通用组件',
          ],
        },
        {
          title: 'React',
          type: '熟练',
          descriptions: [
            '结合 <span class="highlight">DvaJS</span>、<span class="highlight">Ant Design</span>，可快速开发项目',
            '熟练使用 <span class="highlight">React Router</span>、<span class="highlight">Redux</span>、<span class="highlight">React Hooks</span>',
            '熟练开发<span class="highlight">高阶组件</span>，减少重复性代码',
          ],
        },
        {
          title: 'ES6',
          type: '熟练',
          descriptions: [
            '熟悉基本语法与知识，在项目中可熟练使用各种 API',
            '了解 <span class="highlight">Babel</span> 转换过程',
          ],
        },
        {
          title: 'Webpack',
          type: '熟练',
          descriptions: [
            '熟悉基本语法与配置，有过 <span class="highlight">Webpack4</span> 的项目构建经验',
          ],
        },
        {
          title: 'Node',
          type: '熟悉',
          descriptions: [
            '在项目中使用过 <span class="highlight">Express</span>、<span class="highlight">Egg</span>',
            '熟悉 <span class="highlight">MongoDB</span>',
            '了解 <span class="highlight">Nginx</span> 配置',
          ],
        },
        {
          title: '其他涉略',
          type: '',
          descriptions: [
            'UI 框架: FrameWork7、ElementUI、Ant Design、Vant',
            '模板语言: Template7、Underscore',
            '网络协议: HTTP、HTTPS、TCP',
            '其他技能: Git、Linux',
          ],
        },*/
      ]
    }
  }
}
</script>

<style scoped lang="less">
.cv-section.experiences {
  width: 245px;
  padding: 25px 20px 0;
  margin-top: 55px;
  border: 2px solid #00a982;
  box-sizing: border-box;
}
</style>
