import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { React, useState, useEffect } from 'react';
import ArticleCard from './components/article/ArticleCard';
import Header from './components/header/Header';
import ArticleList from './components/article/ArticleList';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<ArticleList />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
