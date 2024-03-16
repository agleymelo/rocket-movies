import axios from 'axios'

export const api = axios.create({
  baseURL: "https://movie-notes-api-sju7.onrender.com"
})