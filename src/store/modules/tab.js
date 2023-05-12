export default {
  state: {
    isCollapse: false
  },
  mutations: {
    // 此处的data其实就是上面的state
    collspseMenu (data) {
      data.isCollapse = !data.isCollapse
    }
  }
}