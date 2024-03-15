import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { FiArrowLeft } from 'react-icons/fi'

import { Input } from '../../component/Input'
import { Textarea } from '../../component/Textarea'
import { Header } from '../../component/Header'
import { Button } from '../../component/Button'

import * as S from './styles'
import { MarkItem } from '../../component/MarkItem'
import { api } from '../../services/api'

export function New() {
  const navigate = useNavigate()

  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [rating, setRating] = useState(0)

  const [tags, setTags] = useState([])
  const [newTag, setNewTag] = useState('')

  function handleBack() {
    navigate(-1)
  }

  function handleAddTags() {
    setTags((prevState) => [...prevState, newTag])
    setNewTag('')

    console.log(newTag)
  }

  function handleRemoveTag(deleted) {
    setTags((prevState) => prevState.filter((tag) => tag !== deleted))
  }

  async function handleNewNoteMovie() {
    if (!title) {
      return alert('Digite o titulo da nota')
    }

    if (!rating) {
      return alert('Coloque uma nota')
    }

    if (rating < 1 || rating > 5) {
      return alert('O valor da nota deve ser entrar 1 e 5')
    }

    // if (tags) {
    //   return alert(
    //     'Voce deixou um link no campo apra adicionar, mas nao clicou em adicionar. Clique para adicionar ou deixe o campo vazio'
    //   )
    // }

    console.log(tags)

    await api.post('/movies', {
      title,
      description,
      rating,
      tags,
    })

    navigate('/')
  }

  return (
    <S.Container>
      <Header />

      <S.Form>
        <button onClick={handleBack}>
          <FiArrowLeft />
          Voltar
        </button>

        <h2>Novo Filme</h2>

        <S.InputWrappers>
          <Input placeholder="Título" type="text" onChange={(event) => setTitle(event.target.value)} />
          <Input placeholder="Sua nota (de 0 a 5)" type="number" onChange={(event) => setRating(event.target.value)} />
        </S.InputWrappers>

        <Textarea placeholder="Observações" onChange={(event) => setDescription(event.target.value)} />

        <S.Section>
          <h2>Marcadores</h2>

          <div>
            {tags.map((tag, index) => (
              <MarkItem key={String(index)} value={tag} onClick={() => handleRemoveTag(tag)} />
            ))}

            <MarkItem
              isNew
              placeholder="Novo marcador"
              onChange={(event) => setNewTag(event.target.value)}
              onClick={handleAddTags}
            />
          </div>
        </S.Section>

        <S.Buttons>
          {/* <S.ButtonDelete title="Excluir Filme" /> */}

          <Button title="Salvar alterações" onClick={handleNewNoteMovie} />
        </S.Buttons>
      </S.Form>
    </S.Container>
  )
}
