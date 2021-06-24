import React, { useState, useEffect, useRef } from 'react';
import './App.css';
import { getList, setItem } from './shared/services/list';

const  App = () => {
  const [list, setList] = useState([]);
  const [itemInput, setItemInput] = useState('');
  const [alert, setAlert] = useState(false);
  const [error, setError] = useState(false);
  let mounted = useRef(true);

  useEffect(() => {
    mounted.current = true;
    if(list.length && !alert) return;
    getList()
      .then((items) => {
        if(mounted.current){
          setList(items);
        }
      })
    return () => mounted.current = false;
  }, [alert,list])

  const handleSubmit = (e) => {
    e.preventDefault();
    setItem(itemInput)
      .then(() => {
        if(mounted.current){
          setItemInput('')
          setAlert(true)
          setError(false)
        }
      })
      .catch(() => {
        setError(true)
      })
  }

  useEffect(() => {
    if(alert) {
      setTimeout(() => {
        if(mounted.current) {
          setAlert(false);
        }
      }, 1000)
    }
  }, [alert]);

  return (
    <div className="wrapper">
      <h1>My Grocery List</h1>
      <ul>
        {list.map((item, index) => <li key={index}>{item.product}</li>)}
      </ul>
      {alert && <h2>Submit successful</h2>}
      {error && <h2>Submit error</h2>}

      <form onSubmit={handleSubmit}>
        <label>
          <p>New Item</p>
          <input
            type="text"
            onChange={event => setItemInput(event.target.value)}
            value={itemInput}
            />
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
