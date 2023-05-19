import http from '../utils/request'

export const getDate = () => {
  return http.get('home/getDate')
}

// 关云参数查看axios官网
export const getUser = (params) => {
  return http.get('/user/getUser', params)
}

export const addUser = (data) => {
  return http.post('/user/add', data)
}


export const editUser = (data) => {
  return http.post('user/edit', data)
}

export const delUser = (data) => {
  return http.post('user/del', data)
}

// export const updateUser = () => {
//   return http.get('user/getDate')
// }
