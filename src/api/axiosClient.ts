import axios, { type AxiosInstance } from "axios"

export const rickAndMortyApiClient: AxiosInstance = axios.create({
  baseURL: "https://rickandmortyapi.com/api",
  headers: {
    "Content-Type": "application/json"
  }
}) 