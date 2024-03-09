import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import BarChart from './components/BarChart'
import PieChart from './components/PieChart'
function App() {
  const data = [50, 20, 30, 40, 50];
  const data1 = [
    { label: 'A', value: 20 },
    { label: 'B', value: 20 },
    { label: 'C', value: 50 },
    { label: 'D', value: 40 },
    { label: 'E', value: 50 }
  ];
  return (
    <div>
      <h1>Simple Bar Chart</h1>
      <BarChart data={data} />
      <h1>Pie Chart Example</h1>
      <PieChart data={data1} width={400} height={400} />
    </div>
  );
};

  


export default App
