const initialState = {
  pokeId: ''
}

const reducer = (state = initialState, action) => {
if (action.type === 'CLICK_UPDATE_VALUE') {
  const temp = {...initialState}
  temp.pokeId = action.pokeId
  return {
    pokeId: temp.pokeId
  }
}

  return state;
}

export default reducer