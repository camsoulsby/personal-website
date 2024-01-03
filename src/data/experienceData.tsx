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
export const rows = [
  createData(
    "Current",
    "RealNZ",
    "Head of Guest Serivces, Whakatipu",
    "Queenstown",
    [
      "Managing four Visitor Centre locations in Queenstown",
      "Managing RealNZ's central Contact Centre and Wholesale Reservations teams",
    ]
  ),
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
  createData("2012-2013", "NZSki", "Lift Operator", "Queenstown, New Zealand", [
    "Working as part of the Lift Operations team",
  ]),
];
