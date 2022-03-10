import { useEffect, useState } from 'react';
import ArticleCard from '../article/ArticleCard.jsx';
import { useParams } from 'react-router-dom';
import Error from '../error/Error.jsx';
import * as api from '../../utils/api.js';
import { Link } from 'react-router-dom';

export default function TopicList() {
  const [error, setError] = useState(null);
  const [article, setArticle] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { topic } = useParams();
  useEffect(() => {
    setIsLoading(true);
    api
      .getArticles(topic)

      .then((articles) => {
        const topicArticles = [];
        articles.filter((item) => {
          if (item.topic === topic) {
            topicArticles.push(item);
          }
        });
        setArticle(topicArticles);
        console.log(article);

        setIsLoading(false);
      })
      .catch((err) => {
        setError(err.message);
      });
  }, [topic]);

  if (error) {
    return <Error error={error} />;
  }
  if (isLoading) return <p> Loading....</p>;

  return (
    <section>
      {article.map(({ article_id, title, topic, author, body, votes }) => {
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
