import React from 'react';
import Editor from './Editor.jsx';
import List from './List.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="container">
        <Editor />
        <List />
      </div>
    );
  }
}

export default App;
