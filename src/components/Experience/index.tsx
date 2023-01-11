import React from "react";
import {
  Typography,
  Container,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from "@mui/material";

export const Experience: React.FunctionComponent = () => {
  const tableHeadStyle1 = {
    color: "secondary.main",
    fontWeight: "700",
    width: "200px",
  };
  const tableHeadStyle2 = {
    color: "secondary.main",
    fontWeight: "700",
    width: "200px",
  };
  const tableHeadStyle3 = {
    color: "secondary.main",
    fontWeight: "700",
    width: "110px",
  };
  const tableHeadStyle4 = { color: "secondary.main", fontWeight: "700" };

  const tableBodyStyle = {
    backgroundColor: "secondary.main",
    border: "1px solid",
    borderColor: "primary.main",
  };

  return (
    <div>
      <Container
        maxWidth={false}
        sx={{ backgroundColor: "primary.main", color: "secondary.main" }}
      >
        <Container sx={{ paddingTop: "150px", paddingBottom: "200px" }}>
          <Typography variant="h2" align="center">
            Work Experience
          </Typography>
          {/* <Table sx= {{marginTop: '50px'}}>
            <TableHead >
              <TableRow >
                <TableCell sx={tableHeadStyle1}>Company</TableCell>
                <TableCell sx={tableHeadStyle2}>Role</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell sx={tableBodyStyle1}>mStable</TableCell>
                <TableCell sx={tableBodyStyle2}>Operations Lead</TableCell>
              </TableRow>
              <TableRow>
                <TableCell sx={tableBodyStyle1}>NZSki</TableCell>
                <TableCell sx={tableBodyStyle2}>Head of Guest Services & Reservations, Queenstown</TableCell>
              </TableRow>
            </TableBody>
          </Table> */}
          <Table sx={{ marginTop: "50px" }}>
            <TableHead>
              <TableRow>
                <TableCell sx={tableHeadStyle1}>Company</TableCell>
                <TableCell sx={tableHeadStyle2}>Role</TableCell>
                <TableCell sx={tableHeadStyle3}>Year</TableCell>
                <TableCell sx={tableHeadStyle4}>Description</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell sx={tableBodyStyle}>mStable</TableCell>
                <TableCell sx={tableBodyStyle}>Head of Operations</TableCell>
                <TableCell sx={tableBodyStyle}>2021-2022</TableCell>
                <TableCell sx={tableBodyStyle}>
                  <ul>
                    <li>
                      Leading operations for a team of 15 building a
                      Decentralised Finance application
                    </li>
                    <li>
                      Handling day to day HR, payroll, accounting, and legal
                      tasks for legal entities in Germany, Australia and New
                      Zealand as well as for a Decentralized Autonomous
                      Organization
                    </li>
                    <li>
                      Navigating a complex legal and regulatory environment in
                      an emerging space
                    </li>
                    <li>
                      Working with a global and fully remote team and managing
                      the resulting coordination challenges
                    </li>
                  </ul>
                </TableCell>
              </TableRow>

              <TableRow>
                <TableCell sx={tableBodyStyle}>NZSki</TableCell>
                <TableCell sx={tableBodyStyle}>
                  Guest Services Head of Department
                </TableCell>
                <TableCell sx={tableBodyStyle}>2020-2021</TableCell>
                <TableCell sx={tableBodyStyle}>
                  <ul>
                    <li>
                      Leading a team of frontline Guest Services staff as well
                      as a Reservations team, responding to a demanding flow of
                      incoming calls and emails
                    </li>
                    <li>
                      Working closely with other NZSki teams to improve products
                      and systems
                    </li>
                  </ul>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell sx={tableBodyStyle}>
                  Niseko Village Ski Area, Hokkaido, Japan
                </TableCell>
                <TableCell sx={tableBodyStyle}>
                  Lift Operations Team Leader
                </TableCell>
                <TableCell sx={tableBodyStyle}>2016-2017</TableCell>
                <TableCell sx={tableBodyStyle}>
                  <ul>
                    <li>
                      Part of Niseko Village's first-ever group of native
                      English-speaking Lift Operators
                    </li>
                  </ul>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell sx={tableBodyStyle}>
                  NZSki - The Remarkables Ski Area
                </TableCell>
                <TableCell sx={tableBodyStyle}>
                  Lift Operations Head of Department
                </TableCell>
                <TableCell sx={tableBodyStyle}>2015-2019</TableCell>
                <TableCell sx={tableBodyStyle}>
                  <ul>
                    <li>
                      Managing a team of up to 45 Lift Operators and 3 Team
                      Leaders
                    </li>
                    <li>
                      Recruiting staff, organizing and coordinating training,
                      assessing qualifications, departmental planning,
                      developing manuals and procedures, creating rosters,
                      purchasing, performance reviews, attending operations
                      meetings and working closely with other departments
                    </li>
                    <li>
                      Overseeing daily operations to ensure exceptional customer
                      service
                    </li>
                  </ul>
                </TableCell>
              </TableRow>

              <TableRow>
                <TableCell sx={tableBodyStyle}>
                  NZSki - The Remarkables Ski Area
                </TableCell>
                <TableCell sx={tableBodyStyle}>
                  Lift Operations Team Leader
                </TableCell>
                <TableCell sx={tableBodyStyle}>2014</TableCell>
                <TableCell sx={tableBodyStyle}>
                  <ul>
                    <li>Helping to lead a team of 35 Lift Operators</li>
                  </ul>
                </TableCell>
              </TableRow>

              <TableRow>
                <TableCell sx={tableBodyStyle}>
                  NZSki - The Remarkables Ski Area
                </TableCell>
                <TableCell sx={tableBodyStyle}>Lift Operator</TableCell>
                <TableCell sx={tableBodyStyle}>2012-2013</TableCell>
                <TableCell sx={tableBodyStyle}>
                  <ul>
                    <li>Working as part of the Lift Operations team</li>
                  </ul>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </Container>
      </Container>
    </div>
  );
};
