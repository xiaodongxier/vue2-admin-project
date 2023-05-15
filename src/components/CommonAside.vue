<template>
  <div>
    <!--
           :collapse="isCollapse" 是否折叠
           background-color="#ccc" text-color="#000" active-text-color="red" 
         -->
    <el-menu default-active="null" class="el-menu-vertical-demo aside_box" @open="handleOpen" @close="handleClose"
      mode="vertical" :collapse="isCollapse()" background-color="#545c64" text-color="#fff" active-text-color="#ffd04b" :collapse-transition="false">
      <h3 class="aside_title"> {{ isTitleMini() }}</h3>
      <!-- 导航1 -->
      <el-menu-item :index="item.path" v-for="item of noChildren" :key="item.name" @click="clickMenu(item)">
        <i :class="`el-icon-${item.icon}`"></i>
        <span slot="title">{{ item.label }}</span>
      </el-menu-item>


      <!-- 导航2 -->
      <el-submenu :index="items.label" v-for="items of hasChildren" :key="items.name">
        <template slot="title">
          <i :class="`el-icon-${items.icon}`"></i>
          <span>{{ items.label }}</span>
        </template>
        <el-menu-item-group v-for="item of items.children" :key="item.name">
          <el-menu-item :index="item.path" @click="clickMenu(item)">{{ item.label }}</el-menu-item>
        </el-menu-item-group>
      </el-submenu>


      <!-- 导航3 -->
      <el-menu-item index="5" disabled>
        <i class="el-icon-document"></i>
        <span slot="title">禁止/无权限</span>
      </el-menu-item>

    </el-menu>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // 折叠
      menuData: [
        {
          path: '/',
          name: 'home',
          label: '首页',
          icon: 's-home',
          url: 'Home/Home'
        },
        {
          path: '/mall',
          name: 'mall',
          label: '商品管理',
          icon: 'video-play',
          url: 'MallManage/MallManage'
        },
        {
          path: '/user',
          name: 'user',
          label: '用户管理',
          icon: 'user',
          url: 'UserManage/UserManage'
        },
        {
          label: '其他',
          icon: 'location',
          children: [
            {
              path: '/PageOne',
              name: 'PageOne',
              label: '页面1',
              icon: 'setting',
              url: 'Other/PageOne'
            },
            {
              path: '/PageTwo',
              name: 'PageTwo',
              label: '页面2',
              icon: 'setting',
              url: 'Other/PageTwo'
            }
          ]
        }
      ]
    }
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    clickMenu(item) {
      // this.$router.push(item.path).catch(error => {})
      var nowPath = this.$route.path;
      var goPath = item.path;
      if (nowPath !== goPath && !(nowPath == '/home' && goPath == '/')) {
        console.log("aside路由跳转数据", JSON.stringify(item, null, 2))
        this.$router.push(goPath)
      }
      this.$store.commit('upBreadcrumb', item)
    },
    isCollapse() {
      return this.$store.state.tab.isCollapse
    },
    isTitleMini() {
      return this.isCollapse() ? '系统' : '换料管理系统'
    }
  },
  computed: {
    noChildren() {
      return this.menuData.filter(function (item) { return !item.children })
      // return this.menuData.filter(item => !item.children)
    },
    hasChildren() {
      return this.menuData.filter(item => item.children)
    }
  }
}
</script>


<style lang="less" scoped>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}

.aside_box {
  height: 100vh;
  border-right: none;

  .aside_title {
    text-align: center;
    line-height: 48px;
    color: #fff;
    font-size: 16px;
  }
}
</style>