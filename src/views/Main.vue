<template>
  <div>
    <el-container class="aside_contain">
      <el-aside width="">
        <common-aside></common-aside>
      </el-aside>
      <el-container class="main_contain_r">
        <el-header>
          <common-header></common-header>
        </el-header>
        <el-main>
          <common-tags style="margin-bottom: 10px;"></common-tags>
          <!-- 路由出口 -->
          <!-- 路由匹配到的组件将渲染在这里 -->
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import CommonAside from '../components/CommonAside.vue';
import CommonHeader from '../components/CommonHeader.vue';
import CommonTags from '../components/CommonTags.vue';
export default {
  data() {
    return {

    }
  },
  components: {
    CommonAside,
    CommonHeader,
    CommonTags
  }
}
</script>

<style scoped>
.main_contain_r .el-header {
  padding: 0;
}
</style>