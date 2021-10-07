
import 
{Paper, styled , Grid, TextField, Button, FormControlLabel, Checkbox,Box} from '@material-ui/core';

import { useState } from 'react'


export default function ContactUS(){

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = e => { 
        e.preventDefault()
        console.log('Sending')
      let data = {
          name,
          email,
          message
        }
      fetch('../api/contact', {
          method: 'POST',
          headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(data)
        }).then((res) => {
          console.log('Response received')
          if (res.status === 200) {
            console.log('Response succeeded!')
            setSubmitted(true)
            setName("")
            setEmail("")
            setBody("")
          }
        })
      }
      const Item = styled(Paper)(({ theme }) => ({
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
      }));

    return (

        <Box sx={{ flexGrow: 1 }}>
            
      <Grid container spacing={4} columns={16}> 
            <Grid item xs={12}>
                <Item> <h1>Contact Me</h1></Item>
            </Grid>
            <Grid item xs={12}>
               <TextField
                  type="text"
                  onChange={(e)=>{setName(e.target.value)}}
                  name="name"
                  label="Name"
                  fullWidth
                  required
                />
            </Grid>
            <Grid item xs={12}>
              <TextField
                type="email" 
                onChange={(e)=>(setEmail(e.target.value))}
                name="email"
                label="Email"
                fullWidth
                required
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                type="text"
                onChange ={(e)=>(setMessage(e.target.value))} 
                name="message"
                label="Message"
                fullWidth
                required
              />
            </Grid>

            <Grid item xs={12}>
            <Item><Button variant="contained" type='submit' onClick={(e)=>(handleSubmit(e))}>Submit</Button></Item>
            </Grid>




            
      </Grid>
    </Box>
        
        
        
        // <div >
        // < form  >
        // < formGroup >
        //     < label htmlFor='name'>Name</label>
        //     < input type='text' onChange={(e)=>{setName(e.target.value)}} name='name'  /> 
        //     </formGroup>
        // < formGroup  >
        //     < label htmlFor='email'>Email</label>
        //     < input type='email' onChange={(e)=>{setEmail(e.target.value)}} name='email'  />
        // </formGroup>
        // < formGroup >
        //     < label htmlFor='message'>Message</label>
        //     < input type='text' onChange={(e)=>{setMessage(e.target.value)}} name='message'  />
        // </formGroup>
        // < input type='submit' onClick={(e)=>{handleSubmit(e)}}/>
        // </form >
        // </div>



    )

}
