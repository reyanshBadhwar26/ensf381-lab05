import logo from './logo.svg';
import './App.css';


function App() {
  let currentYear = new Date().getFullYear();
  let isLoggedIn = true;
  return (
    <div>
      <h1>ENSF-381: Full Stack Web Development</h1>
      <p>React Components</p>
      <p>Current Year: {currentYear}</p>
      <p>{isLoggedIn ? "Welcome back!" : "Please log in."}</p>
    </div>
  );
}

export default App;
