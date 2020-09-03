import React from 'react';
import Mui from './plugins/material-ui';
import Header from './layouts/Header/Header';
import Home from './views/Home/Home';
function App() {
  return (
    <>
      <Header />
      <main>
        <Home />
      </main>
    </>
  );
}

export default App;
