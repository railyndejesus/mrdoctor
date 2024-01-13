const express = require("express");

if (process.env.NODE_ENV !== "production") {
  const dotenv = require("dotenv");
  dotenv.config();
}

const PORT = process.env.PORT;

const doctors = [
  {
    id: 1,
    name: "John",
    lastname: "Smith",
    city: "Higüey",
    country: "Dominican Republic",
    skills: ["cardilogy"],
  },
];

const server = express();

server.get("/doctors", (req, res) => {
  res.send(doctors);
});

server.listen(PORT, () => {
  console.log(`Application is running on http://localhost:${PORT}`);
});
