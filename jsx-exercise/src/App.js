import './App.css';
import Footer from './Footer';
import Controls from './Controls';
import UserList from './UserList';

function App() {
  let isLoggedIn = true;
  if (isLoggedIn) {
    return (
      <div>
      <section>
              <Controls /> 
      </section>
      <section>
              <UserList /> 
      </section>
      <section>
              <Footer /> 
      </section>
      </div>
    );
  }
}

// EXERCISE 1 CODE!!
// function App() {
//   let currentYear = new Date().getFullYear();
//   let isLoggedIn = true;
//   return (
//     <div>
//       <h1>ENSF-381: Full Stack Web Development</h1>
//       <p>React Components</p>
//       <p>Current Year: {currentYear}</p>
//       <p>{isLoggedIn ? "Welcome back!" : "Please log in."}</p>
//     </div>
//   );
//   }

export default App;
