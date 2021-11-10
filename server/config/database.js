import mongoose from "mongoose";

const CONNECTION_ATLAS =
  "mongodb+srv://ridho:ridho2002@cluster0.k8l0e.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const CONNECTION_LOCAL = "mongodb://localhost:27017/trustIQ";

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(CONNECTION_LOCAL, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });

    const host = conn.connection.host;

    console.log(`connected to ${host}`);
  } catch (error) {
    console.log(error.message);
  }
};

export default connectDB;
