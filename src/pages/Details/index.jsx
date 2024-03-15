import { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { FiArrowLeft, FiClock } from 'react-icons/fi'

import avatarPlaceHolder from '../../assets/avatar_placeholder.svg'

import { Header } from '../../component/Header'
import { Tag } from '../../component/Tag'

import { Star } from '../../component/Star'
import { api } from '../../services/api'
import { useAuth } from '../../hooks/useAuth'

import * as S from './styles'

export function Details() {
  const { user } = useAuth()

  const params = useParams()
  const navigate = useNavigate()

  const [data, setData] = useState(null)

  const avatarURL = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceHolder

  let stars = []

  async function handleRemove() {
    const confirm = window.confirm('Deseja realmente remover a nota?')

    if (confirm) {
      await api.delete(`/movies/${params.id}`)
      navigate(-1)
    }
  }

  useEffect(() => {
    async function fetchNote() {
      const response = await api.get(`/movies/${params.id}`)

      setData(response.data)

      for (let i = 1; i <= 5; i++) {
        if (i <= data.rating) {
          stars.push(<Star key={i} isStared />)
        } else {
          stars.push(<Star key={i} />)
        }
      }
    }

    fetchNote()
  }, [])

  return (
    <S.Container>
      <Header />

      {data && (
        <S.Content>
          <Link to="/">
            <FiArrowLeft /> Voltar
          </Link>

          <S.MovieDetails>
            <S.MovieInfo>
              <h2>{data.title}</h2>

              <div>{data.rating && stars}</div>
            </S.MovieInfo>

            <S.MovieNoteAuthor>
              <S.AuthorProfile>
                <img src={avatarURL} alt="" />
                <span>{user.name}</span>
              </S.AuthorProfile>

              <p>
                <FiClock />
                <time dateTime="2024-05-23 08:00">23/05/22</time>
                às 08:00
              </p>
            </S.MovieNoteAuthor>

            <S.MovieTags>{data.tags && data.tags.map((tag) => <Tag key={tag.id} title={tag.name} />)}</S.MovieTags>
          </S.MovieDetails>

          <S.MovieText>{data.description}</S.MovieText>
        </S.Content>
      )}
    </S.Container>
  )
}
