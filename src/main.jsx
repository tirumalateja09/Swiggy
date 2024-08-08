import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import appStore from './components/redux-toolkit/appStore.jsx'
import { Authentication } from './components/Authentication/Authentication.jsx'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import { useLoggedInfo } from './components/coustomHooks/useLoggedInfo.jsx'
 
const getdata=JSON.parse(localStorage.getItem('loggedUser'))

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
 <useLoggedInfo.Provider value={getdata}>
  <Authentication>
  <Provider store={appStore}>
  <App />
  </Provider>
  <ToastContainer/>
  </Authentication>
  </useLoggedInfo.Provider>
  </>
)
