import React from "react";

interface user {
  id: number;
  name: string;
}

const UserPage = async () => {
  const res = await fetch(
    "https://jsonplaceholder.typicode.com/users",
    { cache:'no-store'}
    //or
    //{ next: { revalidate: 10 } }
    // will fwtch new every10 secs 
  ); 

  const users: user[] = await res.json();

  return (
    <>
      <h1>Users</h1>
      <p>{new Date().toLocaleTimeString()}</p>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </>
  );
};

export default UserPage;
