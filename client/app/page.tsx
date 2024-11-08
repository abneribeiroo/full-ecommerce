"use client"
import { useState, useEffect } from 'react'

export default function Home() {
  const [data, setData] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:3001');
        const result = await response.json();
        setData(result.message);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
  
    fetchData();
  }, []);

  return (
    <div>
      <h1>Home</h1>
      <p>{data ? data : 'Loading...'}</p>
    </div>
  );
}