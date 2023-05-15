<template>
  <div class="tagsList">
    <el-tag closable v-for="item in tagsList" :key="item.name">{{ item.label }}</el-tag>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tags: [
        { name: '标签一', type: '' },
        { name: '标签二', type: 'success' },
        { name: '标签三', type: 'info' },
        { name: '标签四', type: 'warning' },
        { name: '标签五', type: 'danger' }
      ]
    };
  },
  computed: {
    tagsList() {
      return this.$store.state.tab.tabBreadcrumb
    }
  }
}
</script>

<style scoped lang="less">
.tagsList {
  .el-tag {
    &:not(:last-child) {
      margin-right: 5px;
    }
  }

}
</style>