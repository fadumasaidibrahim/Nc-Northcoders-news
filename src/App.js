import './App.css';
import { React } from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import ArticleList from './components/article/ArticleList';
import TopicList from './components/topic/TopicList';
import Navbar from './components/Navbar';
import SingleArticle from './components/article/SingleArticle';
import UserLogin from './components/users/UserLogin';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<ArticleList />} />
          <Route path="/articles/:topic" element={<TopicList />} />
          <Route path="/article/:article_id" element={<SingleArticle />} />
          <Route path="/login" element={<UserLogin />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
