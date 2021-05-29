import React from 'react';
import logo from './logo.svg';
import './App.css';
import Article from './Components/Article';
import ArticleProvider from './Context/ArticleContext';

function App() {
  return (
    <div className="App">
      <header className="App-header">
          <ArticleProvider>
            <Article></Article>
          </ArticleProvider>
      </header>
    </div>
  );
}

export default App;
