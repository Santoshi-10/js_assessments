import React, { useState } from 'react';

function FilterSortList() {
  const [items, setItems] = useState(['Banana', 'Apple', 'Orange', 'Mango']);
  const [filter, setFilter] = useState('');
  const [sort, setSort] = useState('asc');

  const filteredItems = items
    .filter(item => item.toLowerCase().includes(filter.toLowerCase()))
    .sort((a, b) => (sort === 'asc' ? a.localeCompare(b) : b.localeCompare(a)));

  return (
    <div>
      <input
        type="text"
        placeholder="Filter"
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
      />
      <button onClick={() => setSort(sort === 'asc' ? 'desc' : 'asc')}>
        Sort {sort === 'asc' ? 'Descending' : 'Ascending'}
      </button>
      <ul>
        {filteredItems.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default FilterSortList;
