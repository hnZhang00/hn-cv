<template>
  <section class="cv-section experiences">
    <cv-section-header :title="title"></cv-section-header>
    <div v-for="item in list" class="cv-section-item">
      <div class="type">{{ item.type }}</div>
      <p class="title">{{ item.title }}</p>
      <p class="time">{{ item.time }}</p>
      <ul class="list">
        <li v-if="item.descriptions" class="list-item">
          <span class="item-title">项目描述:&nbsp;</span>
          {{ item.descriptions }}
        </li>
        <li v-if="item.technologies" class="list-item">
          <span class="item-title">项目技术:&nbsp;</span>
          {{ item.technologies }}
        </li>
        <li v-if="item.achievements" class="list-item">
          <span class="item-title">项目实现:&nbsp;</span>
          <span v-html="item.achievements"></span>
        </li>
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
      title: '项目',
      list: [
        {
          title: '流程大师',
          time: '2017.01-至今',
          type: 'Vue、Framework7',
          descriptions: '设计流程需要填写的表单以及整个审批过程中需要的节点和审批人，发布后将按照设计好的审批流在每个节点进行流转',
          technologies: 'Vue、Vue Router、Vuex、Lodash、Webpack、Framework7、Template7、Cordova',
          achievements: `
            <p class="item-content">(1) 结合设计稿重构页面，完善页面交互过程，完成与后端的接口联调;</p>
            <p class="item-content">(2) 基于 HTML5 的 <span class="highlight">Drag</span> 跟 <span class="highlight">Drop</span>，开发<span class="highlight">拖拽组件</span>，简化表单生成过程;</p>
            <p class="item-content">(3) 基于 <span class="highlight">Vue</span>、<span class="highlight">Framework7</span> 开发可复用的组件，包括树形结构的人员和组织选择控件、日期时间选择控件等等;</p>
            <p class="item-content">(4) 基于 <span class="highlight">contenteditable</span> 属性，实现简易版文本编辑器;</p>
            <p class="item-content">(5) 内嵌 <span class="highlight">iframe</span> 展示流程实例，并实现本地与 iframe 之间的通信;</p>
            <p class="item-content">(6) 实现角色、状态、表单权限及规则的设置功能;</p>
            <p class="item-content">(7) 开发<span class="highlight">计算组件</span>、<span class="highlight">数据库视图组件</span>；</p>
          `
            // <p class="item-content">(5) 内嵌 <span class="highlight">iframe</span> 展示流程实例，通过 <span class="highlight">window.addEventListener("message", function(e) {}, false)</span> 实现本地与 iframe 之间的通信;</p>
        },
        {
          title: 'Workplus 管理后台服务号模块',
          time: '2017.08-至今',
          type: 'Angular',
          descriptions: '',
          technologies: 'Angular、Gulp、Webpack',
          achievements: `
            <p class="item-content">(1) 实现各类消息的推送功能，包括文本、图片、文件以及图文等;</p>
            <p class="item-content">(2) 实现菜单栏管理、图文评论管理、素材管理、人员分组管理以及消息自动回复、关键词回复等功能;</p>
            <p class="item-content">(3) 结合 <span class="highlight">AudioContext</span> 对象和 <span class="highlight">MediaStream</span> 对象，实现 Web 在线录音功能；
                                        通过改变声道和采样位数，实现音频的体积压缩;</p>
            <p class="item-content">(4) 基于百度开源的 <span class="highlight">UEditor</span>，开发出 Angular 模块下可复用的富文本编辑组件，实现图文消息的富文本编辑功能;</p>
          `
            // <p class="item-content">(2) 基于 <span class="highlight">AudioContext</span> 对象，实现 Web 在线录音功能，
            //                             通过 AudioContext 对象的 <span class="highlight">createMediaStreamSource</span> 和 <span class="highlight">createScriptProcessor</span> 方法，
            //                             结合 <span class="highlight">navigator.mediaDevices.getUserMedia</span> 中获取的<span class="highlight">媒体流对象</span>，
            //                             创建音频源以及效果节点，并在节点的 <span class="highlight">onaudioprocess</span> 方法采集音频数据，以此达到录音的目的，
            //                             同时将双声道变为单声道、采样位数由默认的16位改为8位，实现音频的体积压缩;</p>
        },
        {
          title: '前端代码生成系统',
          time: '2019.03-至今',
          type: 'Python3、Jinjia2、Vue2',
          descriptions: '工作上遇到的许多项目在开发上有大部分页面功能可以复用，基于减少重复性工作以提高效率的立场，开发出此套代码生成工具',
          technologies: 'Python3、Jinjia2、Vue2',
          achievements: `
            基于 <span class="highlight">vue-admin-template</span> 编写页面模板，
            通过管理后台配置项目所需页面及结构，导出 <span class="highlight">JSON</span> 数据，
            <span class="highlight">Python</span> 读取该数据并通过模板语言 <span class="highlight">Jinjia2</span> 将模板及数据转换为代码
          `
        },
        {
          title: '哈尔斯中台管理后台、商城',
          time: '2018.11-2019.02',
          type: 'React',
          descriptions: '',
          technologies: 'React、Dva、Ant Design',
          achievements: `
            <p class="item-content">(1) 基于中台管理员和供应商管理员两种角色，实现管理后台的档案、产品、报价、订单、活动以及权限等功能;</p>
            <p class="item-content">(2) 实现商城的查看产品、添加购物车、动态计算产品活动价格、下单结算以及查看物流详情等功能;</p>
            <p class="item-content">(3) 实现主流浏览器、IE10及以上版本的兼容使用;</p>
            <p class="item-content">(4) 开发 ClickOutSide、Counter 等可复用组件;</p>
          `
        },
      ]
    }
  }
}
</script>

<style scoped lang="less">
</style>
