import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import * as api from '../../utils/api.js';
import Error from '../error/Error.jsx';
import CommentCard from '../comment/CommentCard.jsx';

export default function CommentsList() {
  const [comments, setComments] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const { article_id } = useParams();

  useEffect(() => {
    setIsLoading(true);
    api
      .getComments(article_id)

      .then((comments) => {
        setComments(comments);
        setIsLoading(false);
      })
      .catch((err) => {
        setError(err.message);
      });
  }, [article_id]);

  if (error) {
    return <Error error={error} />;
  }
  if (isLoading) return <p> Loading....</p>;

  return (
    <section>
      {comments.map(({ comment_id, votes, created_at, author, body }) => {
        return (
          <CommentCard
            key={comment_id}
            comment_id={comment_id}
            votes={votes}
            created_at={created_at}
            author={author}
            body={body}
          />
        );
      })}
    </section>
  );
}
