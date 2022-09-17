import React from 'react';
import './App.css';
import Footer from 'components/Footer';
import Header from 'components/Header';
import Body from 'components/Body';
import { Link } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
      <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />

      <header className="App-header">
        <Header color="green">
          <Link to="/test">Go to test page !</Link>
        </Header>
        <Body/>
        <Footer/>
        <div className='direitos'> Ricardo Campos - Trabalho de conclusao de curso</div>
      </header>
    </div>
  );
}

export default App;
