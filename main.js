import './style.css';
import { setupSentencer } from './sentencerButton.js';

document.querySelector('#app').innerHTML = `
  <div>
    <div class="card">
      <h2 id="sentence-container"></h2>
      <h3>This sentence has {{ a_noun }} and {{ an_adjective }} {{ noun }} in it.</h3>
      <button id="sentence" type="button">Click</button>
    </div>
  </div>
`;

setupSentencer(
  document.querySelector('#sentence'),
  document.querySelector('#sentence-container')
);
