// import { useState, useEffect } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
// const [list, setList] = useState([])
// const [inputValue, setInputValue] = useState('')
// const [isList, setIsList] = useState(false)
// const [editId, setEditId] = useState(null)

// const handleChange = (event) => {
//  const value = event.target.value
//  console.log(value)
//  setInputValue(value)
// }

// const handleSubmit = () => {
//  setIsList(true)
//  const newList = {
//   title: inputValue,
//   id: Math.floor(Math.random() * 100)
//  }
//   setList([...list, newList])
//   console.log(list)
//   setInputValue('') 
// }


// const handleDelete = (id) => {
//   console.log("Deleting i-tem with id:", id);
//   setList(list.filter((task) => task.id !== id))
//   console.log(list)
// };

// // const handleUpdate = (id) => {
// //   console.log(id)
// //  setEditId(id, () => {
// //   console.log(editId)
// //   const select = list.find((item) => item.id === id)
// //   setInputValue(select.title)
// //   console.log(editId)
// //   handleSaveEdit(editId)
// //  })
// // }

// const handleUpdate = (id) => {
//   console.log("Id",id); // Log the id passed to handleUpdate
//   setEditId(id);
//   console.log('editid', editId)
// };

// useEffect(() => {
//   console.log("editId", editId); // Log the updated value of editId
//   const select = list.find((item) => item.id === editId);
//   if (select) {
//     console.log(select.title);
//     setInputValue(select.title);
//   }
//   handleSaveEdit(editId)
// }, [editId]);


  // const handleSaveEdit = (editId) => {
  // if(editId !== null){
  //   const updatedList = list.map((item) =>
  //     item.id === editId ? { ...item, title: inputValue } : item
  //   );
  // }
  //   setList(updatedList);
  //   console.log(updatedList)
  //   setEditId(null);
  //   setInputValue("");
  // };

//   return (
//     <>
//      <input type="text" value={inputValue} onChange={handleChange}/>
//      <button onClick={handleSubmit}>Add</button>
     

//      <ul>
//   {isList ? (
//     list.map((item, index) =>   //REAL ID ARE ITEM.ID INDEX IS JUST 1,2,3
//       <li key={index}>
//         <p>{item.title}</p>
//         <button onClick={()=> handleDelete(item.id)}>Delete</button>
//         <button onClick={() => handleUpdate(item.id)}>Update</button>
//       </li>
//     ))
//    : 
//     <li>No items to display</li>
//   }
// </ul>
// {editId !== null && (
//         <>
//           <input type="text" value={inputValue} onChange={handleChange} />
//           <button onClick={handleSaveEdit}>Save</button>
//         </>
//       )}

//     </>
//   )
// }

// export default App

import { useState, useEffect } from 'react';

function App() {
  const [list, setList] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [isList, setIsList] = useState(false);
  const [editId, setEditId] = useState(null);

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = () => {
    setIsList(true);
    const newList = {
      title: inputValue,
      id: Math.floor(Math.random() * 100),
    };
    setList([...list, newList]);
    setInputValue('');
  };

  const handleDelete = (id) => {
    setList(list.filter((item) => item.id !== id));
  };

  const handleUpdate = (id) => {
    setEditId(id);
  };

  
  const handleSaveEdit = () => {
    if(editId !== null){
      const updatedList = list.map((item) =>
        item.id === editId ? { ...item, title: inputValue } : item
      );
    
      setList(updatedList);
      console.log(updatedList)
      setEditId(null);
      setInputValue("");
    }
    };
    const handleInputKeyPress = (e) => {
      if (e.key === 'Enter') {
        alert('User has pressed the Enter key in the input field');
      }
    };
  
    const handleButtonClick = () => {
      alert('User has clicked the button');
    };
    
  useEffect(() => {
    if (editId !== null) {
      const selectedItem = list.find((item) => item.id === editId);
      if (selectedItem) {
        setInputValue(selectedItem.title);
      }
    }
  }, [editId, list]);

  return (
    <>
    {editId !== null ?  <>
        <input type="text" value={inputValue} onChange={handleChange} />
        <button onClick={handleSaveEdit}>Save</button>
      </>: (
        <>
      <input type="text" value={inputValue} onChange={handleChange} />
      <button onClick={handleSubmit}>Add</button>
      </>)
      }
      <ul>
        {isList ? (
          list.map((item) => (
            <li key={item.id}>
              <p>{item.title}</p>
              <button onClick={() => handleDelete(item.id)}>Delete</button>
              <button onClick={() => handleUpdate(item.id)}>Update</button>
            </li>
          ))
        ) : (
          <li>No items to display</li>
        )}
      </ul>

      <input type="text" onKeyDown={handleInputKeyPress} />
      <button onClick={handleButtonClick}>Button</button>
    </>
  );
}

export default App;

