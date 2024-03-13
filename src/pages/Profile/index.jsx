import { FiUser, FiMail, FiLock, FiArrowLeft, FiCamera } from 'react-icons/fi'

import { Input } from '../../component/Input'
import { Button } from '../../component/Button'

import * as S from './styles'
import { Link } from 'react-router-dom'

export function Profile() {
  return (
    <S.Container>
      <header>
        <Link to="/">
          <FiArrowLeft />
          Voltar
        </Link>
      </header>

      <S.Form>
        <S.Profile>
          <img src="https://github.com/agleymelo.png" alt="" />

          <label htmlFor="avatar">
            <FiCamera />

            <input id="avatar" type="file" />
          </label>
        </S.Profile>

        <Input icon={FiUser} value="Agleylson Melo" />
        <Input icon={FiMail} value="agley@agley.dev" />
        <Input icon={FiLock} placeholder="Senha atual" />
        <Input icon={FiLock} placeholder="Nova Senha" />

        <Button title="Salvar" disabled />
      </S.Form>
    </S.Container>
  )
}
