import { createStore, applyMiddleware, compose } from 'redux'

export default (reducers, middlewares) => {
  return createStore(reducers, compose(applyMiddleware(...middlewares)))
}
