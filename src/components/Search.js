import React, { useContext } from "react";
import { AppContext } from "./Context";

const Search = () => {
  const { search, setSearch, isError } = useContext(AppContext);

  return(
    <>
  <section className="search-section">
    <h2>Search your favourite movie</h2>
    <form action="#" onSubmit={(e) => e.preventDefault()}>
      <div>
        <input
          type="text"
          placeholder="Search here"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
    </form>
    <div className="card-error">
      <p>{isError.show && isError.msg}</p>
    </div>
  </section>;
  </>
  );

  
};

export default Search;
