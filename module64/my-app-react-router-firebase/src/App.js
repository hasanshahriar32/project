import { useEffect } from "react";
import { useState } from "react";
import LoginForm from "./authForm";
import "./App.css";

function App() {
  const [user, setUser] = useState([]);
  useEffect(() => {
    fetch("https://simple-node-server-and-mongodb-paradox-bd.vercel.app/users")
      .then((res) => res.json())
      .then((data) => setUser(data));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const users = { name, email, password };
    e.target.reset();
    // console.log(user);
    // console.log(email, password);
    fetch(
      "https://simple-node-server-and-mongodb-paradox-bd.vercel.app/users",
      {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(users),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        const newUsers = [...user, data];
        setUser(newUsers);
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="App">
      <div>
        <h1>paradox hero auth form with mongo dB</h1>
        <form action="" onSubmit={handleSubmit}>
          <br />
          <input type="text" name="name" required placeholder="name" id="" />
          <br />
          <input type="email" name="email" required placeholder="email" id="" />
          <br />
          <input
            type="password"
            name="password"
            required
            placeholder="password"
            id=""
          />
          <br />
          <input type="submit" value="submit" />
        </form>
      </div>

      <h2>Users: {user.length}</h2>
      <div>
        {user.map((user) => (
          <div key={user._id}>
            <li>
              {user.name} : {user?.email}
            </li>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
