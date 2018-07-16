import React from 'react';
import './articles.css';

const getFeed = async () => {
  const url = 'https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@leocardoso';

  const response = await fetch(url, {});
  const json = await response.json();
  return json;
};

const ArtigosList = ({ articles }) =>
  articles.map(({ title, thumbnail, link }) => (
    <li key={link} className="articles__list__item">
      <a href={link} target="_blank">
        <img src={thumbnail} alt={title} />
        <h3 className="articles__list__item--title">{title}</h3>
      </a>
    </li>
  ));

export default class extends React.Component {
  state = {
    articles: []
  };
  componentDidMount = async () => {
    const feed = await getFeed();
    this.setState({ articles: feed.items.filter(item => item.categories.length > 0) });
  };
  render() {
    return (
      <div id="Artigos">
        <div className="container">
          <h1 className="text-center cursive">Artigos</h1>
          <h4 className="text-center">Alguns artigos já publicados:</h4>
          <br />
          <ul className="articles__list">
            <ArtigosList articles={this.state.articles} />
          </ul>
        </div>
      </div>
    );
  }
}
