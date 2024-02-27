import { useEffect, useState, useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import  Pill from './components/Pill'

function App() {
 const [searchTerm, setSearchTerm] = useState("")
 const [suggestions, setSuggestions] = useState([])
const [selectedUsers, setSelectedUsers] = useState([])
const [selectedUserSet, setSelectedUserSet] = useState(new Set())

const inputRef = useRef(null)
 const fetchUsers = () => {
  if(searchTerm.trim() === ""){   //if searchterm is empty
    setSuggestions([])
    return ;
  }

  fetch(`https://dummyjson.com/users/search?q=${searchTerm}`)
  .then((res) => res.json())
  .then((data) => setSuggestions(data))

  .catch((err) => {
    console.error(err)
  })
};

const handleSelectUser = (user) => {
  setSelectedUsers([...selectedUsers, user])  //not susing push here
  console.log(selectedUsers)
  setSelectedUserSet(new Set([...selectedUserSet, user.email]))
  console.log(selectedUserSet)
  setSearchTerm("");
  setSuggestions([]);
  inputRef.current.focus();
}

const handleRemoveUser = (user) => {
  const updatedUsers = selectedUsers.filter((selectedUser) => selectedUser.id !== user.id);
  setSelectedUsers(updatedUsers);
  const updatedEmails =  new Set(selectedUserSet);
  updatedEmails.delete(user.email);
  setSelectedUserSet(updatedEmails)

}

const handleKeyDown = (e) => {
  if(e.key === 'Backspace' && e.target.value === '' && selectedUsers.length> 0){
    const lastUser = selectedUsers[selectedUsers.length - 1];
    handleRemoveUser(lastUser)
    setSuggestions([])
  }
}

  useEffect(() => {

    fetchUsers()
  }, [searchTerm])


  return (
      <div className="user-serach-container">
      <div className="user-search-input">
  {/* Pills
      Search suggestion */}
      {selectedUsers.map((user) => {
        return (
          <Pill 
          key={user.email}
          image={user.image}
          text={`${user.firstName} ${user.lastName}`}
          onClick={() => handleRemoveUser(user)}
          />
        )
      })}

          <input type="search"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          ref= {inputRef}  //when wanted to access
          placeholder="Search for a User"
          onKeyDown={handleKeyDown}
          />

          <ul className="suggestions-list">
            {suggestions?.users?.map((user, index) => {
              return !selectedUserSet.has(user.email) ? (
              <li key={user.email} onClick={() => handleSelectUser(user)}>
                <img src={user.image} alt={`${user.firstName} ${user.lastName}`}/>
                <span>
                  {user.firstName} {user.lastName}
                </span>
              </li>
              ) : (<></>)

            }  
            )}
          </ul>
          {/* Search */}
          </div>
      </div>
  )
}

export default App
