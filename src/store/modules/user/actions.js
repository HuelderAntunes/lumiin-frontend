export function updateProfileRequest (data) {
  return {
    type: '@user/UPDATE_PROFILE_REQUEST',
    payload: { data }
  }
}

export function updateProfileSuccess (profile) {
  return {
    type: '@user/UPDATE_PROFILE_SUCCESS',
    payload: { profile }
  }
}

export function updateProfileFailure () {
  return {
    type: '@user/UPDATE_PROFILE_FAILURE'
  }
}

export function inviteUserRequest (data) {
  return {
    type: '@user/ADD_PROFILE_REQUEST',
    payload: { data }
  }
}

export function inviteUserSuccess (profile) {
  return {
    type: '@user/ADD_PROFILE_SUCCESS',
    payload: { profile }
  }
}

export function inviteUserFailure () {
  return {
    type: '@user/ADD_PROFILE_FAILURE'
  }
}
