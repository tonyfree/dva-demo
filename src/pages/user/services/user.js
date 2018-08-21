import { request, config } from '~utils'

const { api } = config
const { user } = api

function remove (params) {
  return request({
    url: user.delete,
    method: 'delete',
    data: params
  })
}

function detail (params) {
  return request({
    url: user.detail,
    method: 'get',
    data: params
  })
}

export default {
  remove,
  detail
}