export function getProvidersRequest () {
  return {
    type: '@provider/GET_PROVIDERS_REQUEST'
  }
}

export function getProvidersSuccess () {
  return {
    type: '@provider/GET_PROVIDERS_SUCCESS'
  }
}

export function getProvidersFailure () {
  return {
    type: '@provider/GET_PROVIDERS_FAILURE'
  }
}
