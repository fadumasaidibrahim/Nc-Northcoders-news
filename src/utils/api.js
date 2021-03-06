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

export const amendVoteCount = (article_id, inc_votes) => {
  return newsApi.patch(`articles/${article_id}`, { inc_votes }).then((res) => {
    console.log(res.data.article);
    return res.data.article;
  });
};

export const getComments = (article_id) => {
  return newsApi.get(`/articles/${article_id}/comments`).then((res) => {
    return res.data.comments;
  });
};

export const getUsers = () => {
  return newsApi.get('/users').then((res) => {
    return res.data.users;
  });
};
