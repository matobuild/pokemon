import axios from "axios";
import { POKEMON_BASE_URL } from "@/utils/constant";
import { IPokemonListResponse } from "@/interface/pokemonList";

interface IGetPokemonListResponse {
  status: number | undefined;
  data: IPokemonListResponse;
}

export const pokemonListServices = {
  getPokemonList: async (
    limit?: number,
    offset?: number
  ): Promise<IGetPokemonListResponse> => {
    const response = await axios.get(
      `${POKEMON_BASE_URL}/pokemon?limit=${limit || 151}&offset=${offset || 0}`
    );
    return response;
  },
};
