import { useState } from "react";
import "./styles.css";
import { useLocalStorage } from "./UseLocalStorage";

export default function App() {
  const [value, setValue] = useState();
  const { setItem, getItem, removeItem } = useLocalStorage("item1");
  return (
    <div className="App">
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <div>
        <button onClick={() => setItem(value)}>Set</button>
        <button onClick={() => console.log(getItem())}>Get</button>
        <button onClick={removeItem}>Remove</button>
      </div>
    </div>
  );
}
