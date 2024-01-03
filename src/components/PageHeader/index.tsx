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
          height: ["150px", "130px", "160px"],
        }}
      >
        <Box
          sx={{
            position: "absolute",
            top: "0",
            left: "0",
            height: "100%",
            width: "100%",
            background: "#222",
          }}
        ></Box>
        <Typography
          sx={{
            position: "absolute",
            top: ["70px", "70px", "70px"],
            left: "50%",
            marginLeft: ["-150px", "-300px", "-400px"],
            height: "auto",
            width: ["300px", "600px", "800px"],
            typography: ["h5", "h4", "h3"],
          }}
          align="center"
          color="primary.contrastText"
        >
          Cam Soulsby Web Development
        </Typography>
      </Container>
    </div>
  );
};
