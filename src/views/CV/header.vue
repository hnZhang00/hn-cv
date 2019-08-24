<template>
  <header class="cv-header">
    <div class="row first">
      <h1 class="name">{{ name }}</h1>
      <h2 class="job">{{ job }}</h2>
    </div>
    <div class="row">
      <ul class="left">
        <li>{{ gender }} / {{ birth }}</li>
        <li>{{ school.name }} · {{ school.major }}</li>
        <li>{{ school.degree }} / {{ school.graduationTime }}年毕业</li>
      </ul>
      <ul class="right">
        <li>Github - {{ contact.github }}</li>
        <li>{{ contact.email }}</li>
        <li>{{ contact.mobile }}</li>
      </ul>
    </div>
  </header>
</template>

<script>
export default {
  name: 'CV-header',
  data() {
    return {
      name: '张惠娜',
      gender: '女',
      birth: '1995.09',
      job: '前端开发工程师',
      school: {
        name: '华南农业大学',
        major: '计算机科学与技术',
        degree: '本科',
        graduationTime: '2017',
      },
      contact: {
        github: 'hnZhang0_0',
        email: '1138577462@qq.com',
        mobile: '18814127417',
      },
    }
  },
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
