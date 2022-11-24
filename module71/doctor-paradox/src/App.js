import { DarkThemeToggle, Flowbite } from "flowbite-react";
import "./App.css";
import Routes from "./Components/Routes/Routes";

function App() {
  return (
    <div className="">
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
      ></Flowbite>
      <Routes></Routes>
    </div>
  );
}

export default App;
