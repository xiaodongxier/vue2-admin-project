import Mock from 'mockjs'
import homeApi from './mockServeData/home'
import userApi from './mockServeData/user'


Mock.mock('/api/home/getDate', homeApi.getStatisticalData)

Mock.mock('/api/user/add','post' , userApi.createUser)
Mock.mock('/api/user/edit','post' , userApi.updateUser)
Mock.mock('/api/user/del','post' , userApi.deleteUser)
// Mock.mock('/api/user/getUser', userApi.getUserList)
Mock.mock(/api\/user\/getUser/, userApi.getUserList)



// Mock.mock('/api/home/getDate', {
//   tableLabel: {
//     name: '课程',
//     todayBuy: '今日购买',
//     monthBuy: '本月购买',
//     totalBuy: '总购买'
//   },
//   'tableData|10': [
//     {     //10表示list数组长度为10，即这个数组有10个元素

//       'name|': '@cname()',
//       'todayBuy|1-1000': 1,
//       'monthBuy|1-1000': 1,
//       'totalBuy|1-1000': 1
//     }
//   ],
//   'countData|10': [
//     {
//       name: "今日支付订单",
//       value: 1234,
//       icon: "success",
//       color: "@color",
//     }
//   ]
//   // ,
//   // 'list|10':[{     //10表示list数组长度为10，即这个数组有10个元素
//   //   'id|+1': 3,   //初始值为3，每次加1 
//   //   'score|1-99.0-2': 0, //产生浮点数，整数部分在1-99之间；小数位数最多保留2位，最少不保留位数
//   //   'exp|0-10.1': 0, //产生一个浮点数，浮点数小数保留1位
//   //   'age|18-60': 0,   //产生一个整数，数的值在18-60之间
//   //   'info|0-5': '大锤,',   //重复"大锤“，重复的次数为0-5次之间
//   //   'isOK|1': false  //随机生成一个布尔值，值为true和false的概率都是1/2
//   // },
//   // {     //10表示list数组长度为10，即这个数组有10个元素
//   //   'id|+1': 3,   //初始值为3，每次加1 
//   //   'score|1-99.0-2': 0, //产生浮点数，整数部分在1-99之间；小数位数最多保留2位，最少不保留位数
//   //   'exp|0-10.1': 0, //产生一个浮点数，浮点数小数保留1位
//   //   'age|18-60': 0,   //产生一个整数，数的值在18-60之间
//   //   'info|0-5': '大锤,',   //重复"大锤“，重复的次数为0-5次之间
//   //   'isOK|1': false  //随机生成一个布尔值，值为true和false的概率都是1/2
//   // }]
// });