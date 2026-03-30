import React, { useEffect, useState } from "react";

export default function Users() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await fetch("https://api.example.com/users");

        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }

        const result = await response.json();
        setData(result);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []); // runs once on mount

  return (
    <>
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {data.map((item) => (
        <p key={item.id}>{item.name}</p>
      ))}
    </>
  );
}