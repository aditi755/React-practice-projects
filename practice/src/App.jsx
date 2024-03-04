
//FILTERING METHOD USING .INCLUDES IN ARRAY OR STRING
// import React, { useState, useEffect } from 'react';
// import './App.css';

// function App() {
//   const url = 'https://jsonplaceholder.typicode.com/users';
//   const [users, setUsers] = useState([]); // State to store all users
//   const [filteredUsers, setFilteredUsers] = useState([]); // State to store filtered users
//   const [name, setName] = useState('');

//   const handleChange = (e) => {
//     setName(e.target.value);
//   };

//   const fetchUsers = async () => {
//     try {
//       const response = await fetch(url);
//       if (!response.ok) {
//         throw new Error('Failed to fetch');
//       }
//       const result = await response.json();
//       setUsers(result); // Set all users
//     } catch (error) {
//       console.error('Error fetching users:', error.message);
//     }
//   };

//   useEffect(() => {
//     fetchUsers();
//   }, []);

//   useEffect(() => {
//     // Filter users based on the search query and update filteredUsers state
//     const filtered = users.filter((user) =>
//       user.name.toLowerCase().includes(name.toLowerCase())
//     );
//     setFilteredUsers(filtered);
//   }, [name, users]); // Update filteredUsers whenever name or users state changes

//   return (
//     <>
//       <h2>Searching, filtering, sorting and listing</h2>

//       <label htmlFor="searchUser">Search User</label>
//       <input
//         id="searchUser"
//         type="text"
//         value={name}
//         placeholder="Search user"
//         onChange={handleChange}
//       />

//       <div className="grid-container">
//         {/* Render filtered users */}
//         {filteredUsers.map((user, i) => (
//           <div key={i} className="grid-item">
//             <p>ID: {user.id}</p>
//             <p>Name: {user.name}</p>
//             <p>Username: {user.username}</p>
//             <p>Email: {user.email}</p>
//           </div>
//         ))}
//       </div>
//     </>
//   );
// }

// export default App;

//QUERY PARAMETER METHOD USING ?q={name} TO FILTER

import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const baseUrl = 'https://jsonplaceholder.typicode.com/users';
  const options = ['ID', 'NAME', 'EMAIL']
  const [users, setUsers] = useState([]);
  const [name, setName] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
const itemPerPage = 2;

  const indexofLast = currentPage * itemPerPage
  const indexofFirst = indexofLast - itemPerPage

  const currentItems = users.slice(indexofFirst, indexofLast)
  const nPages = Math.ceil(users.length / currentItems)
  const pageNumbers = [...Array.from(nPages + 1).keys()].slice(1);

  const handleChange = (e) => {
    setName(e.target.value);
  };

  const handleSort = (e) => {
    const value = e.target.value;
  
    if (users && users.length > 0) {
      let sortedUsers;
  
      if (value === 'ID') {
        // Sort by ID
        console.log(users)
        sortedUsers = [...users].sort((a, b) => a.id - b.id);
        console.log(sortedUsers)
      } else if (value === 'NAME') {
        // Sort alphabetically by name
        try {
          sortedUsers = [...users].sort((a, b) => a.name.localeCompare(b.name));
          console.log(sortedUsers)
        } catch (error) {
          console.error('Error sorting users by name:', error);
          return;
        }
      }
  
      if (sortedUsers !== undefined) {
        // Update the state with the sorted array
        setUsers(sortedUsers);
        console.log(users)
      } else {
        console.error('Error sorting users: Sorted users array is undefined');
      }
    } else {
      console.error('Error sorting users: Users array is empty or undefined');
    }
  };
  
  
  const fetchUsers = async () => {
    try {
      const url = name ? `${baseUrl}?q=${encodeURIComponent(name)}` : baseUrl;
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error('Failed to fetch');
      }
      const result = await response.json();
      setUsers(result);
    } catch (error) {
      console.error('Error fetching users:', error.message);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, [name]);

  return (
    <>
      <h2>Searching, filtering, sorting and listing</h2>

      <label htmlFor="searchUser">Search User</label>
      <input
        id="searchUser"
        type="text"
        value={name}
        placeholder="Search user"
        onChange={handleChange}
      />

      <div className="grid-container">
      {  users && users.length > 0 ? (users.map((user, i) => (
          <div key={i} className="grid-item">
            <p>ID: {user?.id}</p>
            <p>Name: {user?.name}</p>
            <p>Username: {user?.username}</p>
            <p>Email: {user?.email}</p>
          </div>
        )) ) : (<div style={{marginTop: "60px", fontSize: "40px", display: "block"}}>No element found</div>) }
      </div>

      <select onChange={handleSort}>
       {options.map((ele, i) => {
        return <option key={i}>{ele}</option>
       })} 
      </select>
      <h3>Filter BY </h3>

      <h3>Pagination</h3>
      <div>
    nPages={nPages}
    currentPage={currentPage}
    setCurrentPage={setCurrentPage}
</div>

    </>
  );
}

export default App;


