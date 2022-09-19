import NavBar from 'components/NavBar';
import React from 'react';
import { MainRouter } from 'routes/MainRouter';

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
        <h1>hola {process.env['REACT_APP_NAME']}</h1>
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
