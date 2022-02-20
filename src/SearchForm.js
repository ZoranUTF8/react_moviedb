import { useGlobalContext } from "./context/context";

function SearchForm() {
  const formSubmit = (e) => {
    e.preventDefault();
  };

  

  return <form className="search-form" onSubmit={formSubmit}>
    <h2>Search for movies</h2>
    <input type="text" className="form-input" />

  </form>;
}

export default SearchForm;
