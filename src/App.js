import { useState } from "react";
import "./App.css";
import List from "./Components/List";
import data from "./data";

const App = () => {
  const [list, setList] = useState(data);
  
  const deleteUser = (id) => {
    let updateUser = list.filter((element) => element.id != id);
    setList(updateUser);
  };
  return (
    <main className="container">
      <List lists={list} deleteUser={deleteUser} />
      <button className="clear btn" onClick={() => setList([])}>
        Clear All
      </button>
    </main>
  );
};

export default App;
