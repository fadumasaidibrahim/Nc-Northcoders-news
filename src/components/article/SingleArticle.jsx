import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import * as api from '../../utils/api';
import ArticleCard from '../article/ArticleCard.jsx';
export default function SingleArticle() {
  const [article, setArticle] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const { article_id } = useParams();

  useEffect(() => {
    setIsLoading(true);
    api
      .getSingleArticle(article_id)
      .then((articles) => {
        setArticle(articles);
        setIsLoading(false);
        setError(null);
      })
      .catch((err) => {
        setError(err.message);
      });
  }, [article_id]);

  if (error) {
    return <p>{error}</p>;
  }
  if (isLoading) return <p> Loading....</p>;
  return (
    <ArticleCard
      key={article_id}
      article_id={article_id}
      title={article.title}
      topic={article.topic}
      author={article.author}
      body={article.body}
      votes={article.votes}
    />
  );
}
