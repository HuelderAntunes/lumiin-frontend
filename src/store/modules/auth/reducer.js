const INITIAL_STATE = {
  token: null,
  signed: false,
  loading: false
}

export default function auth (state = INITIAL_STATE, action) {
  switch (action.type) {
    case '@auth/SIGN_IN_SUCCESS':
      console.log('succes auth')
      state = {
        ...state,
        token: action.payload.token,
        signed: true,
        loading: false
      }
      return state
    case '@auth/SIGN_IN_REQUEST':
      state = { ...state, loading: true }
      return state
    case '@auth/SIGN_FAILURE':
      state = { ...state, loading: false }
      return state
    case '@auth/SIGN_OUT':
      state = { ...state, token: null, signed: false }
      return state
    default:
      return state
  }
}
