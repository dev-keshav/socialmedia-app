import { Box } from '@mui/material'
import React from 'react'
import Posts from './Posts'

const Feeds = () => {
  return (
    <Box bgcolor="#E6E6FA" flex={4} p={2}>
      <Posts />
      <Posts />
      <Posts />
      <Posts />
      <Posts />
      <Posts />

    </Box>
  )
}

export default Feeds