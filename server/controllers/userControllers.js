// import paginatedResults from "../middleware/paginatedUsers.js";

export const getUsers = (req, res) => {
  res.json(res.paginatedResults);
};
