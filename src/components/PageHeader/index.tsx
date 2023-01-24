import { Typography, Container } from "@mui/material";

export const PageHeader: React.FunctionComponent = () => {
  return (
    <div>
    <Container maxWidth={false} sx = {{paddingTop: '100px', height: '800px', background: 'url("../images/remarks.jpg") top center/cover no-repeat'}}>

      <Typography
        sx={{typography: {sm: 'h2', xs: 'h3'}}}
        align="center"
        color="white"
      >
        Cam Soulsby
      </Typography>
      <Typography sx={{typography: {sm: 'h5', xs: 'h6'}, paddingTop: '50px'}} color="white"  align="center">
        Business Operations | Software Development
      </Typography>
      </Container>
    </div>
  );
};
