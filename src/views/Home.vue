<template>
  <div>
    <el-row :gutter="20">
      <el-col :span="8" class="home_contain">
        <el-card class="user_contain">
          <div class="user_header">
            <div>
              <img src="../assets/favicon.jpg" alt="">
            </div>
            <div class="head_content">
              <h3>Admin</h3>
              <p>超级管理员</p>
            </div>
          </div>
          <!-- <hr> -->
          <div class="login_info">
            <p>上次登陆时间：**********</p>
            <p>上次登陆地点：**********</p>
          </div>
        </el-card>


        <!--  -->
        <el-card class="table_contain">
          <el-table :data="tableData" style="width: 100%" stripe>
            <el-table-column :prop="key" :label="val" v-for="(val, key) in tableLabel" :key="val"
              style="text-align: center;"></el-table-column>
            <!-- <el-table-column prop="name" label="课程"></el-table-column>
            <el-table-column prop="todayBuy" label="今天购买"></el-table-column>
            <el-table-column prop="monthBuy" label="本月购买"></el-table-column>
            <el-table-column prop="totalBuy" label="总购买"></el-table-column> -->
          </el-table>
        </el-card>
      </el-col>


      <!--  -->
      <el-col :span="16" class="number_contain">
        <el-card class="number_item_wrap">
          <el-row :gutter="10">
            <el-col :span="8" v-for="item in countData" :key="item.cion">
              <el-card class="number_card" :body-style="{ display: 'flex', padding: '0' }">
                <div class="left_icon" :style="`background: ${item.color};`">
                  <i :class="`icon el-icon-${item.icon}`"></i>
                </div>
                <div class="right_number">
                  <p class="r_num">¥{{ item.value }}</p>
                  <p class="r_desc">{{ item.name }}</p>
                </div>
              </el-card>
            </el-col>
          </el-row>
        </el-card>


        <!--  -->
        <el-card>
          <div ref="echarts_zx" style="height: 360px;"></div>
        </el-card>

        <!--  -->
        <el-row :gutter="10">
          <el-col :span="12">
            <el-card>
              <div ref="echarts_zz" style="height: 290px;"></div>
            </el-card>
          </el-col>
          <el-col :span="12">
            <el-card>
              <div ref="echarts_sx" style="height: 290px;"></div>
            </el-card>
          </el-col>
        </el-row>
      </el-col>

    </el-row>
  </div>
</template>

<script>
import { getDate } from '../api/index'
import * as echarts from 'echarts';

export default {
  data() {
    return {
      tableLabel: {
        name: '课程',
        todayBuy: '今日购买',
        monthBuy: '本月购买',
        totalBuy: '总购买'
      },
      tableData: [],
      orderData: [],
      userData: [],
      videoData: [],
      countData: [
        {
          name: "今日支付订单",
          value: 1234,
          icon: "success",
          color: "#2ec7c9",
        },
        {
          name: "今日收藏订单",
          value: 210,
          icon: "star-on",
          color: "#ffb980",
        },
        {
          name: "今日未支付订单",
          value: 1234,
          icon: "s-goods",
          color: "#5ab1ef",
        },
        {
          name: "本月支付订单",
          value: 1234,
          icon: "success",
          color: "#2ec7c9",
        },
        {
          name: "本月收藏订单",
          value: 210,
          icon: "star-on",
          color: "#ffb980",
        },
        {
          name: "本月未支付订单",
          value: 1234,
          icon: "s-goods",
          color: "#5ab1ef",
        },
      ]
    }
  },
  created() {

  },
  mounted() {
    getDate().then(({ data }) => {
      const { tableData, orderData, userData, videoData } = data.data;
      this.tableData = tableData
      this.orderData = orderData
      this.userData = userData
      this.videoData = videoData
    })
  },
  methods: {
    upEchartsZx: function () {
      var myecharts = echarts.init(this.$refs.echarts_zx)
      const option = {
        xAxis: {
          type: 'category',
          boundaryGap: false,
          // data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
          data: this.orderData.date
        },
        yAxis: {
          type: 'value'
        },
        series: this.orderData.data
      };
      option && myecharts.setOption(option);
      console.log("Home.vue , upEchartsZx", this.orderData.date)
    },
    upEchartsZz: function () {
      var myecharts = echarts.init(this.$refs.echarts_zz)
      const option = {
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'shadow'
          }
        },
        // 图例
        legend: {},
        xAxis: {
          type: 'category',
          // data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
          data: this.userData.map(item => item.date)
        },
        yAxis: {
          type: 'value'
        },
        series: [
          {
            name: '新增用户',
            // data: [120, 200, 150, 80, 70, 110, 130],
            data: this.userData.map(item => item.new),
            type: 'bar'
          },
          {
            name: '活跃用户',
            // data: [120, 200, 150, 80, 70, 110, 130],
            data: this.userData.map(item => item.active),
            type: 'bar'
          }
        ]
      };
      option && myecharts.setOption(option);
      console.log("Home.vue , upEchartsZz", this.userData)
    },
    upEchartsSx: function () {
      var myecharts = echarts.init(this.$refs.echarts_sx)
      const option = {
        legend: {
          top: 'bottom'
        },
        toolbox: {
          show: true,
          feature: {
            mark: { show: true },
            dataView: { show: true, readOnly: false },
            restore: { show: true },
            saveAsImage: { show: true }
          }
        },
        tooltip: {
          trigger: 'item'
        },
        series: [
          {
            name: '饼图测试',
            type: 'pie',
            // radius: [20, 100],
            radius: '50%',
            // center: ['50%', '50%'],
            // roseType: 'area',
            // itemStyle: {
            //   borderRadius: 8
            // },
            data: this.videoData
          }
        ]
      };
      option && myecharts.setOption(option);
      console.log("Home.vue , upEchartsSx", this.videoData)
    }
  },
  watch: {
    tableData(e) {
      this.$nextTick(() => {
        this.tableData = e
        console.log(e)
      })
    },
    orderData: {
      handler(newDate, oldDate) {
        console.log('newDate', newDate)
        console.log('oldDate', oldDate)
        this.upEchartsZx()
      },
      // 深度监听
      deep: true
    },
    userData: {
      handler() {
        this.upEchartsZz()
      },
      deep: true
    },
    videoData: {
      handler() {
        this.upEchartsSx()
      },
      deep: true
    }
  }
}
</script>


<style scoped lang="less">
.el-card:not(:last-child) {
  margin-bottom: 10px;
}

.user_contain {
  .user_header {
    display: flex;
    align-items: center;
    margin-bottom: 10px;

    img {
      width: 150px;
      border: 1px solid #ccc;
      border-radius: 50%;
      overflow: hidden;
    }

    .head_content {
      margin-left: 35px;
    }
  }

  .login_info {
    padding-top: 10px;
    border-top: 1px solid #ccc;

    p {
      margin-top: 10px;
      font-size: 14px;
      color: #8a8a8a;
    }
  }
}

.number_contain {
  .number_item_wrap {
    .el-row {
      display: flex;
      height: 180px;
      align-items: center;
      flex-wrap: wrap;
    }

    .icon {
      width: 80px;
      height: 80px;
      text-align: center;
      line-height: 80px;
      font-size: 40px;
      color: #fff;
    }

    .right_number {
      display: flex;
      flex-direction: column;
      justify-content: center;
      margin-left: 10px;

      p {
        white-space: nowrap;
      }

      .r_desc {
        color: #565656;
        font-size: 13px;
      }

      .r_num {
        font-size: 20px;
        font-weight: 900;
      }
    }

  }
}
</style>