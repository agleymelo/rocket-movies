import { FiArrowLeft, FiMail, FiLock, FiUser } from 'react-icons/fi'

import { Input } from '../../component/Input'
import { Button } from '../../component/Button'

import * as S from './styles'
import { Link } from 'react-router-dom'

export function SignUp() {
  return (
    <S.Container>
      <S.Form>
        <h1>RocketMovies</h1>

        <p>Aplicação para acompanhar tudo que assistir.</p>

        <h2>Crie sua conta</h2>

        <Input icon={FiUser} placeholder="Nome" type="text" />
        <Input icon={FiMail} placeholder="E-mail" type="email" />
        <Input icon={FiLock} placeholder="Senha" type="password" />

        <Button title="Cadastrar" />

        <Link to="/">
          <FiArrowLeft />
          Voltar para o login
        </Link>
      </S.Form>

      <S.Background />
    </S.Container>
  )
}
