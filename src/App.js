import React from 'react';
import './App.css';

const displayEmojiName = event => alert(event.target.id);
function App() {
  const greeting = "greeting";
  return (
    <div className="container">
  <h1 id={greeting}>Hello jsx</h1>
  <p>This is jsx</p>
  <ul>
    <li>
      <button onClick={displayEmojiName}>
        <span role="img" aria-label="grinning face" id="grinning face"></span>

      </button>
    </li>
    <li>
      <button onClick={displayEmojiName}>
        <span role="img" aria-label="party popper" id="party popper"></span>
        
      </button>
    </li>
    <li>
      <button onClick={displayEmojiName}>
        <span role="img" aria-label="woman dancing" id="woman dancing"></span>
        
      </button>
    </li>
  </ul>
  </div>
  )
}

export default App;
