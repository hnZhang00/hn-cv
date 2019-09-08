<template>
  <div class="cv">
    <cv-header></cv-header>
    <div class="cv-content">
      <div class="cv-content__item left">
        <cv-section-experiences></cv-section-experiences>
        <cv-section-technologies></cv-section-technologies>
        <cv-section-hobbies></cv-section-hobbies>
      </div>
      <div class="cv-content__item right">
        <cv-section-projects></cv-section-projects>
      </div>
    </div>
  </div>
</template>

<script>
import cvHeader from './CV/header.vue'
import cvSectionExperiences from './CV/section-experiences.vue'
import cvSectionProjects from './CV/section-projects.vue'
import cvSectionTechnologies from './CV/section-technologies.vue'
import cvSectionHobbies from './CV/section-hobbies.vue'

export default {
  name: 'CV',
  components: {
    cvHeader,
    cvSectionExperiences,
    cvSectionProjects,
    cvSectionTechnologies,
    cvSectionHobbies,
  },
}
</script>

<style lang="less">
@base-color: #00b38a;

.highlight {
  color: @base-color;
}

.cv {
  max-width: 1000px;
  width: 100%;
  padding: 0 0 30px;
  margin: 0;
  position: relative;
  margin: 0 auto;
  background-color: white;
  font-size: 14px;
  ul {
    padding: 0;
    margin: 0;
    list-style: none;
    li {
      font-size: 0.9em;
      & + li {
        margin-top: 0.26em;
      }
    }
  }
  p {
    font-size: 1em;
    line-height: 1;
    margin: 0 0 8px;
  }
  &-content {
    width: 100%;
    padding: 0 4%;
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
    &-item {
      text-align: left;
      position: relative;
      margin-bottom: 20px;
      .type {
        padding: 0 5px;
        line-height: 20px;
        font-size: 13px;
        color: @base-color;
        border: 1px solid @base-color;
        border-radius: 4px;
        position: absolute;
        top: 0;
        right: 0;
      }
      .title {
        font-weight: 600;
      }
      .time {
        font-weight: 400;
      }
    }
    .list-item {
      font-size: 0.93em;
      line-height: 18px;
      padding-left: 15px;
      margin-bottom: 3px;
      position: relative;
      &:before {
        content: '';
        width: 4px;
        height: 4px;
        position: absolute;
        top: 7px;
        left: 0;
        background-color: #444;
      }
      .item-title {
        font-weight: 600;
      }
    }
  }
}

@media screen and (max-width: 800px) {
  .cv-content {
    display: block;
    &__item {
      width: 100%;
      margin: 0 !important;
    }
  }
}

@media screen and (max-width: 500px) {
  .cv {
    font-size: 13px;
  }
  .cv-header {
    .name {
      font-size: 2.3em !important;
      letter-spacing: 0.09em !important;
    }
    .job {
      font-size: 1.4em !important;
    }
    li {
      font-weight: 300;
    }
  }
}
</style>
