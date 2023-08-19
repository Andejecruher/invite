import React, { useState } from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { Container } from '@mui/material';

const drawerWidth = 435;

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  }),
);

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-start',
}));

const DrawerFooter = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  justifyContent: 'flex-start',
}));

const DrawerBody = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  justifyContent: 'flex-start',
}));

export default function PersistentDrawerLeft() {
  const [open] = useState(true);
  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <Drawer 
        sx={{
          width: drawerWidth,   
          backgroundColor: '#f6f1f0',
        }}
        variant="persistent"
        anchor="left"
        open={true}
      >
        <Container>
          <DrawerHeader>
            <div>
              <img width="200" src="https://i.postimg.cc/hPW6L8Ds/kisspng-wedding-invitation-bridegroom-clip-art-bride-and-groom-5b10fe3602bda4-1847344215278403100112.png" alt="logo" />
              <h1>Valeria  & Orlando</h1>
              <p>15.11.2023</p>
            </div>
          </DrawerHeader>
          <DrawerBody>
          <List>
            {['Inicio', 'Bienvenida', 'Ceremonia y Recepción', 'Código de vestimenta', 'Pase', 'Mesa de regalos', 'Confirmación'].map((text, index) => (
              <ListItem key={text} disablePadding>
                <ListItemButton>
                  <ListItemText primary={text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
          </DrawerBody>
          <DrawerFooter>
            <div>
              <p>© 2023 Valeria & Orlando. Boda</p>
              <p>21 - Diciembre - 2023.</p>
            </div>
          </DrawerFooter>
        </Container>
      </Drawer>
      <Main open={open}>

      </Main>
    </Box>
  );
}
