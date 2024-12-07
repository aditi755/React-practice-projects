
import React, { useState } from 'react';

export default function App(props) {
  const [searchTerm, setSearchTerm] = useState('');

  const calls = [
    { name: "Jamie", numOfCalls: 7 },
    { name: "Anna", numOfCalls: 2 },
    { name: "Sam", numOfCalls: 3 },
    { name: "Tony", numOfCalls: 8 },
    { name: "Jamie", numOfCalls: 7 },
    { name: "Anna", numOfCalls: 1 },
    { name: "Sam", numOfCalls: 16 },
    { name: "Tony", numOfCalls: 1 },
    { name: "James", numOfCalls: 1 },
  ];

  const singleCalls = calls.reduce((callsByName, item) => {
    const currentName = item.name;
    if (Object.prototype.hasOwnProperty.call(callsByName, currentName)) {
      callsByName[currentName] += item.numOfCalls;
    } else {
      callsByName[currentName] = item.numOfCalls;
    }
    return callsByName;
  }, {});

  const sortedArray = [];
  for (const name in singleCalls) {
    sortedArray.push({ name, numOfCalls: singleCalls[name] });
  }

  sortedArray.sort((a, b) => b.numOfCalls - a.numOfCalls);
// This means that filteredArray will be re-evaluated every time the component re-renders, which will happen whenever the state (searchTerm) changes.
  const filteredArray = sortedArray.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div>
      <div>List</div>
      <input
        type="text"
        placeholder="Search by name"
        value={searchTerm}
        onChange={handleChange}
      />
      <ul>
        {filteredArray.map((item, index) => (
          <li key={index}>
            {item.name}: {item.numOfCalls}
          </li>
        ))}
      </ul>
    </div>
  );
}
