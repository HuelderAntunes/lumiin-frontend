import React from 'react'
import { ToastContainer } from 'react-toastify'
import Routes from './routes'
import { Provider } from 'react-redux'
import { Router } from 'react-router-dom'
import history from './services/history'
import { Home } from './pages'
import { store, persistor } from './store'
import { PersistGate } from 'redux-persist/integration/react'
import GlobalStyle from './styles/global'
const App = function (props) {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Router history={history}>
          <Routes />
          <ToastContainer autoClose={3000} />
          <GlobalStyle />
        </Router>
      </PersistGate>
    </Provider>
  )
}

export default App
