<template>
  <div class="tagsList">
    <!-- <el-tag :closable="item.name == 'home' ? false : true" v-for="item in tagsList" :key="item.name">{{ item.label }}</el-tag> -->
    <el-tag :closable="item.name !== 'home'" v-for="(item, index) in tagsList" :key="item.name"
      :effect="$route.name == item.name ? 'dark' : 'light'" @click="btnOpenPage(item)" @close="closePages(item, index)">{{
        item.label }}</el-tag>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex';
export default {
  // data() {
  //   return {
  //     tags: [
  //       { name: '标签一', type: '' },
  //       { name: '标签二', type: 'success' },
  //       { name: '标签三', type: 'info' },
  //       { name: '标签四', type: 'warning' },
  //       { name: '标签五', type: 'danger' }
  //     ]
  //   };
  // },
  methods: {
    //  辅助函数
    ...mapMutations(['closeTage']),
    btnOpenPage(item) {
      // console.log(item)
      // this.$router.push(item.path)
      this.$router.push({ name: item.name })
    },
    // 关闭面包屑
    // 常规方法 & 辅助函数
    closePages(item, index) {
      // es5
      // this.$store.commit('closeTage', item)
      this.closeTage(item)
      if(item.name !== this.$route.name) {
        console.log("删除的面包屑不是当前path")
      }
      const length = this.$store.state.tab.tabBreadcrumb.length;
      if(index === length ){
        this.$router.push({
          name: this.$store.state.tab.tabBreadcrumb[index-1].name
        })
      }else{
        this.$router.push({
          name: this.$store.state.tab.tabBreadcrumb[index].name
        })
      }
    }
  },
  computed: {
    // tagsList() {
    //   return this.$store.state.tab.tabBreadcrumb
    // }
    ...mapState({
      tagsList: stare => stare.tab.tabBreadcrumb,
    })
  },
  mounted() {
    console.log('CommonTags => $route.name', this.$route.name)
    // console.log('CommonTags => $route.path', this.item.name)
  }
}
</script>

<style scoped lang="less">
.tagsList {
  .el-tag {
    cursor: pointer;

    &:not(:last-child) {
      margin-right: 5px;
    }
  }

}
</style>