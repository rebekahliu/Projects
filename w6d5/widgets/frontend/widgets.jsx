import React from 'react';
import ReactDOM from 'react-dom';

import Clock from './clock';
import Weather from './weather';
import AutoComplete from './autocomplete';
import Tabs from './tabs';

const Root = () => (
  <div className="root">
    <Clock />
    <Weather />
    <AutoComplete names= {NAMES}/>
    <Tabs tabs= {TABS}/>
  </div>
);

const NAMES = [
  'Tommy',
  'Jerry',
  'Brian',
  'Nixon',
  'Betty',
  'David',
  'Rebekah',
  'Adrian'];

const TABS = [
  { title: "tab1",
    content: "this is tab1"},
  { title: "tab2",
    content: "this is tab2"},
  { title: "tab3",
    content: "this is tab3"}
];

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(<Root/>, document.getElementById('main'));
});
