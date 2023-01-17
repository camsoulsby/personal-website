import React from 'react'
import { styled, CardMedia, Typography } from '@mui/material'

interface PortfoloioCardProps {
    description?: string,
    url?: string,
    image: string,
    onClick: (event: React.MouseEvent<HTMLDivElement>) => void
        
    }


export const PortfolioCard: React.FC<PortfoloioCardProps> = (props: PortfoloioCardProps) => {
    return (
        <>
        
        <StyledCardMedia {...props}/>
        <Typography variant='h6' align='center' sx={{paddingTop: '10px'}}>{props.description ? props.description : ''}</Typography>
        
        <Typography variant='h6' align='center' sx={{paddingTop: '10px'}}>{props.url ? props.url : ''}</Typography>
        </>
    )
}

const StyledCardMedia = styled(CardMedia)({
    objectPosition: 'bottom',
    backgroundColor: 'white',
    width: '478px',
    height: '300px',
    
    borderRadius: '10px',
    "&:hover": {
       cursor: 'pointer',
      }

})

export default PortfolioCard;