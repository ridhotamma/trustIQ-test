import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import userRoutes from "./routes/userRoutes.js";
import connectDB from "./config/database.js";
import User from "./models/User.js";

const app = express();
const db = mongoose.connection;

// Middleware
app.use(express.json());
app.use(cors());

db.once("open", () => {
  if (User.countDocuments().exec() > 0) return;
  User.create({
    name: "John Doe",
    NIP: "12345678345",
    no_tlp: "021000012213",
    email: "test1@email.com",
  }),
    User.create({
      name: "Muhammad Firmansyah",
      NIP: "1234567853",
      no_tlp: "02100001321",
      email: "test2@email.com",
    }),
    User.create({
      name: "Piyush Agrawal",
      NIP: "12345678543",
      no_tlp: "02100001123",
      email: "test3@email.com",
    }),
    User.create({
      name: "Ridho Tamma",
      NIP: "123456785656",
      no_tlp: "02100001545",
      email: "test4@email.com",
    }),
    User.create({
      name: "Reynaldi",
      NIP: "123456786565",
      no_tlp: "0210000115",
      email: "test5@email.com",
    }),
    User.create({
      name: "Mark Zuckerberg",
      NIP: "12345678789",
      no_tlp: "0210000151",
      email: "test6@email.com",
    }),
    User.create({
      name: "Brad Traversy",
      NIP: "123456781234",
      no_tlp: "0210000123",
      email: "test7@email.com",
    }),
    User.create({
      name: "Erlang Haaland",
      NIP: "12345678346",
      no_tlp: "0210000134",
      email: "test8@email.com",
    }),
    User.create({
      name: "Neymar jr",
      NIP: "123456780987",
      no_tlp: "02100001454",
      email: "test9@email.com",
    }),
    User.create({
      name: "Harry potter",
      NIP: "1234567845678",
      no_tlp: "0210000166",
      email: "test10@email.com",
    }),
    User.create({
      name: "Adam Permana",
      NIP: "123456782345",
      no_tlp: "0210000198",
      email: "test11@email.com",
    }),
    User.create({
      name: "Keenan Aditama",
      NIP: "12345678777",
      no_tlp: "0210000190",
      email: "test12@email.com",
    });
});

const port = 5000 || process.env.PORT;

app.use("/api", userRoutes);

connectDB();
app.listen(port, () => console.log(`running on port : ${port}`));
