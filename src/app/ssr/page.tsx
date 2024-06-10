// src/app/ssr/page.tsx
import React from 'react';

async function fetchData() {
  const res = await fetch('https://jsonplaceholder.typicode.com/todos');
  const data = await res.json();
  return data;
}

const SSRPage = async () => {
  const data = await fetchData();

  return (
    <div>
      <h1>Server-Side Rendered Page</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
};

export default SSRPage;
