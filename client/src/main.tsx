import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux/es/exports'
import App from './App'
import { store } from './store/store'
import { PersistGate } from 'redux-persist/integration/react' 
import { persistStore } from 'redux-persist'
import { createRoot } from 'react-dom/client'
//import './index.css'
import styles from "./main.module.scss"
// const container = document.getElementById('root')
// const root = createRoot(container)
let persistor = persistStore(store)
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <>
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>
  </>
)
