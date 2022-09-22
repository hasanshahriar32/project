import logo from './logo.svg';
import './App.css';



const version = 0.1;
const about = {
  name: 'React',
  version: 17.0
}


const aboutStyle = {
  color: 'red',
  fontSize: '20px'
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>JSX</h1>
        <div className="container">
          <h3>Hello react!! <span>{version}</span></h3>
          <p style={aboutStyle}>{about.name} version: {about.version}</p>
        </div>
        
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
