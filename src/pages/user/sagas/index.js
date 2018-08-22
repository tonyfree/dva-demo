import { call, put, select, takeEvery, all, fork } from 'redux-saga/effects'
import userService from '../services/user'
import usersService from '../services/users'

export function* deleteUser(action) {
  let users = yield select((state) => state.users)
  console.log(users)
  const res = yield call(userService.remove, action.id)
  users = users.filter(user => {
    return user.id !== action.id
  })
  yield put({ type: 'SET_USERS', users})
}

export function* getUsers () {
  const res = yield call(usersService.query)
  yield put({ type: 'SET_USERS', users: res.data.data})
}

export function* watchDeleteUser () {
  yield takeEvery('DELETE_USER', deleteUser)
}

export default function* rootSaga() {
  yield all([fork(getUsers), fork(watchDeleteUser)])
}
