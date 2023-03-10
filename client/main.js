import './style.css'
import './fonts.css'
import theBot from './assets/bot.svg'


document.querySelector('#app').innerHTML = `
  <head>
  </head>
  <body class="tech-font">
  <div>
  <div style="position:absolute;z-index:5;left:40px;bottom:60px;" class="sendDiv">
  <input id="getText" class="chat typeHere" type="text"/>
  <button id="sendBtn" class="sendBtn">
  &#128405;
  </button>
  </div>
  <h1 class="main-heading">ChatGPT API Test!</h1>
  <div class="icons">
      <a href="" target="_blank">
        <img class="userImg" src="/assets/user.svg" class="logo" alt="user" />
      </a>
      <a href="#" target="_blank">
      <img class="botImg" src="${theBot}" class="" alt="JavaScript logo" />
      </a>
</div>
      <p class="read-the-docs">
      gitHub link in the <a href="https://github.com/jcom619/cgpt-vite"> HERE</a>
      </p>
      </div>
      <span class="output">
      <p id="textHere" class="outputBox">
      </p>
      </span>
  </body>
`


