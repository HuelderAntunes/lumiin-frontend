import { all, takeLatest, call, put } from 'redux-saga/effects'
import api from '../../../services/api'
import { getProvidersSuccess } from './actions'
import { toast } from 'react-toastify'

export function * getProviders ({ payload }) {
  try {
    const { data } = payload
    const response = yield call(api.get, 'providers', data)
    yield put(getProvidersSuccess(response.providers))
  } catch (err) {
    toast.error('Erro ao buscar a lista de fornecedores, por favor tente novamente.')
  }
}

export default all([takeLatest('@provider/GET_PROVIDERS_REQUEST', getProviders)])
