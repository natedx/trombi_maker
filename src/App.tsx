import React from 'react';
import logo from './logo.svg';
import './App.css';
import Person from "./Person";

import names from './names.json'


function App() {

  return (
    <div className="App">
      <header
          className="App-header"
      >
          <p>Trombi</p>
      </header>

        <div className={"container"}>
        {
            names.names.map((item) => {
                return(
                    <Person item={item}></Person>
                )
            })
        }
        </div>
    </div>
  );
}

export default App;
