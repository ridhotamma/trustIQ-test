import mongoose from "mongoose";

const UserSchema = mongoose.Schema({
  name: { type: String, required: true },
  NIP: { type: String, required: true },
  no_tlp: { type: String, required: true },
  email: { type: String, required: true },
});

const User = mongoose.model("User", UserSchema);

export default User;
