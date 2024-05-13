import { useState, useEffect } from "react";
import { ForAdmin } from "./ForAdmin";
import { AddUsers } from "./AddUsers";
import { Users } from "./Users";

function App() {
  const [users, setUsers] = useState([]);
  const [playersCount, setPlayersCount] = useState(0);
  const [traitorCount, setTraitorCount] = useState(0);
  const [forAdmin, setForAdmin] = useState(true);
  const [isAdd, setIsAdd] = useState(false);

  useEffect(() => {
    console.log(playersCount)
    console.log(users)
    console.log(users.length)
    if (playersCount <= users.length) setIsAdd(false);
  }, [users, playersCount]);

  return (
    <div className="App">
      <h1>Among Us</h1>
      {forAdmin && <ForAdmin playersCount={playersCount} setPlayersCount={setPlayersCount} traitorCount={traitorCount} setTraitorCount={setTraitorCount} setForAdmin={setForAdmin} setIsAdd={setIsAdd} />}
      {isAdd && <AddUsers users={users} setUsers={setUsers} />}
      {!isAdd && <Users users={users} setUsers={setUsers} />}
    </div>
  );
}

export default App;
