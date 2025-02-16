import { useLazyQuery } from "@apollo/client";
import { SEARCH_FOODS } from "../graphql/mutations";
import { useState } from "react";

function SearchFood() {
  const [searchKeyword, setSearchKeyword] = useState(""); // État pour stocker la recherche
  const [fetchFoods, { data, loading, error }] = useLazyQuery(SEARCH_FOODS);

  const handleSearch = () => {
    if (searchKeyword.trim() !== "") {
      fetchFoods({ variables: { keyword: searchKeyword } });
    }
  };

  return (
    <div className="list">
      <h2>Rechercher un Plat</h2>

      {/* Barre de recherche */}
      <input
        type="text"
        className="search-input"
        placeholder="Entrez un mot-clé (ex: bouillabaisse, Vaud ...)"
        value={searchKeyword}
        onChange={(e) => setSearchKeyword(e.target.value)}
      />
      <button className="search-btn" onClick={handleSearch}>
        Rechercher
      </button>

      {/* Affichage des résultats */}
      {loading && <p>Recherche en cours...</p>}
      {error && <p>Erreur : {error.message}</p>}

      {data && data.searchFoods.length > 0 ? (
        <div className="food-list">
          {data.searchFoods.map((food: any) => (
            <div className="food-item" key={food.id}>
              <p className="foodName">{food.name}</p>
              <img className="food-image" src={food.imgUrl} alt={food.name} />
            </div>
          ))}
        </div>
      ) : (
        data && <p>Aucun plat trouvé.</p>
      )}
    </div>
  );
}

export default SearchFood;
