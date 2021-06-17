import React, { useState } from "react";

const Search = (props) => {
  const [searchTerm, setSearchTerm] = useState("");

  const [searchResult, setSearchResult] = useState(false);

  const [found, setFound] = useState([]);

  const [notFound, setNotFound] = useState();

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
    console.log("You searched ", searchTerm);
    console.log(props.user);
};
  const searchItem = () => {
    if (searchTerm.length <= 0) return;
    else {
      console.log("Searching.....");
      const found_res = props.user.filter(
        (val) => val.text.toLowerCase() === searchTerm.toLowerCase()
      );

      if (found_res.length > 0) {
        setTimeout(() => {
          setFound(found_res);
          setSearchResult(true);
        }, 2000);
      } else {
        console.log("Not Found");
        setSearchResult(true);
        setNotFound(true);
      }
    }
  };

  const resetHandler = () => {
    if (searchTerm !== "") {
      setSearchResult(false);
      setSearchTerm("");
      setFound([]);
      setNotFound();
    }
  };

  return (
    <div className={"mainDiv"}> 
      {searchResult ? (
        <div>
          {" "}
          <h4> Search Result </h4>
          {notFound ? (
            <h2 className="notfound"> Sorry No Result Found </h2>
          ) : (
            <ul>
              {found.map((item) => {
                return (
                  <div key={item.id} className="list-items">
                    <table key={item.id} className="table-items">
                    <td>  {"Item name : " + item.text + "   "}

                      {"Item name : " + item.value}
                      </td>
                    </table>
                  </div>
                );
              })}
            </ul>
          )}
        </div>
      ) : (
        <div>
          <div>
            <input
              type="text"
              className="Search-input"
              onChange={handleChange}
              placeholder="Search here..."
            />

            <button className="btn  btn-warning mt-2 mb-2 search_btn" onClick={searchItem}>
              {" "}
              Search{" "}
            </button>
            <button className="btn  btn-dark mt-2 mb-2 reset_btn" onClick={resetHandler}>
        {" "}
        Reset Search
      </button>
     
          </div>
        </div>
      )}
      
    </div>
  );
      };

export default Search;
