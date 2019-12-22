import React, { Component } from 'react';
import Nav from "./components/Nav.js";
import Subject from "./components/Subject";
import Article from "./components/Article";




class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Subject:{title:"WEB", content:"Hello"}
    }
  }

  render() {
    return (
      <div className="App">
        <Subject 
          title={this.state.Subject.title} 
          content={this.state.Subject.content}>
        </Subject>
        <Nav></Nav>
        <Article content="hello world"></Article>
      </div>
    );
  }
}

export default App;
