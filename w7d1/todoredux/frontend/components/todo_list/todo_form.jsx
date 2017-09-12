import React from 'react';
import uniqueId from '../../util/util';

export default class TodoForm extends React.Component{
  constructor(props){
    super();
    this.state = {id:"", title:"", body:"", done:"false"};
    this.handleClick = this.handleClick.bind(this);
    this.changeTitle = this.changeTitle.bind(this);
    this.changeBody = this.changeBody.bind(this);
  }

  handleClick(event){
    event.preventDefault();
    this.setState({id: uniqueId()}, () => {this.props.receiveTodo(this.state);});
  }

  changeTitle(event){
    event.preventDefault();
    this.setState({title: event.target.value});
  }

  changeBody(event){
    event.preventDefault();
    this.setState({body: event.target.value});
  }

  render(){
    return (
      <form>
        <label>Title:</label>
        <input type="text" onChange={this.changeTitle}></input>
        <br></br>
        <label>Body:</label>
        <textarea onChange={this.changeBody}></textarea>
        <br></br>
        <input type="submit" onClick={this.handleClick} value="Create Todo!"></input>
      </form>
    );
  }
}
