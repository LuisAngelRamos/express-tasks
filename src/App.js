import logo from './logo.svg';
import NavBar from './components/NavBar'
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar />
      </header>
      <img src={logo} className="App-logo" alt="logo" />
    </div>
  );
}

export default App;
