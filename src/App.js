import React from 'react';
import { useState } from 'react';

import { useSpeechSynthesis } from 'react-speech-kit';


import './App.css';

function App() {
  const {speak} =useSpeechSynthesis();

  const [value, setValue] = useState("")



  return (
    <div className='speech'>
      <div className='group'>
        <h2> Text to Speech Converter using React</h2> 
      </div>
      <div className='group'>
        <textarea rows={10} onChange={(e) => setValue(e.target.value)}>
           </textarea>
      <div className='group'>
        <button onClick={()=> speak({text:value})}>
          Speech
        </button>

      </div>
      </div>
    </div>

  );
}

export default App;
