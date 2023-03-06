import './style.css'
import theBot from './bot.svg'
import { setupCounter } from './counter.js'

document.querySelector('#app').innerHTML = `
  <style>
  body {
    background-image:linear-gradient:to top left, #000000aa,#ffffff55;
  }  

  </style>
 <div>
    <a href="" target="_blank">
      <img class="userImg" src="./user.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="#" target="_blank">
      <img class="botImg" src="${theBot}" class="" alt="JavaScript logo" />
    </a>
    <h1>ChatGPT API Test!</h1>
    <div class="card">
      <button id="counterPlus" type="button">+</button>
    </div>
    <div class="card">
      <button id="counterMinus" type="button">-</button>
    </div>
    <p class="read-the-docs">
      project workspace link in the <a href="../README.md">README.md</a> file
    </p>
  </div>
`

setupCounter(document.querySelector('#counter'));
