import { Link } from 'react-router-dom';

export default function ArticleCard({
  article_id,
  title,
  topic,
  author,
  body,
}) {
  return (
    <article>
      <h3>{title}</h3>
      <h4>Article author - {author}</h4>
      <h5>Topic - {topic}</h5>
    </article>
  );
}
