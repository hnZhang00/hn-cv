<template>
  <section class="cv-section experiences">
    <cv-section-header :title="title"></cv-section-header>
    <div class="cv-section-item">
      <ul class="list">
        <li v-for="item in list" class="list-item">{{ item }}</li>
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
      title: '爱好',
      list: [
        '羽毛球（现公司女单冠军）',
        'K歌',
      ]
    }
  }
}
</script>

<style scoped lang="less">
</style>
