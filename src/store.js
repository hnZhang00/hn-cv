import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    info: {
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
    },
    experiences: [],
    projects: [],
    technologies: [],
  },
  mutations: {

  },
  actions: {

  },

  getters: {
    info: state => state.info
  }
})
