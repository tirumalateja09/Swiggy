import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import appStore from './components/redux-toolkit/appStore.jsx'
import { Authentication } from './components/Authentication/Authentication.jsx'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

 


ReactDOM.createRoot(document.getElementById('root')).render(
  <>

  <Authentication>
  <Provider store={appStore}>
  <App />
  </Provider>
  <ToastContainer/>
  </Authentication>
  
  </>
)
