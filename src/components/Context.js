import React, { useEffect, useState } from "react";

export const API_URL = `http://www.omdbapi.com/?apikey=${process.env.REACT_APP_API_KEY}`;

const AppContext = React.createContext();

//we need to create provider first
const AppProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [movie, setMovie] = useState([]);
  const [isError, setIsError] = useState({ show: "false", msg: "" });
  const [search, setSearch] = useState("action");

  const getMovies = async (url) => {
    setIsLoading(true);
    try {
      const res = await fetch(url);
      const data = await res.json();
      console.log(data);

      if (data.Response === "True") {
        setIsLoading(false);
        setIsError({
          show: "false",
          msg: "",
        });
        setMovie(data.Search);
      } else {
        setIsError({
          show: "true",
          msg: data.Error,
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    let timeOut = setTimeout(() => {
      getMovies(`${API_URL}&s=${search}`);
    }, 800);

    return () => clearTimeout(timeOut); //Dbounce
  }, [search]);

  return (
    <AppContext.Provider
      value={{ isLoading, isError, movie, search, setSearch }}
    >
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppProvider };
