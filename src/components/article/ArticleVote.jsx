import { useState } from 'react';
import { useParams } from 'react-router-dom';
import * as api from '../../utils/api';

export default function ArticleVote({ article }) {
  const [votes, setVotes] = useState(0);
  const [error, setError] = useState(null);
  const { article_id } = useParams();

  const handleVoteClick = (num) => {
    setVotes((currVotes) => currVotes + num);
    setError(null);
    api.amendVoteCount(article_id, num).catch(() => {
      setVotes((currVotes) => currVotes - num);
      setError('error');
    });
  };

  return (
    <div className="voteButton">
      Votes {article.votes + votes} <br></br>
      <button
        disabled={votes === 1}
        onClick={() => {
          handleVoteClick(1);
        }}
      >
        +
      </button>
      <button
        disabled={votes <= 0}
        onClick={() => {
          handleVoteClick(-1);
        }}
      >
        -
      </button>
      {error ? <p>{error}</p> : null}
    </div>
  );
}
