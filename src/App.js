import React, { useState } from 'react';
import s from './App.module.css';
import Header from './components/Header/Header';
import Time from './components/Time/Time';
import Buttons from './components/Buttons/Buttons';
import DoubleClick from './components/Buttons/testButton';

function App() {

  const [time, setTime] = useState({ ms: 0, s: 0, m: 0, h: 0 });
  const [interv, setInterv] = useState();
  const [status, setStatus] = useState(0);
  // 0 - don`t start
  // 1 - started
  // 2 - wait

  const start = () => {
    run();
    setStatus(1);
    setInterv(setInterval(run, 10));
  };

  var updateMs = time.ms, updateS = time.s, updateM = time.m, updateH = time.h;

  const run = () => {
    if (updateM === 60) {
      updateH++;
      updateM = 0;
    }

    if (updateS === 60) {
      updateM++;
      updateS = 0;
    }

    if (updateMs === 100) {
      updateS++;
      updateMs = 0;
    }
    updateMs++;

    return setTime({ ms: updateMs, s: updateS, m: updateM, h: updateH });
  };

  const wait = () => {
    clearInterval(interv);
    setStatus(2);
  };

  const reset = () => {
    clearInterval(interv);
    setTime({ ms: 0, s: 0, m: 0, h: 0 });
    setStatus(0);
  };

  const resume = () => start();

  return (
    <div className={s.appContent}>
      <Header />
      <div className={s.timer}>
        <Time time={time} />
      </div>
      <Buttons status={status} resume={resume} start={start} wait={wait} reset={reset} />
      <DoubleClick />
    </div>
  );
}

export default App;

