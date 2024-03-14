import { createContext, useEffect, useState } from 'react'

import { api } from '../services/api'

export const AuthContext = createContext({})

export function AuthProvider({ children }) {
  const [data, setData] = useState({})

  async function signIn({ email, password }) {
    try {
      const response = await api.post('/sessions', {
        email,
        password,
      })

      const { user, token } = response.data

      localStorage.setItem('@rocketmovies:user', JSON.stringify(user))
      localStorage.setItem('@rocketmovies:token', token)

      api.defaults.headers.common['Authorization'] = `Bearer ${token}`
      setData({ user, token })
    } catch (error) {
      if (error.response) {
        alert(error.response.data.message)
      } else {
        alert('Error')
      }
    }
  }

  useEffect(() => {
    const user = localStorage.getItem('@rocketmovies:user')
    const token = localStorage.getItem('@rocketmovies:token')

    if (user && token) {
      api.defaults.headers.common['Authorization'] = `Bearer ${token}`
      setData({ user, token })
    }
  }, [])

  return <AuthContext.Provider value={{ signIn, user: data.data }}>{children}</AuthContext.Provider>
}
