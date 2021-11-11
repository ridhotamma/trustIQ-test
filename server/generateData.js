import User from "./models/User.js";
import mongoose from "mongoose";
const db = mongoose.connection;

export const generate = () =>
  db.once("open", async () => {
    const totalUsers = await User.countDocuments().exec();
    if (totalUsers === 0 || totalUsers < 1) {
      console.log("user tidak ada");
      await User.create({
        name: "John Doe",
        NIP: "12345678345",
        no_tlp: "021000012213",
        email: "test1@email.com",
      }),
        await User.create({
          name: "Muhammad Firmansyah",
          NIP: "1234567853",
          no_tlp: "02100001321",
          email: "test2@email.com",
        }),
        await User.create({
          name: "Piyush Agrawal",
          NIP: "12345678543",
          no_tlp: "02100001123",
          email: "test3@email.com",
        }),
        await User.create({
          name: "Ridho Tamma",
          NIP: "123456785656",
          no_tlp: "02100001545",
          email: "test4@email.com",
        }),
        await User.create({
          name: "Reynaldi",
          NIP: "123456786565",
          no_tlp: "0210000115",
          email: "test5@email.com",
        }),
        await User.create({
          name: "Mark Zuckerberg",
          NIP: "12345678789",
          no_tlp: "0210000151",
          email: "test6@email.com",
        }),
        await User.create({
          name: "Brad Traversy",
          NIP: "123456781234",
          no_tlp: "0210000123",
          email: "test7@email.com",
        }),
        await User.create({
          name: "Erlang Haaland",
          NIP: "12345678346",
          no_tlp: "0210000134",
          email: "test8@email.com",
        }),
        await User.create({
          name: "Neymar jr",
          NIP: "123456780987",
          no_tlp: "02100001454",
          email: "test9@email.com",
        }),
        await User.create({
          name: "Harry potter",
          NIP: "1234567845678",
          no_tlp: "0210000166",
          email: "test10@email.com",
        }),
        await User.create({
          name: "Adam Permana",
          NIP: "123456782345",
          no_tlp: "0210000198",
          email: "test11@email.com",
        }),
        await User.create({
          name: "Keenan Aditama",
          NIP: "12345678777",
          no_tlp: "0210000190",
          email: "test12@email.com",
        });
      console.log("user sudah ditambahkan!");
    } else {
      console.log("dummy data sudah ada");
    }
  });
