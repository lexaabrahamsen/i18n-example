import React from 'react';
import logo from './logo.svg';
import './App.css';
import { FormattedMessage } from 'react-intl';

function App() {
  return (
    <div className="App">
      <p>
        <FormattedMessage
          id="Home.dayMessage"
          defaultMessage = "It's a beautiful day outside."
        />
      </p>
    </div>
  );
}

export default App;
