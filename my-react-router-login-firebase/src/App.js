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
      >
        <Routes></Routes>
      </Flowbite>
    </div>
  );
}

export default App;
