import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { Box, Button, Container, MenuItem, Paper, Select, TextField } from '@mui/material'



function App() {
  const [result, setresult] = useState('')
  const [text, settext] = useState('')
  const [algo, setalgo] = useState('nn')


  return (
    <Container>
      <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        {/* make a material textarea and a button with select dropdown */}
        <h1>Emotion Tracker</h1>

        <Box sx={{
          width: '100%',
        }}>
          <TextField
            required
            multiline
            maxRows={4}
            sx={{
              width: '100%',
            }}
            onChange={(e) => {
              settext(e.target.value)
            }}


            id="outlined-required"
            label="Select your emotion"

          />

        </Box>
        <Box sx={{
          height: '20px',
        }}>
        </Box>
        <Select


          label="Select Algorithm"
          value={algo}
          onChange={(e) => {
            console.log(e.target.value);

            setalgo(e.target.value)
          }}
          displayEmpty
          inputProps={{ 'aria-label': 'Without label' }}


        >
          <MenuItem value={'nn'}>Neural Network</MenuItem>
          <MenuItem value={'ml'}>Machine Learning</MenuItem>



        </Select>

        <Box sx={{
          height: '20px',
        }}>
        </Box>



        <Button variant="contained" onClick={() => {
          let url = 'http://127.0.0.1:5000/'

          if (algo === 'nn') {
            url = url + 'predict' + '?data=' + text
          }
          else {
            url = url + 'predict/nb' + '?data=' + text
          }

          fetch(url, {

            headers: {
              'Content-Type': 'application/json'
            },
            method: 'GET'
          }).then(res => res.json()).then(data => {
            console.log(data);

            setresult(JSON.stringify(data))
          }
          )


        }}>
          Submit

        </Button>

        <Box sx={{
          height: '20px',
        }}>
        </Box>

        {/* show json result */}
        <Paper sx={{
          width: '100%',
          height: '100px',
          overflow: 'auto',
        }}>
          {result}
        </Paper>










      </Box>


    </Container>
  )
}

export default App
