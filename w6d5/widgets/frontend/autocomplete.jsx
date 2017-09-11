import React from 'react';

export default class AutoComplete extends React.Component{
  constructor(props){
    super(props);
    this.state = {inputVal: "", names: this.props.names};

    this.handleInput = this.handleInput.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleInput(event){
    event.preventDefault();
    let filteredNames = [];
    this.props.names.forEach ((name) => {
      if (name.toLowerCase().startsWith(event.currentTarget.value.toLowerCase())){
        filteredNames.push(name);
      }
    });
    this.setState( {inputVal: event.currentTarget.value, names:filteredNames} );
  }

  handleClick(event){
    event.preventDefault();
    this.setState( {inputVal: event.currentTarget.innerHTML, names: [event.currentTarget.innerHTML]} );
  }

  render(){
    let { a: inputVal, b:names } = { a: this.state.inputVal, b: this.state.names };
    return (
      <div className="outer">
        <h1>Auto Complete</h1>
        <input type="text" onChange={this.handleInput} value={inputVal}></input>
        <ul>
          {names.map((name, idx) => <li onClick={this.handleClick} key={idx+name}>{name}</li>)}
        </ul>
      </div>
    );
  }
}
