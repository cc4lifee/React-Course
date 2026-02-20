import { CustomHeader } from "./shared/components/CustomHeader";
import { PreviousSearches } from "./gifs/components/PreviousSearches";
import { SearchBar } from "./shared/components/SearchBar";
import { GifList } from "./gifs/components/GifList";
import { mockGifs } from "./mock-data/gifs.mock";
import { useState } from "react";

export const GifsApp = () => {
  const [previousTerms, setPreviousTerms] = useState(["dragon ball z"]);

  const handleTermClicked = (term: string) => {
    console.log({ term });
  };
// https://api.giphy.com/v1/gifs/search?api_key=ib5Vp0x6JjX0GSrxxlxKH4E4x6Pc8KzA&q=saitama&limit=10&lang=en
// ib5Vp0x6JjX0GSrxxlxKH4E4x6Pc8KzA api key
  const handleSearch = (query: string = "") => {
    query = query.trim().toLowerCase();
    if (query.length === 0) return;

    if (previousTerms.includes(query)) return;

    setPreviousTerms([query, ...previousTerms.splice(0, 7)]);
  };
  return (
    <>
      {/* Header */}
      <CustomHeader
        title="Buscador de Gifs"
        description="Descrubre y comparte el gif perfecto"
      />

      {/* Search */}

      <SearchBar placeholder="Buscar Gifs" onQuery={handleSearch} />

      {/* Busquedas Previas */}
      <PreviousSearches
        searches={previousTerms}
        onLabelClicked={handleTermClicked}
      />

      {/* gifs */}
      <GifList gifs={mockGifs} />
    </>
  );
};
