import Image from 'next/image'
import { Container } from '@mui/material'
import SearchTracker from './components/trackerSearch'
import Tracker from './components/tracker'

export default function Home() {
  return (
    <Container 
      sx={{
        display: 'flex',
        padding: {
          xs: 0,
          md: 1
      },
        alignItems: {
          xs: 'flex-start',
          md: 'center',
        }, 
        justifyContent: {
          xs: 'flex-start',
          md: 'center',
        },
        height: '100vh',
        flexDirection: {
          xs: 'column',
          md: 'row',
        },
      }} 
    >
      <SearchTracker />
      <Tracker />
    </Container>
    
  )
}
