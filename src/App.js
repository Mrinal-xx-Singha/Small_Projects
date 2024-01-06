import { Button, Typography, TextField } from '@mui/material';
import { Box,  } from '@mui/system';
import React from 'react';
import { useState } from 'react';

import { useSpeechSynthesis } from 'react-speech-kit';


import './App.css';

function App() {
  const {speak} =useSpeechSynthesis();

  const [value, setValue] = useState("")



  return (
    <div className='Header'>
      <Typography variant='h1' sx={{backgroundColor:'#fff' ,color:'#black', fontWeight:'200rem',fontFamily:'roboto',
    alignContent:'center',display:'flex', justifyContent:'center',
    textDecoration:'none',fontSize:'50px',}}>Made By- @Mrinal Singha</Typography>
    <div className='speech'>
      <Box
      sx={{
        padding:'50px',
        margin:'50px',
        width:'100vh',
        height:'100vh',
         color:'#fff'}}
       >
      <div className='group'>
        <Typography variant='h4'
         color='black'
        sx={{p:2,m:2,
        fontFamily:'roboto'}}>Text to Speech Converter using React</Typography>
      </div>
      <div className='group'>
        <TextField id='standard-basic' 
        variant='filled'
        sx={{color:'none',
        border:'none',
        outline:'none',
        p:2,m:2,
        maxWidth:'100%',
        backgroundColor:'#fff'
         ,height:'20%', width:'100%'}}
         rows={10} onChange={(e) => setValue(e.target.value)}>
           </TextField>
        <Button variant='outlined'
        width='20px' 
        sx={{
          justifyContent:'center',
          display:'inline-block',
          alignItems:'center',
          textDecoration:'none', 
          width:'20vh',
          height:'10vh',
          p:'20px',
          m:'20px',
          color:'gray', backgroundColor:'#fff'}} 
        onClick={()=> speak({text:value})}>
          Speech
        </Button>
      </div>
      </Box>
    </div>
    </div>

  );
}

export default App;
