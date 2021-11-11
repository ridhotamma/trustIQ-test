import User from "../models/User.js";

export const getUsers = (req, res) => {
  res.json(res.paginatedResults);
};

export const addUser = (req, res) => {
  const name = req.body.name;
  const NIP = req.body.NIP;
  const no_tlp = req.body.no_tlp;
  const email = req.body.email;

  const newUser = new User({
    name,
    NIP,
    no_tlp,
    email,
  });

  newUser
    .save()
    .then(() => res.json("User Added!"))
    .catch((err) => res.status(400).json("Error: " + err.message));
};

export const getUser = (req, res) => {
  User.findById(req.params.id)
    .then((user) => res.json(user))
    .catch((err) => res.status(400).json("Error" + err.message));
};

export const deleteUser = (req, res) => {
  User.findByIdAndDelete(req.params.id)
    .then(() => res.json("User Deleted!"))
    .catch((err) => res.status(400).json("Error : " + err.message));
};

export const updateUser = (req, res) => {
  User.findById(req.params.id)
    .then((user) => {
      user.name = req.body.name;
      user.NIP = req.body.NIP;
      user.no_tlp = req.body.no_tlp;
      user.email = req.body.email;

      user
        .save()
        .then(() => res.json("User Updated!"))
        .catch((err) => res.status(400).json("Error : " + err.message));
    })
    .catch((err) => res.status(400).json("Error: " + err.message));
};
