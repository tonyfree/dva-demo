import { request, config } from '~utils'

const { api } = config
const { user } = api

function query (params) {
  return request({
    url: user.lists,
    method: 'get',
    data: params
  })
}

export default {
  query
}