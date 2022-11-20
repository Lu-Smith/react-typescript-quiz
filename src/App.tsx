import React from 'react';
import Footer from './components/Footer';
import Header from './components/Header';
import Main from './components/Main';
import { GlobalStyle } from './App.styles';

const App = () => {

  return (
    <>
      <GlobalStyle />
      <div className="App">
         <Header />
         <Main />
         <Footer />
      </div>
    </>
  );
}

export default App;
