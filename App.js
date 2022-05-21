import './App.css';
import React, { useState, useEffect } from 'react'
import axios from 'axios'
function App() {
  const [data, setData] = useState([]);
  const [searchValue, setSearchValue] = useState('')
  useEffect(() => {
    axios.get('http://3.108.244.88:5000/api/user-access-token')
      .then((result) => {
        console.log(result, 'val')
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])
  useEffect(() => {
    if (searchValue) {
      axios.get(`http://3.108.244.88:5000/api/data?seach_string=${searchValue}`, {
        headers: { 'user-access-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjoiVHJpbmtlcnIgUmVhY3QgSW50ZXJ2aWV3In0.ANkDejjsr9gc5w_VdHGuk5K80nSpfRoe9WULmhv33fU' }
      }).then((res) => {
        setData(res.data)
        console.log('res', res)
      })
        .catch((err) => {
          console.log(err)
        })
    }
  }, [searchValue])
  return (
    <div className="App">
      <input placeholder="search" value={searchValue} onChange={(e) => setSearchValue(e.target.value)} />
      <div>
        {data.map((val) => {
          <h1>{ }</h1>
        })}
      </div>
    </div>
  );
}

export default App;
