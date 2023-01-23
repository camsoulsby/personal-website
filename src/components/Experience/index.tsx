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
} from "@mui/material";

export const Experience: React.FunctionComponent = () => {
  const [tableRowsShown, setTableRowsShown] = useState([false, false]);

  const toggleRowShown = (index: number) => {
    console.log(`toggling row ${index}`);
    const newRowsShown = [...tableRowsShown];
    newRowsShown[index] = !newRowsShown[index];
    setTableRowsShown(newRowsShown);
  };

  function createData(
    year: string,
    company: string,
    title: string,
    location: string,
    description: string[]
  ) {
    return { year, company, title, location, description };
  }
  // add data
  const rows = [
    createData("Current", "mStable", "Head of Operations", "Remote", [
      "Leading operations for a team of 15 building a Decentralised Finance application",
      "Handling day to day HR, payroll, accounting, and legal tasks for legal entities in Germany, Australia and New Zealand as well as for a Decentralized Autonomous Organization",
      "Navigating a complex legal and regulatory environment in an emerging space",
      "Working with a global and fully remote team and managing the resulting coordination challenges",
    ]),
    createData(
      "2020-2021",
      "NZSki",
      "Guest Services Head of Department",
      "Queenstown, New Zealand",
      [
        "Leading a team of frontline Guest Services staff as well as a Reservations team, responding to a demanding flow of incoming calls and emails",
        "Working closely with other NZSki teams to improve products and systems ",
      ]
    ),
    createData(
      "2015-2019",
      "NZSki",
      "Lift Operations Head of Department",
      "Queenstown, New Zealand",
      [
        "Managing a team of up to 45 Lift Operators and 3 Team Leaders",
        "Recruiting staff, organising and co-ordinating training, assessing qualifications, departmental planning, developing manuals and procedures, creating rosters, purchasing, performance reviews, attending operations meetings and working closely with other departments",
        "Overseeing daily operations to ensure exceptional customer service",
      ]
    ),
    createData(
      "2016-2017",
      "Niseko Village",
      "Lift Operations Team Leader",
      "Hokkaido, Japan",
      [
        "Part of Niseko Village’s first-ever group of native English-speaking Lift Operators",
      ]
    ),
    createData(
      "2014",
      "NZSki",
      "Lift Operations Team Leader",
      "Queenstown, New Zealand",
      ["Helping to lead a team of 35 Lift Operators"]
    ),
    createData(
      "2012-2013",
      "NZSki",
      "Lift Operator",
      "Queenstown, New Zealand",
      ["Working as part of the Lift Operations team"]
    ),
  ];
  const contentHiddenStyle = {
    backgroundColor: "white",
    padding: "0",
    maxHeight: "0px",
    transition: "all 0.5s ease",
    verticalAlign: "top",
    border: "none",
    overflow: "hidden",
    opacity: '0'
  };
  const contentHiddenStyleLast = {
    backgroundColor: "white",
    borderBottomLeftRadius: '10px',
    borderBottomRightRadius: '10px',
    padding: "0",
    maxHeight: "0px",
    transition: "all 0.5s ease",
    verticalAlign: "top",
    border: "none",
    overflow: "hidden",
    opacity: '0'
    
  };

  const contentVisibleStyle = {
    backgroundColor: "white",
    padding: "0",
    maxHeight: "300px",
    transformOrigin: "top",
    transition: "all 1s ease",
    verticalAlign: "top",
    border: "none",
    overflow: "hidden",
  };
  const contentVisibleStyleLast = {
    backgroundColor: "white",
    borderBottomLeftRadius: '10px',
    borderBottomRightRadius: '10px',
    padding: "0",
    maxHeight: "300px",
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
        sx={{ backgroundColor: "white", color: 'black'}}
      >
        <Container sx={{ paddingTop: "150px", paddingBottom: "200px"}}>
          <Typography variant="h2" align="center">
            Work Experience
          </Typography>
          <Table
            sx={{
              marginTop: "50px",
              backgroundColor: "white",
              borderRadius: '10px',
              boxShadow: '2px 2px 8px 0px rgba(0,0,0,1)',
            }}
          >
           
            <TableBody>
              {rows.map((row, index) => (
                <>
                  <TableRow>
                    <TableCell sx={index == 0 ? { padding: "0", border: 'none' } : {padding: "0", borderBottom: 'none', borderTop: '1px solid lightgrey'}}>
                      <Grid
                        container
                        xs={12}
                        spacing={0}
                        sx={{ margin: "0", padding: "0" }}
                      >
                        <Grid item xs={12} sm={2}>
                          <TableCell
                            sx={{ border: "none", padding: "0 0 0 20px" }}
                          >
                            <Typography sx={{ fontWeight: "700" }}>
                              {row.year}
                            </Typography>
                          </TableCell>
                        </Grid>
                        <Grid item xs={12} sm={2}>
                          <TableCell
                            sx={{ border: "none", padding: "0 0 0 20px" }}
                          >
                            <Typography sx={{ fontWeight: "400" }}>
                              {row.company}
                            </Typography>
                          </TableCell>
                        </Grid>
                        <Grid item xs={12} sm={4.5}>
                          <TableCell
                            sx={{ border: "none", padding: "0 0 0 20px" }}
                          >
                            <Typography sx={{ fontWeight: "300" }}>
                              {row.title}
                            </Typography>
                          </TableCell>
                        </Grid>
                        <Grid item xs={12} sm={3.5}>
                          <TableCell
                            sx={{ border: "none", padding: "0 0 0 20px" }}
                          >
                            <Typography sx={{ fontStyle: "italic" }}>
                              {row.location}
                            </Typography>
                          </TableCell>
                        </Grid>
                      </Grid>
                    </TableCell>
                    <TableCell
                      align="right"
                      onClick={() => toggleRowShown(index)}
                      sx={index == 0 ? { cursor: "pointer", width: "50px", border: 'none' } : { cursor: "pointer", width: "50px", borderBottom: 'none', borderTop: '1px solid lightgrey' }}
                    >
                      {
                        <i
                          className={
                            tableRowsShown[index]
                              ? "fas fa-minus"
                              : "fas fa-plus"
                          }
                        />
                      }
                    </TableCell>
                  </TableRow>

                  <TableRow >
                    <TableCell
                      sx={{ border: 'none', padding: "0" }}
                      align="left"
                      colSpan={5}
                    >
                      <Box
                        sx={
                          tableRowsShown[index]
                            ? (index==rows.length-1) ? contentVisibleStyleLast : contentVisibleStyle
                            : (index==rows.length-1) ? contentHiddenStyleLast : contentHiddenStyle
                        }
                      >
                        <Typography variant="body1" sx={{ padding: "10px"}}>
                          <ul>
                            {row.description.map((item, index) => (
                              <li>{item}</li>
                            ))}
                          </ul>
                        </Typography>
                      </Box>
                    </TableCell>
                  </TableRow>
                </>
              ))}
            </TableBody>
          </Table>
        </Container>
      </Container>
    </div>
  );
};
