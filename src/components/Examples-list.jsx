import ExampleItem from "./ExampleItem";
import { list } from "../constants";
function Examples({ active, setActive }) {
  const clickAvtive = (id) => {
    setActive(id);
  };
  return (
    <ul className="flex gap-4 font text-base font-bold mb-5">
      {list.map((item) => (
        <ExampleItem
          key={item.id}
          value={item.value}
          id={item.id}
          active={active}
          clickAvtive={clickAvtive}
        />
      ))}
    </ul>
  );
}

export default Examples;
