import { Avatar, Box, ListItem, Typography } from '@material-ui/core'
import { List, Stack } from '@mui/material'
import React from 'react'

function SideBar() {
  return (
    <Box style={{ maxWidth: "190px", minHeight: "100vh", border: "1px solid black" }}>
      <Stack>
        <Box>
          <Stack sx={{ backgroundColor: "#26C0E2" }} justifyContent={'center'} alignItems='center'>
            <img width={'40px'} src="logo192.png" alt="" />
            <Typography variant='h6'> Dabbler</Typography>
            <Typography >Transform</Typography>
          </Stack>
        </Box>
        <Box>
          <List sx={{ backgroundColor: "#292F36" }}>
            <ListItem>
              <Typography color='background.primary' variant='h6'>Dashboard</Typography>
            </ListItem>
            <ListItem>
              <Typography color='background.primary' variant='h6'>Projects</Typography>
            </ListItem>
            <ListItem>
              <Typography color='background.primary' variant='h6'>Dictionary</Typography>
            </ListItem>
            <ListItem>
              <Typography color='background.primary' variant='h6'>Incidents</Typography>
            </ListItem>
            <ListItem>
              <Typography color='background.primary' variant='h6'>Manage</Typography>
            </ListItem>
          </List>
        </Box>
      </Stack>
    </Box>
  )
}

export default SideBar