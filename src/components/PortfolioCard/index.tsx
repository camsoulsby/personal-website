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
        {/* todo: figure out how to make screenshot images scale from top-left of Card (issue #5) */}
        
        <StyledCardMedia {...props} sx={{width:{sm:'480px', xs:'288px'}, height:{sm:'300px', xs:'180px'}}}/>
        <Typography variant='h6' align='center' sx={{paddingTop: '10px'}}>{props.description ? props.description : ''}</Typography>
        
        <Typography variant='h6' align='center' sx={{paddingTop: '10px'}}>{props.url ? props.url : ''}</Typography>
        </>
    )
}



const StyledCardMedia = styled(CardMedia)({
    backgroundColor: 'white',
   
    
    borderRadius: '10px',
    "&:hover": {
       cursor: 'pointer',
      }

})

export default PortfolioCard;