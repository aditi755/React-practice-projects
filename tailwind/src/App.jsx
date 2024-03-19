
import './App.css'


const items = [
  {
    item: 'Tree',
    id: 1, 
  },
  {
    item: 'Pen',
    id: 2
  },
  {
    item: 'Pencil',
    id: 3
  },
]

function App() {

  return (
    <div className="bg-emerald-900  h-screen w-screen ">
    <div className="w-3/6 h-20 bg-emerald-500 flex flex-row justify-center ml-40">
    <div className="flex text-2xl justify-center text-emerald-950 font-bold mt-5 font-momo">Hello Doogos!</div>
    </div>

    <div className="grid grid-rows-4 grid-flow-col gap-10 mt-28">
    <div>1</div>
    <div>2</div>
    <div>3</div>
    <div>4</div>
    <div>5</div>
    </div>

    {items.map((item) => (
        <div key={item.id}>{item.item}</div>
      ))}
    </div>
  )
}

export default App
