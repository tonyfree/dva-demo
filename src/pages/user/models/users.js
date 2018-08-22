import usersService from '../services/users'
import userService from '../services/user'

export default {
  namespace: 'users',
  state: {
    list: [],
    name: ''
  },
  reducers: {
    setUsers (state, {list}) {
      return {
        ...state,
        list
      }
    }
  },
  effects: {
    *fetch( action, { call, put }) {
      const res = yield call(usersService.query)
      yield put({ type: 'setUsers', list: res.data.data})
    },

    *remove({id}, { select, call, put }) {
      let list = yield select((state) => state.users.list)
      yield call(userService.remove, id)
      list = list.filter(user => {
        return user.id !== id
      })
      yield put({ type: 'setUsers', list})
    }
  },
  subscriptions: {
    setup({dispatch, history}) {
      return history.listen(({pathname, query}) => {
        if (pathname === '/user') {
          dispatch({type:'fetch'})
        }
      })
    }
  }
}