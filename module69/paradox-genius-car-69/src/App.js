import { DarkThemeToggle, Flowbite } from "flowbite-react";
import "./App.css";
import Routes from "./Components/Routes/Routes";

function App() {
  return (
    <Flowbite
      theme={{
        theme: {
          alert: {
            color: {
              primary: "bg-primary",
            },
          },
        },
      }}
    >
      <div className="dark:bg-gray-800">
        <Routes></Routes>
      </div>
    </Flowbite>
  );
}

export default App;
