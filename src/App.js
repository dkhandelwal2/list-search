import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [APIData, setAPIData] = useState([]);
  const [filteredResults, setFilteredResults] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  useEffect(() => {
    axios
      .get(`https://run.mocky.io/v3/b606e1f7-74f2-429d-93de-32ce62ab7901`)
      .then((response) => {
        setAPIData(response.data);
      });
  }, []);

  const searchItems = (searchValue) => {
    setSearchInput(searchValue);
    if (searchInput !== "") {
      const filteredData = APIData.filter((item) => {
        return Object.values(item)
          .join("")
          .toLowerCase()
          .includes(searchInput.toLowerCase());
      });
      setFilteredResults(filteredData);
    } else {
      setFilteredResults(APIData);
    }
  };

  return (
    <div className='app'>
      <h2>List Search</h2>
      <input
        className={`search-field ${searchInput.length > 1 ? "data-shown" : ""}`}
        type="search"
        placeholder="Search"
        onChange={(e) => searchItems(e.target.value)}
      />
      <div className={`search-data-box ${searchInput.length > 1 ? "" : "no-data"}`}>
        {searchInput.length > 1
          ? filteredResults.map((item) => {
            return (
              <>
                <div className='user-data'>
                  <div className='content'>
                    <div className='upper-row'>
                      <div className='name'>{`${item.first_name} ${item.last_name}`}</div>
                      <div className='gender sm-font'>{item.gender}</div>
                    </div>
                    <div className='email sm-font'>{item.email}</div>
                    <div className='address sm-font'>{item.address}</div>
                  </div>
                </div>
              </>
            );
          })
          : null}
      </div>
    </div>
  );
}

export default App;