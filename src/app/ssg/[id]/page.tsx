// src/app/ssg/[id]/page.tsx
import React from 'react';

async function fetchData(id: string) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`);
  const data = await res.json();
  return data;
}

const SSGPage = async ({ params }: { params: { id: string } }) => {
  const data = await fetchData(params.id);

  return (
    <div>
      <h1>Static Site Generated Page</h1>
      <h2>{data.title}</h2>
      <p>User ID: {data.userId}</p>
      <p>Completed: {data.completed.toString()}</p>
    </div>
  );
};

export const generateStaticParams = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/todos');
  const todos = await res.json();

  return todos.map((todo: { id: number }) => ({
    id: todo.id.toString(),
  }));
};

export default SSGPage;
