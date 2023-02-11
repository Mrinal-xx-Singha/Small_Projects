import { Button, Typography, TextField } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { useState } from 'react';

import { useSpeechSynthesis } from 'react-speech-kit';


import './App.css';

function App() {
  const {speak} =useSpeechSynthesis();

  const [value, setValue] = useState("")



  return (
    <div className='speech'>
      <Box>
      <div className='group'>
        <Typography variant='h4' color={'black'}>Text to Speech Converter using React</Typography>
      </div>
      <div className='group'>
        <TextField id='standard-basic' 
        label='filled' 
        variant='filled'
        
         rows={10} onChange={(e) => setValue(e.target.value)}>
           </TextField>
      <div className='group'>
        <Button variant='outlined' onClick={()=> speak({text:value})}>
          Speech
        </Button>
      </div>
      </div>
      </Box>
    </div>

  );
}

export default App;
