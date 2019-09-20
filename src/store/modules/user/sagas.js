import { all, takeLatest, call, put, takeEvery } from 'redux-saga/effects'
import api from '../../../services/api'
import { updateProfileSuccess, updateProfileFailure, inviteUserFailure, inviteUserSuccess } from './actions'
import { toast } from 'react-toastify'

export function * updateProfile ({ payload }) {
  try {
    const { data } = payload

    const response = yield call(api.put, 'users', data)

    toast.success('Informações salvas com sucesso.')

    yield put(updateProfileSuccess(response.data))
  } catch (err) {
    toast.error('Erro ao atualizar os dados, confira e tente novamente!')
    yield put(updateProfileFailure())
  }
}

export function * inviteProfile ({ payload }) {
  try {
    const { data } = payload

    const response = yield call(api.post, 'users', data)

    toast.success('Convite enviado com sucesso.')
    console.log(response.data)
    yield put(inviteUserSuccess(response.data))
  } catch (err) {
    toast.error('Erro ao enviar convite.')
    yield put(inviteUserFailure())
  }
}

export default all([takeLatest('@user/UPDATE_PROFILE_REQUEST', updateProfile),
  takeEvery('@user/ADD_PROFILE_REQUEST', inviteProfile)])
