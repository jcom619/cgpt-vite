<html>
  <link src="./style.css"/>
  <link src="./fonts.css">
  <link src="./assets/bot.svg">
  <head>
    document.querySelector('#app').innerHTML = ''
  </head><body classList="tech-font">
      <div>
        <div style="position:absolute;z-index:5;left:40px;bottom:60px;" classList="sendDiv">
          <input id="getText" classList="chat typeHere" type="text" />
          <button id="sendBtn" classList="sendBtn">
            &#128405;
          </button>
        </div>
        <h1 classList="main-heading">ChatGPT API Test!</h1>
        <div classList="icons">
          <a href="" target="_blank">
            <img classList="userImg" src="/assets/user.svg" classList="logo" alt="user" />
          </a>
          <a href="#" target="_blank">
            <img classList="botImg" src="${theBot}" classList="" alt="JavaScript logo" />
          </a>
        </div>
        <p classList="read-the-docs">
          gitHub link in the <a href="https://github.com/jcom619/cgpt-vite"> HERE</a>
        </p>
      </div>
      <span classList="output">
        <p id="textHere" classList="outputBox">
        </p>
      </span>
    </body>
  </html>