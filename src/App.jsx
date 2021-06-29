import React from 'react';
import { Route, Switch } from 'react-router-dom'
import './App.css';
import './shared/styles/tailwind.output.css';
import { GlobalProvider } from './shared/context/globalState';
import Home from './shared/components/home';
import { AddEmployee } from './shared/components/add-employee';
import { EditEmployee } from './shared/components/edit-employee';


const  App = () => {

  return (
    <GlobalProvider>
        <div className="App">
          <Switch>
            <Route path="/" component={Home} exact/>
            <Route path="/add" component={AddEmployee} exact/>
            <Route path="/edit/:id" component={EditEmployee} exact/>
          </Switch>
        </div>
    </GlobalProvider>
  );
}

export default App;
