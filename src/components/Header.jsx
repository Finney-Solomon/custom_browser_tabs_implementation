import { AppBar, Box, Toolbar, Typography } from '@mui/material'
import React from 'react'

export const Header = () => {
  return (
    
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
        
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Custom Browser Tabs Implementation
          </Typography>
          
        </Toolbar>
      </AppBar>
    </Box>
  )
}
