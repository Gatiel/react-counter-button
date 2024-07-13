'use client';
import { useState } from "react";


export default function MyButton() {
  const [count, setCount] = useState(0);

  function handleClick(){
    setCount(count + 1);
  }
  return (
    <main className="flex min-h-screen flex-col items-center p-24 gap-4">
      <Button />
      <h1>React Counter Button</h1>
    </main>
  );
  function Button(){
    return <button onClick={handleClick} className="bg-blue-500 hover:bg-blue-700 rounded text-white font-bold px-4 py-2">I have been clicked {count} times</button>;
  }
}

