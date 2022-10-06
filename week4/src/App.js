import logo from './logo.svg';
import Weather from "./Weather";
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React fgdfgdfgdfg
        </a>
        <h1>Hello</h1>
      </header>
      <Weather />
    </div>
  );
}

export default App;
