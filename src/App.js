import logo from './img/logo/logo.svg';
import './App.css';
import FooTer from './footer'
import ImgContainer from './imgIntercambiabili'


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          2 + 2 = 5
        </p>
        <a
          className="App-link"
          href="https://www.mcdonalds.it/"
          target="_blank"
          rel="noopener noreferrer"
        >
          QWERTYTREWQ
        </a>
      </header>
      
      <hr/>
      <ImgContainer/>
      <hr/>
      <FooTer/>


    </div>
  );
}

export default App;
