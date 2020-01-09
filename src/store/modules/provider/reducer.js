const INITIAL_STATE = {
  providers: null
}

export default function provider (state = INITIAL_STATE, action) {
  switch (action.type) {
    case '@provider/GET_PROVIDERS_SUCCESS':
      state = { ...state, providers: action.payload.providers }
      return state
    default:
      return state
  }
}
