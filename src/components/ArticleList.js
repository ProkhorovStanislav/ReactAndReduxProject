import React, {Component} from 'react';
import Article from './Article';
import PropTypes from 'prop-types';

export default class ArticleList extends Component {
  render() {
    const {articles} = this.props;
    const elements = articles.map(article => <li key={article.id}><Article article={article} /></li>);

    return (
      <ul>
        {elements}
      </ul>
    )
  }
}

ArticleList.propTypes = {
  articles: PropTypes.array.isRequired
}