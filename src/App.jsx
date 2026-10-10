import { useState } from 'react';
import Counter from './counter.jsx';
import CounterButtonFunc from './CounterButtonFunc.jsx';
import ButtonClickHandler from './ButtonClickHandler.jsx';

function App() {
  const [selectedProgram, setSelectedProgram] = useState(null);

  return (
    <div style={{ padding: '40px' }}>
      <h1>My React Programs</h1>

      <h3>Programs:</h3>

      <ul>
        <li>
          <a
            href="#counter"
            onClick={() => setSelectedProgram('counter')}
          >
            Counter Class
          </a>
        </li>

        <li>
          <a
            href="#useState"
            onClick={() => setSelectedProgram('useState')}
          >
            Counter using useState
          </a>
        </li>

        <li>
          <a
            href="#click"
            onClick={() => setSelectedProgram('click')}
          >
            Button Click Event
          </a>
        </li>
      </ul>

      <hr/>

      <div style={{ marginTop: '30px' }}>
        {selectedProgram === 'counter' && <Counter />}
        {selectedProgram === 'useState' && <CounterButtonFunc />}
        {selectedProgram === 'click' && <ButtonClickHandler />}

        {selectedProgram === null && (
          <p>Click a program above to open it.</p>
        )}
      </div>
    </div>
  );
}

export default App;