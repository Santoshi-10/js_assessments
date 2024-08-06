import React, { useState, useEffect, useRef } from 'react';

function InfiniteScrollList() {
  const [items, setItems] = useState(Array.from({ length: 20 }, (_, i) => `Item ${i + 1}`));
  const loader = useRef(null);

  useEffect(() => {
    const handleLoadMore = () => {
      setItems(prevItems => [
        ...prevItems,
        ...Array.from({ length: 20 }, (_, i) => `Item ${prevItems.length + i + 1}`)
      ]);
    };

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        handleLoadMore();
      }
    });

    if (loader.current) {
      observer.observe(loader.current);
    }

    return () => {
      if (loader.current) {
        observer.unobserve(loader.current);
      }
    };
  }, []);

  return (
    <div>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <div ref={loader} style={{ height: '20px', backgroundColor: 'lightgray' }}>Loading...</div>
    </div>
  );
}

export default InfiniteScrollList;
