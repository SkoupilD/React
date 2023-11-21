import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react';



function App() {
  const password = 'slanetycinky';
  const [authorized, setAuthorized] = useState(false);

  function handleSubmit(e) {
    const enteredPassword = e.target.querySelector(
      'input[type="password"]').value;
    const auth = enteredPassword === password;
    setAuthorized(auth)
  }
    const login = (
    <form action="#" onSubmit={handleSubmit}>
    <input type="password" placeholder="Password" />
    <input type="submit" />
    </form>
    );
    const contactInfo=(
      <div>
      <h2>Dominik Skoupil</h2>
        <p>dominik.skoupil@gmail.com</p>
          <p>+420 776 203 596</p>
          </div>
    );
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div id="authorization">
        <h1>{
          authorized ? "Contact" : "Enter the Password"
        }</h1>
        { authorized ? contactInfo : login }
      </div>
      </header>
    </div>
  );
}

export default App;
