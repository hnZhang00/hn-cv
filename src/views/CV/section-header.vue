<template>
  <header class="cv-section-header">
    <h4 class="title">{{ title }}</h4>
  </header>
</template>

<script>
export default {
  name: 'CV-section-header',
  props: {
    title: String
  }
}
</script>

<style scoped lang="less">
.cv-section-header {
  width: 100%;
  height: 16px;
  border-bottom: 1px solid #ededed;
  margin-bottom: 30px;
  position: relative;
  .title {
    min-width: 130px;
    width: 20%;
    height: 32px;
    line-height: 32px;
    background-color: #eee;
    border-radius: 32px;
    margin: 0 auto;
    position: relative;
    font-size: 1em;
    &:before, &:after {
      width: 10%;
      height: 32px;
      background-color: white;
      content: '';
      position: absolute;
      top: 0;
    }
    &:before {
      left: -10%;
    }
    &:after {
      right: -10%;
    }
  }
}
</style>
