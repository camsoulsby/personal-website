import { Typography, Container } from "@mui/material";

type PageHeaderProps = {};

export const PageHeader: React.FunctionComponent<PageHeaderProps> = () => {
  return (
    <div>
      <Container
        maxWidth={false}
        sx={{
          paddingTop: "120px",
          height: "360px",
          // background: 'url("../images/paisley.jpg") top center/cover no-repeat',
          // filter: 'brightness(50%)'
          backgroundColor: "primary.main",
        }}
      >
        <Typography
          sx={{ typography: { sm: "h2", xs: "h3" } }}
          align="center"
          color="text.secondary"
        >
          Cam Soulsby
        </Typography>

        <Typography
          sx={{ typography: { sm: "h5", xs: "h6" }, paddingTop: "50px" }}
          color="secondary.main"
          align="center"
        >
          Business Operations | Software Development
        </Typography>
      </Container>
    </div>
  );
};
