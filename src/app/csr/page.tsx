// src/app/csr/page.tsx
'use client';

import React, { useEffect, useState } from 'react';

interface Data {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

const CSRPage = () => {
  const [data, setData] = useState<Data[] | null>(null);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  return (
    <div>
      <h1>Client-Side Rendered Page</h1>
      <ul>
        {data ? (
          data.map((item) => (
            <li key={item.id}>
              <h2>{item.title}</h2>
              <p>User ID: {item.userId}</p>
              <p>Completed: {item.completed.toString()}</p>
            </li>
          ))
        ) : (
          <p>Loading...</p>
        )}
      </ul>
    </div>
  );
};

export default CSRPage;
