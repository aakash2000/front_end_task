import logo from './logo.svg';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Gripper from "./products/Gripper";

function App() {
  return (
    <div className="App">
      <ul className="list-group">
        <a href="/Rounded" className="list-group-item">
          Rounded
        </a>
        <a href="/Gripper" className="list-group-item">
          Gripper
        </a>
        <a href="/contact_us" className="list-group-item">
          Contact
        </a>
      </ul>
    </div>
  );
}

export default App;
