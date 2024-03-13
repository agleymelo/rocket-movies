import { FiSearch } from 'react-icons/fi'

import * as S from './styles'

import { Input } from '../../component/Input'
import { Link } from 'react-router-dom'

export function Header() {
  return (
    <S.Container>
      <h1>Rocket Movies</h1>

      <Input icon={FiSearch} placeholder="Pesquisar pelo título" type="text" />

      <S.Profile>
        <div>
          <Link to="/profile">
            <strong>Agleylson Melo</strong>
          </Link>
          <span>Sair</span>
        </div>

        <img src="https://github.com/agleymelo.png" alt="Foto de perfil" />
      </S.Profile>
    </S.Container>
  )
}
