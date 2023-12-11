import { useState, useEffect } from 'react';
import Card from '../shared/Card/Card.jsx';
import Loading from '../shared/Loading/Loading.jsx';
import { requestArticles } from '../../reducers/redditReducer.js';
import { useSelector, useDispatch } from 'react-redux';

export default function Reddit() {
  const articles = useSelector((store) => store.reddit.articles)
  const loading = useSelector((store) => store.reddit.loading)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(requestArticles)
  }, [])

  const articleCards = articles.map((article) => <Card key={article.id} article={article} />);

  return (
    <div className="news-container">
      <img src="../../assets/redditLogo.png" alt="" className='logo' />
      {loading ? <Loading /> : <div>{articleCards}</div>}
    </div>
  );
}
