import React from 'react';

export default class Tabs extends React.Component{
  constructor(props){
    super(props);
    this.state = { index:0, content:"this is tab1" };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event){
    event.preventDefault();
    for(let i = 0; i < this.props.tabs.length; i++){
      if (this.props.tabs[i].title === event.currentTarget.innerHTML){
        this.setState({ content:this.props.tabs[i].content});
      }
    }
  }


  render(){
    let { a:tabs } = { a:this.props.tabs};
    return(
      <div className="outer">
        <h1 className="tabs-header">Tabs</h1>
        <ul>
          {tabs.map((tab, idx) => <h1 onClick={this.handleClick} key={idx}>{tabs[idx].title}</h1>)}
        </ul>
        <article>
          {this.state.content}
        </article>
      </div>
    );
  }

}
