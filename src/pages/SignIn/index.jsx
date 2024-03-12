import { FiMail, FiLock } from 'react-icons/fi'

import { Input } from '../../component/Input'
import { Button } from '../../component/Button'

import * as S from './styles'

export function SignIn() {
  return (
    <S.Container>
      <S.Form>
        <h1>RocketMovies</h1>

        <p>Aplicação para acompanhar tudo que assistir.</p>

        <h2>Faça seu login</h2>

        <Input icon={FiMail} placeholder="E-mail" type="email" />
        <Input icon={FiLock} placeholder="Senha" type="password" />

        <Button title="Entrar" />
      </S.Form>

      <S.Background />
    </S.Container>
  )
}
