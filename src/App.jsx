import { useState } from 'react';
import ConfigureCounter from './components/ConfigureCounter.jsx';
import Counter from './components/Counter/Counter.jsx';
import Header from './components/Header.jsx';
import { log } from './log.js';

function App() {
  log('<App /> rendered');
  const [chosenCount, setChosenCount] = useState(0);

  function handleChosenCount(chosenCount){
    setChosenCount(chosenCount);
  }

  return (
    <>
      <Header />
      <main>
      <ConfigureCounter setChosenCount={handleChosenCount}/>
      <Counter initialCount={chosenCount} />
      <Counter initialCount={0}/>
      </main>
    </>
  );
}

export default App;
