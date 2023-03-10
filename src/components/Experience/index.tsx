import React, { useState } from "react";
import {
  Typography,
  Container,
  Table,
  TableRow,
  TableCell,
  TableBody,
  Box,
  Grid,
  List,
  ListItem,
  SxProps,
} from "@mui/material";
import { Add , Remove } from "@mui/icons-material";

import { rows } from "../../data/experienceData";

type ExperienceProps = {};

export const Experience: React.FunctionComponent<ExperienceProps> = () => {
  const [tableRowsShown, setTableRowsShown] = useState([false, false]);

  const toggleRowShown = (index: number) => {
    setTableRowsShown((prevState) => {
      const newRowsShown = [...prevState];
      newRowsShown[index] = !newRowsShown[index];
      return newRowsShown;
    });
  };

  const contentHiddenStyle: SxProps = {
    backgroundColor: "grey.50",
    color: "text.primary",
    padding: "0",
    maxHeight: "0px",
    transition: "all 0.5s ease",
    verticalAlign: "top",
    border: "none",
    overflow: "hidden",
    opacity: "0",
  };
  const contentHiddenStyleLast: SxProps = {
    backgroundColor: "grey.50",
    color: "text.primary",
    borderBottomLeftRadius: "10px",
    borderBottomRightRadius: "10px",
    padding: "0",
    maxHeight: "0px",
    transition: "all 0.5s ease",
    verticalAlign: "top",
    border: "none",
    overflow: "hidden",
    opacity: "0",
  };

  const contentVisibleStyle: SxProps = {
    backgroundColor: "grey.50",
    color: "text.primary",
    padding: "0",
    maxHeight: "400px",
    transformOrigin: "top",
    transition: "all 1s ease",
    verticalAlign: "top",
    border: "none",
    overflow: "hidden",
  };
  const contentVisibleStyleLast: SxProps = {
    backgroundColor: "grey.50",
    color: "text.primary",
    borderBottomLeftRadius: "10px",
    borderBottomRightRadius: "10px",
    padding: "0",
    maxHeight: "400px",
    transformOrigin: "top",
    transition: "all 1s ease",
    verticalAlign: "top",
    border: "none",
    overflow: "hidden",
  };

  return (
    <div>
      <Container
        maxWidth={false}
        sx={{ backgroundColor: "secondary.main", color: "text.primary" }}
      >
        <Container sx={{ paddingTop: "60px", paddingBottom: "100px" }}>
          <Typography sx={{ typography: ["h4", "h3", "h2"] }} align="center">
            Work Experience
          </Typography>
          <Table
            sx={{
              marginTop: "50px",
              backgroundColor: "grey.50",
              borderRadius: "10px",
              boxShadow: "10px 10px 20px 0px rgba(0,0,0,1)",
            }}
          >
            <TableBody>
              {rows.map((row, index) => (
                <React.Fragment key={index}>
                  <TableRow>
                    <TableCell
                      sx={
                        index == 0
                          ? {
                              padding: "0",
                              border: "none",
                              color: "text.primary",
                            }
                          : {
                              padding: "0",
                              borderBottom: "none",
                              borderTop: "1px solid lightgrey",
                              color: "text.primary",
                            }
                      }
                    >
                      <Grid
                        container
                        spacing={0}
                        sx={{ margin: "0", padding: "0" }}
                      >
                        <Grid item xs={12} sm={2}>
                          <Typography
                            sx={{ fontWeight: "700", padding: "0 0 0 20px" }}
                          >
                            {row.year}
                          </Typography>
                        </Grid>
                        <Grid item xs={12} sm={2}>
                          <Typography
                            sx={{ fontWeight: "400", padding: "0 0 0 20px" }}
                          >
                            {row.company}
                          </Typography>
                        </Grid>
                        <Grid item xs={12} sm={4.5}>
                          <Typography
                            sx={{ fontWeight: "300", padding: "0 0 0 20px" }}
                          >
                            {row.title}
                          </Typography>
                        </Grid>
                        <Grid item xs={12} sm={3.5}>
                          <Typography
                            sx={{ fontStyle: "italic", padding: "0 0 0 20px" }}
                          >
                            {row.location}
                          </Typography>
                        </Grid>
                      </Grid>
                    </TableCell>
                    <TableCell
                      align="right"
                      onClick={() => toggleRowShown(index)}
                      sx={
                        index == 0
                          ? { cursor: "pointer", width: "50px", border: "none", color: "text.primary" }
                          : {
                              cursor: "pointer",
                              width: "50px",
                              borderBottom: "none",
                              borderTop: "1px solid lightgrey",
                              color: "text.primary"
                            }
                      }
                    >
                      {
                        tableRowsShown[index]
                        ? <Remove />
                        : <Add />
                      }
                    </TableCell>
                  </TableRow>

                  <TableRow>
                    <TableCell
                      sx={{ border: "none", padding: "0" }}
                      align="left"
                      colSpan={5}
                    >
                      <Box
                        sx={
                          tableRowsShown[index]
                            ? index == rows.length - 1
                              ? contentVisibleStyleLast
                              : contentVisibleStyle
                            : index == rows.length - 1
                            ? contentHiddenStyleLast
                            : contentHiddenStyle
                        }
                      >
                        <List
                          sx={{
                            paddingTop: "0px",
                            listStyleType: "disc",
                            pl: 4,
                          }}
                        >
                          {row.description.map((item, index) => (
                            <ListItem
                              key={index}
                              sx={{ display: "list-item", paddingLeft: "0" }}
                            >
                              {item}
                            </ListItem>
                          ))}
                        </List>
                      </Box>
                    </TableCell>
                  </TableRow>
                </React.Fragment>
              ))}
            </TableBody>
          </Table>
        </Container>
      </Container>
    </div>
  );
};
