// src/App.js
import React from 'react';
import ItemList from './components/coding_q1';
import Counter from './components/coding_q2';
import DataFetcher from './components/coding_q3';
import FormHandler from './components/coding_q4';
import Pagination from './components/coding_q5';

const items = ['Item 1', 'Item 2', 'Item 3', 'Item 4'];
const longItems = Array.from({ length: 100 }, (_, i) => `Item ${i + 1}`);

const App = () => (
  <div>
    <h1>React Task Components</h1>
    <ItemList items={items} />
    <Counter />
    <DataFetcher />
    <FormHandler />
    <Pagination itemsPerPage={10} items={longItems} />
  </div>
);

export default App;
