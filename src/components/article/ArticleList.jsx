import { useEffect, useState } from 'react';
import * as api from '../../utils/api';
import ArticleCard from './ArticleCard.jsx';

export default function ArticleList() {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    api
      .getArticles()
      .then((articles) => {
        setArticles(articles);
        setIsLoading(false);
      })
      .catch((err) => {
        setError(err.message);
      });
  }, []);

  if (error) {
    return <p>{error}</p>;
  }
  if (isLoading) return <p> Loading....</p>;
  return (
    <section>
      {articles.map(({ article_id, title, topic, author, body, votes }) => {
        return (
          <ArticleCard
            key={article_id}
            article_id={article_id}
            title={title}
            topic={topic}
            author={author}
            body={body}
            votes={votes}
          />
        );
      })}
    </section>
  );
}
