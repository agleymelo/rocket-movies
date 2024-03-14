import { useState } from 'react'
import { Link } from 'react-router-dom'
import { FiMail, FiLock } from 'react-icons/fi'

import { Input } from '../../component/Input'
import { Button } from '../../component/Button'
import { useAuth } from '../../hooks/useAuth'

import * as S from './styles'

export function SignIn() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const { signIn } = useAuth()

  async function handleSignIn() {
    if (!email || !password) {
      alert('preencha os campos para realizar o login')
    }

    signIn({ email, password })
  }

  return (
    <S.Container>
      <S.Form>
        <h1>RocketMovies</h1>

        <p>Aplicação para acompanhar tudo que assistir.</p>

        <h2>Faça seu login</h2>

        <Input icon={FiMail} placeholder="E-mail" type="email" onChange={(event) => setEmail(event.target.value)} />
        <Input
          icon={FiLock}
          placeholder="Senha"
          type="password"
          onChange={(event) => setPassword(event.target.value)}
        />

        <Button title="Entrar" onClick={handleSignIn} />

        <Link to="/register">Criar Conta</Link>
      </S.Form>

      <S.Background />
    </S.Container>
  )
}
