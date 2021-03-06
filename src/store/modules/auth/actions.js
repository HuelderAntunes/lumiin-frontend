export function signInRequest (email, password, history) {
  return {
    type: '@auth/SIGN_IN_REQUEST',
    payload: { email, password, history }
  }
}

export function signInSuccess (token, user) {
  return {
    type: '@auth/SIGN_IN_SUCCESS',
    payload: { token, user }
  }
}

export function signFailure (token, user) {
  return {
    type: '@auth/SIGN_FAILURE'
  }
}

export function signOut (history) {
  return {
    type: '@auth/SIGN_OUT',
    payload: { history }
  }
}
