import React, {Component} from 'react';
import CommentList from './CommentList';

export default class Article extends Component {
  constructor() {
    super();
    this.state = {
      isOpen: false
    };
  }

  render() {
    const {article} = this.props;
    return (
      <section>
        <h2 onClick={this.toggleOpen}>{article.title}</h2>
        {this.getBody()}
      </section>
    )
  }

  getBody() {
    return this.state.isOpen && (
        <div>
          {this.props.article.text}
          <CommentList comments={this.props.article.comments} />
        </div>
      );
  }

  toggleOpen = () => {
    this.setState((state) =>({
      isOpen: !state.isOpen
    }))
  }
}