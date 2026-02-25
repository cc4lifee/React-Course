import { CustomHeader } from "./shared/components/CustomHeader";
import { PreviousSearches } from "./gifs/components/PreviousSearches";
import { SearchBar } from "./shared/components/SearchBar";
import { GifList } from "./gifs/components/GifList";

import { useGifs } from "./gifs/hooks/useGifs";

export const GifsApp = () => {
  const { previousTerms, gifs, handleSearch, handleTermClicked} = useGifs()
 
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
      <GifList gifs={gifs} />
    </>
  );
};
