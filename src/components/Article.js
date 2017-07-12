import React, {Component} from 'react';
import CommentList from './CommentList';
import PropTypes from 'prop-types';
import toggleOpen from '../decorators/toggleOpen';

class Article extends Component {

  static propTypes = {
    article: PropTypes.shape({
      title: PropTypes.string.isRequired,
      text: PropTypes.string,
      comments: PropTypes.array
    }).isRequired
  };

  render() {
    const {article, toggleOpen} = this.props;
    return (
      <section>
        <h2 onClick={toggleOpen}>{article.title}</h2>
        {this.getBody()}
      </section>
    )
  }

  getBody() {
    return this.props.isOpen && (
        <div>
          {this.props.article.text}
          <CommentList comments={this.props.article.comments} />
        </div>
      );
  }
}

export default Article;