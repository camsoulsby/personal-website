import React from 'react';
import { Container, Typography } from '@mui/material';


export const Topnav: React.FunctionComponent= () => {
    return(    
            <Container maxWidth={false} sx={{marginTop: '0px', position: 'fixed', backgroundColor: 'black', color: 'white', height: '50px'}}>
            <Typography>[menu]</Typography>
            </Container>
      
    )
}
