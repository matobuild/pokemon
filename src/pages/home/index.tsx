import React, { useEffect } from "react";
import { pokemonDetailServices, pokemonListServices } from "@/services";
import SearchForm from "@/components/SearchForm";

const HomePage = () => {
  const callData = async () => {
    const data = await pokemonDetailServices.getPokemonDetail("ditto");
    console.log("data", data.data);
  };

  useEffect(() => {
    callData();
  }, []);

  return (
    <div className=" w-[90%] m-[auto] max-w-[1100px]">
      <div className="flex justify-center">
        <img
          src="/images/logo.webp"
          className="max-h-[80px] mt-[20px]"
          alt=""
        />
      </div>
      <SearchForm />
    </div>
  );
};

export default HomePage;
