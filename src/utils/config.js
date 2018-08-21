const host = 'http://rap2api.taobao.org/app/mock/26191'

module.exports = {
  api: {
    user: {
      lists: `${host}/user/lists`,
      delete: `${host}/user/delete`,
      detail: `${host}/user/detail`
    }
  }
}