import { useState } from "react";
import "./App.css";
import Examples from "./components/Examples-list";
import Form from "./components/Form";
import { list } from "./constants";
export default function App() {
  const [active, setActive] = useState(1);
  return (
    <div className="app">
      <Form active={active} setActive={setActive} />
      <Examples active={active} setActive={setActive} />
      <p className="w-40 text-base font-bold">
        {list[active - 1].value.charAt([0]) +
          list[active - 1].value.slice(1).toLocaleLowerCase()}{" "}
        content
      </p>
    </div>
  );
}
