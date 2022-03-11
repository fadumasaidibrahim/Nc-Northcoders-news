import axios from 'axios';

const newsApi = axios.create({
  baseURL: 'https://nc-news-example-seminar-2-2.herokuapp.com/api',
});

export const getArticles = () => {
  return newsApi.get('/articles?limit=50').then((res) => {
    return res.data.articles;
  });
};

export const getTopics = () => {
  return newsApi.get('/topics').then((res) => {
    return res.data.topics;
  });
};

export const getSingleArticle = (article_id) => {
  return newsApi.get(`articles/${article_id}`).then((res) => {
    return res.data.article;
  });
};
