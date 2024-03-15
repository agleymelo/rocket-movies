import { Link, Navigate, useNavigate } from 'react-router-dom'
import { FiUser, FiMail, FiLock, FiArrowLeft, FiCamera } from 'react-icons/fi'

import avatarPlaceHolder from '../../assets/avatar_placeholder.svg'
import { useAuth } from '../../hooks/useAuth'
import { Input } from '../../component/Input'
import { Button } from '../../component/Button'
import { api } from '../../services/api'

import * as S from './styles'
import { useState } from 'react'

export function Profile() {
  const { user, updateProfile } = useAuth()

  const [name, setName] = useState(user.name)
  const [email, setEmail] = useState(user.email)
  const [passwordOld, setPasswordOld] = useState('')
  const [passwordNew, setPasswordNew] = useState('')

  const avatarURL = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceHolder

  const [avatar, setAvatar] = useState(avatarURL)
  const [avatarFile, setAvatarFile] = useState(null)

  const navigate = useNavigate()

  function handleBack() {
    navigate(-1)
  }

  async function handleUpdate() {
    const updated = {
      name,
      email,
      old_password: passwordOld,
      password: passwordNew,
    }

    const userUpdated = Object.assign(user, updated)

    await updateProfile({
      user: userUpdated,
      avatarFile,
    })
  }

  function handleChangeAvatar(event) {
    const file = event.target.files[0]

    setAvatarFile(file)

    const imagePreview = URL.createObjectURL(file)
    setAvatar(imagePreview)
  }

  return (
    <S.Container>
      <header>
        <button onClick={handleBack}>
          <FiArrowLeft />
          Voltar
        </button>
      </header>

      <S.Form>
        <S.Profile>
          <img src={avatar} alt={user.name} />

          <label htmlFor="avatar">
            <FiCamera />

            <input id="avatar" type="file" onChange={handleChangeAvatar} />
          </label>
        </S.Profile>

        <Input icon={FiUser} value={name} onChange={(event) => setName(event.target.value)} />
        <Input icon={FiMail} value={email} onChange={(event) => setEmail(event.target.value)} />
        <Input icon={FiLock} placeholder="Senha atual" onChange={(event) => setPasswordOld(event.target.value)} />
        <Input icon={FiLock} placeholder="Nova Senha" onChange={(event) => setPasswordNew(event.target.value)} />

        <Button title="Salvar" onClick={handleUpdate} />
      </S.Form>
    </S.Container>
  )
}
