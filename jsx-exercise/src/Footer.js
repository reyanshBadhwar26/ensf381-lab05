import './App.css';

function Footer() {

  return (
    <footer className="footer">
      <p> ATTIA Abdelrahman, BADHWAR Reyansh </p>
      <p>Current Date: {new Date().toLocaleDateString()}</p>
    </footer>
  );
}

export default Footer;
