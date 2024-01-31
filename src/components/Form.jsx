import { list } from "../constants";
function Form({ active, setActive }) {
  const form = (evt) => {
    evt.preventDefault();
    const val = evt.target.children[0].value;
    const changeActive = list.find((item) => item.id == val);
    if (changeActive) {
      setActive(changeActive.id);
    } else {
      alert(`${val}-  o'rinda xech qanday qiymat yuq`);
    }
    evt.target.children[0].value = "";
  };
  return (
    <form
      className="grid grid-cols-3 gap-3 mb-5 text-lg"
      onSubmit={(evt) => form(evt)}
    >
      <input
        className="input p-3 col-span-2 border-b-2"
        type="number"
        placeholder="Enter tab placeholder"
        required
      />
      <button className="btn btn-light bg-slate-100 p-2">Change tab</button>
    </form>
  );
}

export default Form;
