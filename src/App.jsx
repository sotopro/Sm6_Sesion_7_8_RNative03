import React, { useState, useEffect } from 'react';
import './App.css';
import './shared/styles/tailwind.output.css';
import { EmployeeList } from './shared/components/employee-list';
import { GlobalProvider } from './shared/context/globalState';


const  App = () => {

  return (
    <GlobalProvider>
      <div className="App">
        <EmployeeList />
      </div>
    </GlobalProvider>
  );
}

export default App;
