import React from "react";

interface user {
  id: number;
  name: string;
  email: string;
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
      <table className='table table-bordered'>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
          </tr>
        </thead>
          <tbody>
            {users.map((user) => (<tr key={user.id}> 
            <td>{user.name}</td>
            <td>{user.email}</td>
            </tr>))}
          </tbody>
      </table>
    </>
  );
};

export default UserPage;
