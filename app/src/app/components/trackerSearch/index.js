import React from 'react';
import { Box } from '@mui/system';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Logo from '../../../../public/logo.svg';
import Image from 'next/image'

export default function SearchTracker() {
  return (
    <Box
        sx={{
          width: {
            xs: '100%',
            md: 350,
        },
            borderRadius: {
                xs: 0,
                md: 1,
            },
            height: 350,
            bgcolor: '#fff',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'column',
            gap: 3,
            paddingLeft: 5,
            paddingRight: 5
        }}
      >
        {/* <Image > */}
        <Image src={Logo} alt="logo" />
        <h2>Acompanhe seu pedido digitando o código de rastreio</h2>
        <TextField 
            id="outlined-basic" 
            label="Código de rastreio" 
            variant="outlined" 
            sx={{
                width: '100%'
            }}
        />
        <Button 
            variant="contained"
            sx={{
                width: '100%',
            }}
        >
            Acompanhar pedido
        </Button>
     </Box>
    )
}