import React, { useState } from 'react';

function PaginatedList() {
  const items = Array.from({ length: 50 }, (_, i) => `Item ${i + 1}`);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const paginatedItems = items.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  return (
    <div>
      <ul>
        {paginatedItems.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <button onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}>Previous</button>
      <button onClick={() => setCurrentPage(Math.min(Math.ceil(items.length / itemsPerPage), currentPage + 1))}>Next</button>
    </div>
  );
}

export default PaginatedList;
