import './App.css';
import { React, useState, useEffect } from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Header from './components/header/Header';
import ArticleList from './components/article/ArticleList';
import TopicList from './components/topic/TopicList';

function App() {
  const [articles, setArticles] = useState([]);
  const [topics, setTopics] = useState([]);

  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route
            path="/"
            element={
              <ArticleList articles={articles} setArticles={setArticles} />
            }
          />
          <Route
            path="/topics/:topic/articles"
            element={
              <TopicList
                articles={articles}
                setArticles={setArticles}
                topics={topics}
              />
            }
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
