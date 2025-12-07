import { useQuery } from "@tanstack/react-query";
import { CharacterApi } from ".";

interface UseGetAllCharactersProps {
  page: number
}

export function useGetAllCharacters({ page }: UseGetAllCharactersProps) {
  return useQuery({
    queryKey: ["characters", page],
    queryFn: () => CharacterApi.getCharacters(page)
  })
}