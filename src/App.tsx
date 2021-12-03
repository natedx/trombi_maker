import React from 'react';
import logo from './logo.svg';
import './App.css';

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
                    <div>
                        <img src={process.env.PUBLIC_URL + '/images/'+ item.imageFile +'.png'} className="App-logo" alt="logo" />
                        <p>{item.firstName}, {item.lastName}</p>
                    </div>
                )
            })
        }
        </div>
    </div>
  );
}

export default App;
