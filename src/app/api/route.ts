import { NextResponse } from 'next/server';

const url = "https://jsonplaceholder.typicode.com/todos";

export const GET = async () => {
  const response = await fetch(url);
  const data = await response.json();
  return NextResponse.json(data);
}
