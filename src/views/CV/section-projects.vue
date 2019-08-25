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
          title: '前端代码生成系统',
          time: '2019.08-至今',
          type: 'Python3、Jinjia2、Vue2',
          descriptions: '工作上遇到的许多项目在开发上有大部分页面功能可以复用，基于减少重复性工作以提高效率的立场，开发出此套代码生成工具',
          technologies: 'Python3、Jinjia2、Vue2',
          achievements: '基于 <span class="highlight">vue-admin-template</span> 编写页面模板，通过管理后台配置项目所需页面及结构，导出 JSON 数据，Python 读取该数据并通过模板语言 Jinjia2 将模板及数据转换为代码'
        },
        {
          title: '哈尔斯中台管理后台、商城',
          time: '2018.11-2019.02',
          type: 'React',
          descriptions: '',
          technologies: 'React、Redux、Dva、Ant Design',
          achievements: '(1) 基于中台管理员和供应商管理员两种角色，实现管理后台的档案、产品、报价、订单、活动以及权限等功能; (2) 实现商城的查看产品、添加购物车、动态计算产品活动价格、下单结算以及查看物流详情等功能; (3) 兼容主流浏览器、IE10及以上版本;'
        },
        {
          title: '中集卡片',
          time: '2019.01-2019.02',
          type: '轻应用',
          descriptions: '',
          technologies: 'React、React Router、Redux、Cordova、LESS',
          achievements: '(1) 重构页面; (2) 通过 <span class="highlight">Cordova</span> 实现应用与原生 APP 的交互;'
        },
        {
          title: '智趣猴',
          time: '2018.11-2019.02',
          type: ' 微信小程序',
          descriptions: '',
          technologies: '',
          achievements: '(1) 开发带有农历信息的日历控件; (2) 课程详情的<span class="highlight">富文本展示</span>; (3) 课程购买及退款; (4) 设计缓存策略，优化加载速度;'
        },
        {
          title: 'Workplus 管理后台服务号模块',
          time: '2017.08-2017.09',
          type: 'Angular1',
          descriptions: '',
          technologies: 'Angular、Gulp、Webpack',
          achievements: '(1) 服务号的各类消息推送，包括文本、语音、图片、文件以及图文; (2) <span class="highlight">Web 在线录音</span>、播放以及上传; (3) <span class="highlight">富文本编辑器</span>编辑图文消息; (4) 开发 Angular 模块的树形结构人员、组织选择器; (5) 菜单栏功能;'
        },
        {
          title: '错误抓取系统',
          time: '2017.06-2017.06',
          type: 'Node',
          descriptions: '',
          technologies: 'Node、Express、MongoDB',
          achievements: '(1) 开发错误抓取插件，通过 onerror 事件，捕获应用中的异常错误; (2) 基于 Express 开发后台，通过 <span class="highlight">Mongoose</span> 连接 MongoDB 数据库; (3) 实现 Workplus 的单点登录;'
        },
        {
          title: '流程大师',
          time: '2017.01-至今',
          type: 'Vue1、Framework7',
          descriptions: '设计流程需要填写的表单以及整个审批过程中需要的节点和审批人，发布后将按照设计好的审批流在每个节点进行流转',
          technologies: 'Vue、Vue Router、Vuex、Lodash、Webpack、Framework7、Template7、Cordova',
          achievements: '(1) 开发<span class="highlight">拖拽组件</span>，简化表单生成过程; (2) 结合设计稿开发 Vue 模块和 Framework7 模块的树形结构人员、组织选择器; (3) 实现角色、状态、表单权限及规则的设置功能; (4) 通过内嵌 <span class="highlight">iframe</span> 查看流程实例; (5) 开发<span class="highlight">计算组件</span>、<span class="highlight">数据库视图组件</span>；'
        },
      ]
    }
  }
}
</script>

<style scoped lang="less">
</style>
