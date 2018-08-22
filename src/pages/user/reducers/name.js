const name = (name = '', action) => {
  switch (action.type) {
    case 'SET_NAME':
      return action.name
    default:
      return ''  
  }
}

export default name