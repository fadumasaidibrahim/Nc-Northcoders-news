import { useEffect, useState } from 'react';
import ArticleCard from '../article/ArticleCard.jsx';
import { useParams } from 'react-router-dom';
import Error from '../error/Error.jsx';
import * as api from '../../utils/api.js';
import { Link } from 'react-router-dom';

export default function TopicList({ articles, setArticles }) {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const { topic } = useParams();
  useEffect(() => {
    setIsLoading(true);
    api
      .getArticles(topic)
      .then((articles) => {
        setArticles(articles);
        setIsLoading(false);
      })
      .catch((err) => {
        setError(err.message);
      });
  }, []);

  if (error) {
    return <Error error={error} />;
  }
  if (isLoading) return <p> Loading....</p>;

  return (
    <section className="topic_article_list">
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
