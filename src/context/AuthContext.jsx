import { createContext } from 'react'

import { api } from '../services/api'

export const AuthContext = createContext({})

export function AuthProvider({ children }) {
  async function signIn({ email, password }) {
    try {
      const response = await api.post('/sessions', {
        email,
        password,
      })

      console.log(response.data)
    } catch (error) {
      if (error.response) {
        alert(error.response.data.message)
      } else {
        alert('Error')
      }
    }
  }

  return <AuthContext.Provider value={{ signIn }}>{children}</AuthContext.Provider>
}
