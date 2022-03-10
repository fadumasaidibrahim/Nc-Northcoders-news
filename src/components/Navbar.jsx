import * as api from '../utils/api';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
export default function Navbar() {
  const [topic, setTopic] = useState([]);
  useEffect(() => {
    api.getTopics().then((data) => {
      setTopic(data);
    });
  }, []);
  return (
    <div>
      <h1>NC News</h1>
      {topic.map(({ slug }) => {
        return (
          <ul>
            <li>
              <Link to={`/articles/${slug}`}>{slug}</Link>
            </li>
          </ul>
        );
      })}
    </div>
  );
}
