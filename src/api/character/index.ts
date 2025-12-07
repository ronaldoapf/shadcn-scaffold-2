import { rickAndMortyApiClient } from "../axiosClient"

const base = "/character"

interface Location {
  name: string;
  url: string;
}

interface Character {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: Location;
  location: Location;
  image: string;
  episode: string[];
  url: string;
  created: string;
}

interface Pagination<T> {
  info: {
    count: number;
    pages: number;
    next: string;
    prev: string | null;
  }
  results: T[]
}


export const CharacterApi = {
  getCharacters: async (page: number = 0): Promise<Pagination<Character>> => {
    const { data } = await rickAndMortyApiClient.get<Pagination<Character>>(base, {
      params: {
        page
      }
    })
    return data
  }
}