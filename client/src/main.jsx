import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import { persistStore, persistReducer } from 'redux-persist'
import { PersistGate } from 'redux-persist/integration/react';
import storage from 'redux-persist/lib/storage'

import 'react-toastify/ReactToastify.css'
import authReducer from './state'

const persistConfig = { key: 'root', storage}
const persistedReducer = persistReducer(persistConfig, authReducer)

const store = configureStore({ reducer: persistedReducer });

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistStore(store)} >
        <BrowserRouter>
          <ToastContainer theme='dark' position='top-right' autoClose={3000} closeOnClick pauseOnHover={true} />
          <App />
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </React.StrictMode>,
)
