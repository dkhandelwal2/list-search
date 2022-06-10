import axios from 'axios';
import { useEffect, useState } from 'react';
import '../App.css';

function SearchList() {
  const [allData, setAllData] = useState([]);
  const [filteredData, setFilteredData] = useState(allData);
  const [searchInput, setSearchInput] = useState("");

  useEffect(() => {
    axios
      .get(`https://run.mocky.io/v3/b606e1f7-74f2-429d-93de-32ce62ab7901`)
      .then((response) => {
        setAllData(response.data);
        setFilteredData(response.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const handleChange = (e) => {
    let value = e.target.value.toLowerCase();
    setSearchInput(value);

    let result1 = [];
    let result2 = [];
    let result3 = [];
    let result4 = [];

    result1 = allData.filter((data) => data.first_name.toLowerCase().search(value) !== -1);
    result2 = allData.filter((data) => data.last_name.toLowerCase().search(value) !== -1);
    result3 = allData.filter((data) => data.gender.toLowerCase().search(value) !== -1);
    result4 = allData.filter((data) => data.address.toLowerCase().search(value) !== -1);

    let result = result1.concat(result2, result3, result4);
    setFilteredData(result);
  }

  return (
    <div className='app'>
      <h2>List Search</h2>
      <input
        className={`search-field ${searchInput.length > 1 ? "data-shown" : ""}`}
        type="search"
        placeholder="Search"
        // onChange={(e) => searchItems(e.target.value)}
        onChange={(e) => handleChange(e)}
      />
      <div className={`search-data-box ${searchInput.length > 1 ? "" : "no-data"}`}>
        {searchInput.length > 1
          ? filteredData.map((item) => {
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

export default SearchList;