<template>
  <section class="cv-section hobbies">
    <cv-section-header :title="title"></cv-section-header>
    <div v-for="item in list" class="cv-section-item">
      <p class="title">{{ item.title }}</p>
      <p class="time">{{ item.time }}</p>
      <p></p>
      <ul class="list">
        <li class="list-item">
          <span class="item-title">工作职位:&nbsp;</span>
          {{ item.job }}
        </li>
        <li class="list-item">
          <span class="item-title">主要负责:&nbsp;</span>
          {{ item.responsibilities }}
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
import cvSectionHeader from './section-header.vue'

export default {
  name: 'CV-section-hobbies',
  components: {
    cvSectionHeader,
  },
  data() {
    return {
      title: '经历',
      list: [
        {
          title: '深圳恒拓高科信息技术有限公司',
          time: '2016.07 至今',
          job: '前端开发工程师',
          responsibilities: '公司产品的迭代任务；项目部的前端支持；部分项目的前端负责人，负责其前端技术架构选型，把控开发进度',
        }
      ]
    }
  }
}
</script>

<style scoped lang="less">
</style>
