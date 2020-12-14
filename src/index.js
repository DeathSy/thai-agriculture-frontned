import React from 'react'
import ReactDOM from 'react-dom'
import { UserContextProvider } from './contexts/UserContext'
import { ActionContextProvider } from './contexts/ActionContext'
import App from './App'

ReactDOM.render(
  <React.StrictMode>
    <ActionContextProvider>
      <UserContextProvider>
        <App />
      </UserContextProvider>
    </ActionContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
