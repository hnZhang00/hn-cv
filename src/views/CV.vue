<template>
  <div class="cv">
    <cv-header></cv-header>
    <div class="cv-content">
      <div class="cv-content__item left">
        <section class="cv-section">
          <cv-section-header title="经历"></cv-section-header>
          <cv-panel-item></cv-panel-item>
        </section>
        <section class="cv-section">
          <cv-section-header title="项目"></cv-section-header>
          <cv-panel-item></cv-panel-item>
        </section>
      </div>
      <div class="cv-content__item right">
        <section class="cv-section">
          <cv-section-header title="技能"></cv-section-header>
          <cv-panel-item></cv-panel-item>
        </section>
      </div>
    </div>
  </div>
</template>

<script>
import cvHeader from './CV/header.vue'
import cvSectionHeader from './CV/section-header.vue'
import cvPanelItem from './CV/panel-item.vue'

import { mapGetters } from 'vuex'

export default {
  name: 'CV',
  components: {
    cvHeader,
    cvSectionHeader,
    cvPanelItem
  },
  ready() {
  },
  computed: {
    ...mapGetters({
      info: 'info'
    })
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
  background-color: white;
  &-content {
    width: 100%;
    padding: 0 40px;
    box-sizing: border-box;
    display: flex;
    flex-wrap: 100%;
    &__item {
      width: e('calc(50% - 10px)');
      &.right {
        margin-left: 20px;
      }
    }
  }
  &-section {
    width: 100%;
    margin-top: 40px;
  }
}

@media screen and (max-width: 1000px) {
  .cv-content {
    display: block;
    &__item {
      width: 100%;
      margin: 0 !important;
    }
  }
}
</style>
