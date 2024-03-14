import { Link } from 'react-router-dom'
import { FiSearch } from 'react-icons/fi'

import avatarPlaceHolder from '../../assets/avatar_placeholder.svg'

import { Input } from '../../component/Input'
import { useAuth } from '../../hooks/useAuth'

import * as S from './styles'
import { api } from '../../services/api'

export function Header() {
  const { user } = useAuth()

  const avatarURL = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceHolder

  return (
    <S.Container>
      <h1>Rocket Movies</h1>

      <Input icon={FiSearch} placeholder="Pesquisar pelo título" type="text" />

      <S.Profile>
        <div>
          <Link to="/profile">
            <strong>{user.name}</strong>
          </Link>
          <span>Sair</span>
        </div>

        <img src={avatarURL} alt={user.name} />
      </S.Profile>
    </S.Container>
  )
}
