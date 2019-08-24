<template>
  <div class="cv">
    <cv-header></cv-header>
    <cv-panel-header></cv-panel-header>
    <cv-panel-item></cv-panel-item>
  </div>
</template>

<script>
import cvHeader from './CV/header.vue'
import cvPanelHeader from './CV/panel-header.vue'
import cvPanelItem from './CV/panel-item.vue'

export default {
  name: 'CV',
  data() {
    return {
      p_info: {
        name: '',
        gender: '',
        birth: '',
        school: ''
      }
    }
  },
  components: {
    cvHeader,
    cvPanelHeader,
    cvPanelItem
  }
}
</script>

<style lang="less">
.cv {
  max-width: 1000px;
  width: 100%;
  height: 100%;
  padding: 0;
  margin: 0;
  position: relative;
  margin: 0 auto;
}
</style>
