import PokemonCard from "@/components/PokemonCard";
import { IPokemonDetailResponse } from "@/interface/pokemonDetail";
import { pokemonDetailServices } from "@/services";
import React, { useEffect, useState } from "react";
import { Routes, Route, useParams } from "react-router-dom";

type pokemonType = {
  data: IPokemonDetailResponse | undefined;
  loading: boolean;
  error: null | any;
};

const DetailPage = () => {
  const { name } = useParams();

  const [pokemon, setPokemon] = useState<pokemonType>({
    data: undefined,
    loading: true,
    error: null,
  });

  const callData = async (name: string) => {
    const response = await pokemonDetailServices.getPokemonDetail(name);
    if (response.status === 200) {
      if (response.data)
        setPokemon({
          data: {
            ...response.data,
            image:
              response.data.sprites.other.dream_world.front_default ||
              response.data.sprites.other["official-artwork"].front_default,
          },
          loading: false,
          error: null,
        });
    } else {
      setPokemon({
        data: undefined,
        loading: false,
        error: response.error,
      });
    }
  };

  useEffect(() => {
    if (name) callData(name);
  }, [name]);

  return (
    <div className=" w-[90%] m-[auto] max-w-[1100px]">
      <div className="flex justify-center">
        <img
          src="/images/logo.webp"
          className="max-h-[80px] mt-[20px]"
          alt=""
        />
      </div>

      <div className="w-[90%] max-w-[600px] m-[auto]">
        {pokemon.data && (
          <div className="rounded-[20px] overflow-hidden shadow p-[16px] m-[auto]">
            <div className="bg-center aspect-square w-full bg-cover rounded-[20px] relative h-[400px]">
              <img
                className="absolute h-[auto] max-h-[400px] aspect-square translate-x-[-50%] translate-y-[-50%] top-[50%] left-[50%]"
                src="/images/pokemon_bg.png"
                alt=""
              />
              <img
                className="absolute rounded-t-lg h-[50%] sm:h-[250px] p-[40px] translate-x-[-50%] translate-y-[-50%] top-[50%] left-[50%]"
                src={pokemon.data.image}
                alt=""
              />
            </div>
            <div className="pt-5">
              <div className="flex justify-between">
                <h5 className="capitalize mb-2 text-xl font-bold tracking-tight text-white">
                  {pokemon.data.name}
                </h5>
                <h5 className="mb-2 text-xl font-bold tracking-tight text-white">
                  #{pokemon.data.id}
                </h5>
              </div>

              <div className="flex gap-2 justify-end mt-[16px]">
                {pokemon.data.types.map((item) => {
                  return (
                    <span
                      className={`badge-type-${item.type.name} px-[14px] capitalize py-1 rounded-[16px]`}
                    >
                      {item.type.name}
                    </span>
                  );
                })}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default DetailPage;
