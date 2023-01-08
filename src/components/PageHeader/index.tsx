import { Typography, Container } from "@mui/material";

export const PageHeader: React.FunctionComponent = () => {
  return (
    <div>
    <Container maxWidth={false} sx = {{paddingTop: '50px', height: '500px', background: 'linear-gradient(180deg, #000000 3.2%, #3B5885 46.35%, rgba(114, 111, 156, 0.906531) 61.96%, rgba(220, 154, 201, 0.725168) 87.65%, rgba(239, 226, 156, 0.88) 98.9%)'}}>

      <Typography
        variant="h2"
        align="center"
        color="white"
      >
        Cam Soulsby
      </Typography>
      <Typography variant="h5" color="white"  align="center">
        Business Operations | Software Development
      </Typography>
      </Container>
    </div>
  );
};
