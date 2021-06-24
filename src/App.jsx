import React, { useState, useEffect } from 'react';
import './App.css';
import { getList } from './shared/services/list';

const  App = () => {
  const [list, setList] = useState([])

  useEffect(() => {
    let mounted = true;
    getList()
      .then((items) => {
        if(mounted) {
          setList(items)
        }
      })
    return () => mounted = false
  }, [])
  return (
    <div className="wrapper">
      <h1>My Grocery List</h1>
      <ul>
        {list.map((item) => <li>{item.product}</li>)}
      </ul>
    </div>
  );
}

export default App;
