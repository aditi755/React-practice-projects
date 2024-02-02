import { useState, useEffect } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import Card from './Card.jsx';
import Try from './Try.jsx'

function App() {
  const [value, setValue] = useState('');
  const [show, setShow] = useState(false);

  const onChange = (e) => {
    const newValue = e.target.value;
    setValue(newValue);
  };

  const handleDone = (e) => {
    e.preventDefault(); // Prevent the default form submission behavior
    setShow(true);
  };

  useEffect(() => {
    console.log(show);
  }, [show]);    //anytime show state variable updated useEffect will run

  return (
    <>
      <div>Enter your Name</div>
      <form style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
        <input
          type="input"
          style={{ width: '180px', height: '20px' }}
          onChange={(e) => onChange(e)}
          value={value}
        ></input>

        <button
          style={{ width: '70px', height: '20px' }}
          onClick={(e) => handleDone(e)} // Pass the event and prevent default behavior
        >
          Done
        </button>
        <button style={{ width: '90px', height: '25px' }}>Remove</button>
      </form>
      {show && <Card value={value} />}
  
    </>
  );
}

export default App;

