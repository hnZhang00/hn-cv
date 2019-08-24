<template>
  <header class="cv-header">
    <div class="row first">
      <h1 class="name">{{ info.name }}</h1>
      <h2 class="job">{{ info.job }}</h2>
    </div>
    <div class="row">
      <ul class="left">
        <li>{{ info.gender }} / {{info.birth }}</li>
        <li>{{ info.school.name }} · {{info.school.major }}</li>
        <li>{{ info.school.degree }} / {{info.school.graduationTime }}年毕业</li>
      </ul>
      <ul class="right">
        <li>Github - {{ info.contact.github }}</li>
        <li>{{ info.contact.email }}</li>
        <li>{{ info.contact.mobile }}</li>
      </ul>
    </div>
  </header>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'CV-header',
  computed: {
    ...mapGetters({
      info: 'info'
    })
  }
}
</script>

<style scoped lang="less">
.cv-header {
  width: 100%;
  padding: 30px 40px;
  box-sizing: border-box;
  background-color: #00b38a;
  color: white;
  .row {
    display: flex;
    justify-content: space-between;
    &.first {
      align-items: flex-end;
      border-bottom: 2px solid #00a982;
      padding-bottom: 15px;
      margin-bottom: 15px;
    }
  }
  .name {
    margin: 0;
    font-size: 46px;
    font-weight: 400;
    letter-spacing: 5px;
  }
  .job {
    margin: 0;
    font-size: 24px;
    font-weight: 300;
    text-align: right;
  }
  ul {
    padding: 0;
    margin: 0;
    list-style: none;
    li {
      font-size: 14px;
      & + li {
        margin-top: 5px;
      }
    }
    &.left {
      text-align: left;
    }
    &.right {
      text-align: right;
    }
  }
}
</style>
