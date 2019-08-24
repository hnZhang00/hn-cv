<template>
  <section class="cv-section experiences">
    <cv-section-header :title="title"></cv-section-header>
    <div v-for="item in list" class="cv-section-item">
      <div v-if="type" class="type">{{ item.type }}</div>
      <div class="title">{{ item.title }}</div>
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
      title: '经历',
      list: []
    }
  }
}
</script>

<style scoped lang="less">
</style>
