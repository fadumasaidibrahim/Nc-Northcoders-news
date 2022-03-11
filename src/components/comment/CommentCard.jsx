import getHumanTime from '../../utils/getHumanTime';

export default function CommentCard({
  comment_id,
  votes,
  created_at,
  author,
  body,
}) {
  return (
    <article>
      <h4>#{comment_id}</h4>
      <h5>Created {getHumanTime(created_at)}</h5>
      <h3>{author}</h3>
      <p>{body}</p>
      <div>{votes} votes for this comment</div>
      <br />
    </article>
  );
}
