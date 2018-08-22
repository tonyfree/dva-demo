const users = (state = [], action) => {
  switch(action.type) {
    case 'SET_USERS':
      return action.users
    // case 'DELETE_USER':
    //   return state.filter(user => {
    //     return action.id !== user.id
    //   })
    default:
      return state
  }
}

export default users