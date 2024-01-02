import { Typography, Container, Box } from "@mui/material";

type PageHeaderProps = {};

export const PageHeader: React.FunctionComponent<PageHeaderProps> = () => {
  return (
    <div>
      <Container
        maxWidth={false}
        sx={{
          position: "relative",
          paddingTop: "120px",
          height: ["600px", "780px", "600px"],
        }}
      >
        <Box
          sx={{
            position: "absolute",
            top: "0",
            left: "0",
            height: "100%",
            width: "100%",
            background:
              'url("../images/paisley.jpg") top center/cover no-repeat',
            filter: "brightness(40%)",
          }}
        ></Box>
        <Typography
          sx={{
            position: "absolute",
            top: ["220px", "230px", "210px"],
            left: "50%",
            marginLeft: ["-150px", "-300px", "-400px"],
            height: "auto",
            width: ["300px", "600px", "800px"],
            typography: ["h3", "h2", "h1"],
          }}
          align="center"
          color="primary.contrastText"
        >
          Cam Soulsby
        </Typography>
      </Container>
    </div>
  );
};
