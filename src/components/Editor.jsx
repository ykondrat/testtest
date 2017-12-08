import React from 'react';
import './style/Editor.less';

class Editor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      text: ''
    };
  }
  handleTitle(event) {
    this.setState({ title: event.target.value });
  }
  handleText(event) {
    this.setState({ text: event.target.value });
  }
  handleSubmit(event) {
    alert('An essay was submitted: ' + this.state.title);
    event.preventDefault();
  }
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="editor">
              <div className="editor-header">
                <h3>Add your own tasks</h3>
              </div>
              <div className="editor-body">
                <form className="editor-form" onSubmit={this.handleSubmit.bind(this)}>
                  <div className="form-group">
                    <label htmlFor="todo-title">Title:</label>
                    <i className="fa fa-pencil" aria-hidden="true"></i>
                    <input value={this.state.title} onChange={this.handleTitle.bind(this)} type="text" className="form-control" id="todo-title" placeholder="Enter title"/>
                  </div>
                  <div className="form-group">
                    <label htmlFor="todo-text">Todo:</label>
                    <i className="fa fa-list" aria-hidden="true"></i>
                    <textarea value={this.state.text} onChange={this.handleText.bind(this)} rows="4" className="form-control" id="todo-text" placeholder="Enter todo"/>
                  </div>
                  <div className="form-group">
                    <button type="button" className="btn">Add</button>
                  </div>
                </form>
              </div>
              <div className="editor-footer">

              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Editor;
