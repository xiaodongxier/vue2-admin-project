<template>
  <div class="header_contain">
    <div class="header_contain_l">
      <el-button icon="el-icon-menu" size="mini" @click="btnClickAside"></el-button>
      <!-- <span class="text">首页</span> -->
      <el-breadcrumb separator="/">
        <el-breadcrumb-item :to="{ path: item.path }" v-for="(item,index) in tags" :key="item.name" @click.native="addClass(index)" :class="{ actived:index==current}">{{ item.label}}</el-breadcrumb-item>
        <!-- <el-breadcrumb-item><a href="/">活动管理</a></el-breadcrumb-item>
        <el-breadcrumb-item>活动列表</el-breadcrumb-item>
        <el-breadcrumb-item>活动详情</el-breadcrumb-item> -->
      </el-breadcrumb>
    </div>
    <div class="header_contain_r">
      <el-dropdown>
        <span>
          <img src="../assets/favicon.jpg" alt="">
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>个人中心</el-dropdown-item>
          <el-dropdown-item>退出</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  data() {
    return {
      current:0
    }
  },
  methods: {
    btnClickAside() {
      // console.log(this.$store)
      // console.log(this.$store.state.tab.isCollapse)
      this.$store.commit('collspseMenu')
      // console.log(this.$store.state.tab.isCollapse)
    },
    handleBtnClick(index){
        console.log(index)
    },
    addClass:function(index){
                this.current=index;
        console.log(this.current)
            }
  },
  computed: {
    // getBreadcrumb() {
    //   return this.$store.state.tab.tabBreadcrumb
    // },
    ...mapState({
      tags: state => state.tab.tabBreadcrumb
    })
  },
  mounted() {
    console.log('this.tags=====', this.tags)
  }
}
</script>

<style scoped lang="less">
.header_contain {
  height: 60px;
  background: #5c6c7d;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;

  .header_contain_l {
    display: flex;
    align-items: center;
    // background: red;
    .el-breadcrumb {
      margin-left: 10px;
      /deep/.el-breadcrumb__item {
        .el-breadcrumb__inner {
          &.is-link {
            color: #a8a8a8;
          }
        }

        &.actived ,
        // &:last-child {
        :last-child {
          .el-breadcrumb__inner {
            color: #fff;
          }

        }
      }
    }
  }

  .text {
    color: #fff;
    font-size: 14px;
    padding: 0 10px;
  }

  .header_contain_r img {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    vertical-align: middle;
  }
}</style>