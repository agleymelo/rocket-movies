import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { FiArrowLeft, FiMail, FiLock, FiUser } from 'react-icons/fi'

import { Input } from '../../component/Input'
import { Button } from '../../component/Button'
import { api } from '../../services/api'

import * as S from './styles'

export function SignUp() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const navigate = useNavigate()

  function handleSignUp() {
    if (!name || !email || !password) {
      alert('Preencha todos os campos para efetuar o cadastro')
    }

    api
      .post('/users', { name, email, password })
      .then(() => {
        alert('Usuario cadastro com sucesso')
        navigate('/')
      })
      .catch((error) => {
        if (error.response) {
          alert(error.response.data.message)
        } else {
          alert('Nao foi possivel cadastrar')
        }
      })
  }

  return (
    <S.Container>
      <S.Form>
        <h1>RocketMovies</h1>

        <p>Aplicação para acompanhar tudo que assistir.</p>

        <h2>Crie sua conta</h2>

        <Input icon={FiUser} placeholder="Nome" type="text" onChange={(event) => setName(event.target.value)} />
        <Input icon={FiMail} placeholder="E-mail" type="email" onChange={(event) => setEmail(event.target.value)} />
        <Input
          icon={FiLock}
          placeholder="Senha"
          type="password"
          onChange={(event) => setPassword(event.target.value)}
        />

        <Button title="Cadastrar" onClick={handleSignUp} />

        <Link to="/">
          <FiArrowLeft />
          Voltar para o login
        </Link>
      </S.Form>

      <S.Background />
    </S.Container>
  )
}
