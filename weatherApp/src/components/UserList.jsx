import React, { useEffect, useState } from "react";
import axios from "axios";

function UserList() {
  const [users, setUsers] = useState([]);      
  const [search, setSearch] = useState("");     
  const [filteredUsers, setFilteredUsers] = useState([]); 

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        setUsers(res.data);
        setFilteredUsers(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    const result = users.filter((user) =>
      user.name.includes(search)
    );
    setFilteredUsers(result);
  }, [search, users]);

  return (
    <div style={{ padding: "20px" }}>
      <h2>User List</h2>

      <input
        type="text"
        placeholder="Search by name..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{ padding: "8px", marginBottom: "10px" }}
      />

      <ul>
        {filteredUsers.map((user) => (
          <li key={user.id}>
            {user.name} - {user.email}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UserList;