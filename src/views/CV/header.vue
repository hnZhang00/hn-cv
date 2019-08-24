<template>
  <div class="cv-header">
  </div>
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
  background-color: #2EB289;
}
</style>
