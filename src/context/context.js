import React, { useState, useContext, useEffect } from "react";
export const API_ENDPOINT = `https://www.omdbapi.com/?apikey=${process.env.REACT_APP_MOVIE_API_KEY}`;

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [movies, setMovies] = useState([]);
  const [searchQuery, setSearchQuery] = useState("batman");
  const [error, setError] = useState({ show: false, msg: "" });
  const [loading, setLoading] = useState(true);
  

  const getMovies = async (url) => {
    setLoading(true);

    try {
      const response = await fetch(url);
      const data = await response.json();

      if (data.Response === "True") {
        setMovies(data.Search);
        setError({ show: false, msg: "" });
      } else {
        setError({ show: true, msg: data.Error });
      }
      setLoading(false);
    } catch (error) {
      console.log("====================================");
      console.log(error);
      console.log("====================================");
    }
  };

  useEffect(() => {
    getMovies(`${API_ENDPOINT}&s=${searchQuery}`);
  }, [searchQuery]);

  return (
    <AppContext.Provider
      value={(searchQuery, setSearchQuery, loading, error, movies)}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
export { AppContext, AppProvider };
