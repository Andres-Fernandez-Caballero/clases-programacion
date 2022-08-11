import logo from './logo.svg';
import './App.css';
import { NavBar } from './components/NavBar';
import { MainRouter } from './routes/MainRouter';

function App() {

/*
  \_/     
  --(_)--
    / \     |>  v-v-v-v   |>
    ,   ,  /_\  |     |  /_\
    |\_/|  | |'''''''''''| |          |\
    (q p),-| | ||  _  || | |'-._       ))
     \_/_(/| |    |#|    | | )  '-.___//
   --w-w---'-'----'-'----'-'----------'-----------ldb---
*/

 /*
  *                             |>>>                    +
  +          *                      |                   *       +
                      |>>>      _  _|_  _   *     |>>>
             *        |        |;| |;| |;|        |                 *
       +          _  _|_  _    \\.    .  /    _  _|_  _       +
   *             |;|_|;|_|;|    \\: +   /    |;|_|;|_|;|
                 \\..      /    ||:+++. |    \\.    .  /           *
        +         \\.  ,  /     ||:+++  |     \\:  .  /
                   ||:+  |_   _ ||_ . _ | _   _||:+  |       *
            *      ||+++.|||_|;|_|;|_|;|_|;|_|;||+++ |          +
                   ||+++ ||.    .     .      . ||+++.|   *
  +   *            ||: . ||:.     . .   .  ,   ||:   |               *
           *       ||:   ||:  ,     +       .  ||: , |      +
    *              ||:   ||:.     +++++      . ||:   |         *
       +           ||:   ||.     +++++++  .    ||: . |    +
             +     ||: . ||: ,   +++++++ .  .  ||:   |             +
                   ||: . ||: ,   +++++++ .  .  ||:   |        *
                   ||: . ||: ,   +++++++ .  .  ||:   |            
*/

  return (
    <div className="App">
      <NavBar />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
        🏰 Edit <code>src/App.js</code> and save to reload.
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
      <MainRouter />
    </div>
  );
}

export default App;
