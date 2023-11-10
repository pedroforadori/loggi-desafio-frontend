"use client"

import './styles.css'

import React, { useState } from 'react';
import Box from '@mui/material/Box';
import PanoramaFishEyeIcon from '@mui/icons-material/PanoramaFishEye';
import CircularProgress from '@mui/joy/CircularProgress';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';

const steps = [
  {
    label: 'Aguardando pagamento',
    finish: true, 
    active: false
  },
  {
    label: 'Pagamento aprovado',
    finish: true, 
    active: false
  },
  {
    label: 'Aguardando entregador',
    finish: false,
    active: true
  },
  {
    label: 'Pedido em transporte',
    finish: false, 
    active: false
  },
  {
    label: 'Está chegando',
    finish: false, 
    active: false
  },
  {
    label: 'Chegou!',
    finish: false, 
    active: false
  },
];

export default function Tracker() {
    const [activeStep, setActiveStep] = useState(0);

    const handleNext = () => {
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };
  
    const handleBack = () => {
      setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };
  
    const handleReset = () => {
      setActiveStep(0);
    };
  return (
    <Box
        sx={{
        width: {
            xs: '100%',
            md: 350,
        },
            // height: 350,
            display: 'flex',
            alignItems: 'center',
            // justifyContent: 'center',
            flexDirection: 'column',
        }}
    >
    <section className='step'>
        <p>Previsao de chegada: 20h30 até 20h45</p>
        {steps.map((item, index) => (
            <div key={index} className='step__line'>
                {item.finish ? <CheckCircleOutlineIcon /> : <PanoramaFishEyeIcon />}
                <span className='step__label'>{item.label}</span>
                {item.active && (
                  <CircularProgress 
                  thickness={1}
                  sx={{
                    "--CircularProgress-size": "10px"
                  }}
                  />
                )}
                
            </div>
        ))}
    </section>
 </Box>
 );
}