import React, { Component } from 'react';

class Article extends Component {
    render() {
      return (
        <article>
          {this.props.content}
        </article>
      );
    }
  }

  export default Article;