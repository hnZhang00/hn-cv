<template>
  <header class="cv-header" :class="{pdf: env !== 'production'}">
    <div class="row first">
      <h1 class="name">{{ name }}</h1>
      <h2 class="job">{{ job }}</h2>
    </div>
    <div class="row">
      <ul class="left">
        <li>{{ gender }} / {{ birth }}</li>
        <li>{{ school.name }} · {{ school.major }}</li>
        <li>{{ school.degree }} / {{ school.graduationTime }}年毕业 / {{year}}年前端开发经验</li>
      </ul>
      <ul class="right">
        <li>Github - {{ contact.github }}<i class="icon icon-github"></i></li>
        <li>{{ contact.email }}<i class="icon icon-email"></i></li>
        <li>{{ contact.mobile }}<i class="icon icon-phone"></i></li>
      </ul>
    </div>
  </header>
</template>

<script>
export default {
  name: 'CV-header',
  data() {
    return {
      env: process.env.NODE_ENV,
      name: '张惠娜',
      gender: '女',
      birth: '1995.09',
      job: '前端开发工程师',
      year: 4,
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
@base-color: #00b38a;

.cv-header {
  width: 100%;
  padding: 3% 4% 1%;
  box-sizing: border-box;
  background-color: @base-color;
  color: white;
  &.pdf {
    background-color: white;
    color: #2c3e50;
    .icon-github {
      background-image: url('../../assets/github_pdf.png');
    }
    .icon-email {
      background-image: url('../../assets/email_pdf.png');
    }
    .icon-phone {
      background-image: url('../../assets/phone_pdf.png');
    }
  }
  .row {
    display: flex;
    justify-content: space-between;
    &.first {
      align-items: flex-end;
      border-bottom: 2px solid #00a982;
      padding-bottom: 1.6%;
      margin-bottom: 1.6%;
    }
  }
  .name {
    margin: 0;
    font-weight: 400;
    font-size: 3.2em;
    letter-spacing: 0.12em;
  }
  .job {
    margin: 0;
    font-size: 1.8em;
    font-weight: 300;
    text-align: right;
  }
  .icon {
    width: 13px;
    height: 13px;
    margin-left: 5px;
    display: inline-block;
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;
    &-github {
      background-image: url('../../assets/github.png');
    }
    &-email {
      background-image: url('../../assets/email.png');
    }
    &-phone {
      background-image: url('../../assets/phone.png');
    }
  }
  ul {
    li {
      display: flex;
      align-items: center;
    }
    &.right li {
      justify-content: flex-end;
    }
  }
}
</style>
