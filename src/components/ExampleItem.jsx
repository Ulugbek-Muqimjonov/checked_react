function ExampleItem({ value, id, active, clickAvtive }) {
  return (
    <li
      className={active == id ? "cursor-pointer" : "opacity-30 cursor-pointer"}
      onClick={() => clickAvtive(id)}
    >
      {value}
    </li>
  );
}

export default ExampleItem;
