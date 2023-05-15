export default {
  state: {
    isCollapse: false,
    tabBreadcrumb: [
      {
        path: '/',
        name: 'home',
        label: '首页',
        icon: 's-home',
        url: 'Home/Home'
      }
    ]
  },
  mutations: {
    // 此处的data其实就是上面的state
    collspseMenu (data) {
      data.isCollapse = !data.isCollapse
    },
    upBreadcrumb(state,value) {
      console.log('state',state)
      console.log(',value',value)
      // 判断是否为首页
      if(value.name !== 'home') {
        console.log('value.name--------------------',value)
        const index = state.tabBreadcrumb.findIndex(item =>  item.name == value.name)
        if(index === -1) {
         state.tabBreadcrumb.push(value) 
        }
      }
    }

  }
}