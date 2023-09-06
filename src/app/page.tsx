"use client";

import { useEffect, useState } from "react";

export default function Home() {
  const [count, setCount] = useState(0);

  useEffect(() => console.log("page load"), [count]);

  return <button onClick={() => setCount(count + 1)}>Click me! {count}</button>;
}
