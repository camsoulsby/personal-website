import React from 'react'
import { styled, CardMedia } from '@mui/material'

export const PortfolioCard = styled(CardMedia)({
    backgroundColor: 'red',
    height: '200px',
    width: '300px',
    borderRadius: '10px',
    "&:hover": {
       cursor: 'pointer',
      }

})

