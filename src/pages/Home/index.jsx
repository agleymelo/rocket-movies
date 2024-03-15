import { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

import { Header } from '../../component/Header'
import { Button } from '../../component/Button'

import * as S from './styles'
import { Card } from '../../component/Card'
import { api } from '../../services/api'

export function Home() {
  const [movies, setMovies] = useState([])

  const [search, setSearch] = useState('')

  const navigate = useNavigate()

  useEffect(() => {
    async function fetchMovies() {
      const response = await api.get(`/movies?title=${search}`)

      setMovies(response.data)
    }

    fetchMovies()
  }, [search])

  function handleDetails(id) {
    navigate(`/details/${id}`)
  }

  return (
    <S.Container>
      <Header />

      <S.Main>
        <S.ContentHeader>
          <h3>Meus Filmes</h3>

          <Link to="/new">
            <Button title="Adicionar Filme" />
          </Link>
        </S.ContentHeader>

        <S.SectionCard>
          {movies.map((movie) => (
            <Card key={movie.id} data={movie} onClick={() => handleDetails(movie.id)} />
          ))}
        </S.SectionCard>
      </S.Main>
    </S.Container>
  )
}
