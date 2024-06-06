import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [input, setInput] = useState("");
  const [list, setList] = useState([])
 
  const handleInput = (e) => {
    setInput(e.target.value)
  }
  const handleTask = (e) => {
    setList([...list, input])
    setInput("")
  }

  const handleDelete = (id) => {
    const filteredList = list.filter((_, index) => index !== id);
    console.log('filteredList', filteredList)
    setList(filteredList);
  };
  

  return (
    <>
      <h1 className="p-2 text-3xl text-black font-semibold">Todo App</h1>
      <div className="p-3 text-2xl ">
        <div>
          <input  className="bg-violet-400 pl-10 pr-10 pt-3 pb-3 m-3 rounded text-black"
            type="text"
            placeholder="Search todo"
            value={input}
            onChange={(e) => handleInput(e)}
          />
          <button className="rounded bg-violet-800 text-white p-3 m-3" onClick={handleTask}>Add Task</button>
        </div>
        <div>
          <ul>
          {list.map((item, id) => (
  <li  className='bg-violet-600 m-2 p-3'  key={id} onClick={() => handleDelete(id)}>
    {item}
  </li>
))}

          </ul>
        </div>
      </div>
    </>
  );
}

export default App;
