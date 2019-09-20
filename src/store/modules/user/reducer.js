const INITIAL_STATE = {
  profile: null
}

export default function user (state = INITIAL_STATE, action) {
  switch (action.type) {
    case '@auth/SIGN_IN_SUCCESS':
      state = { ...state, profile: action.payload.user }

      return state
    case '@auth/SIGN_OUT':
      state = { ...state, profile: null }
      return state
    case '@user/UPDATE_PROFILE_SUCCESS':
      const { email, name, avatar } = action.payload.profile
      state = { ...state, profile: { ...state.profile, email, name, avatar } }
      return state
    default:
      return state
  }
}
