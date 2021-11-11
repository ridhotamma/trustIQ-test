import axios from "axios";
export const request = {};
export const formValidation = {};

formValidation.validate = (name, nip, noTlp, email) => {
  formValidation.error = {
    name: "",
    nip: "",
    noTlp: "",
    email: "",
  };
  if (typeof name !== "string") {
    formValidation.error.name = "harus menggunakan string";
  }

  if (typeof nip !== "number") {
    formValidation.error.nip = "harus menggunakan number";
  }

  if (typeof noTlp !== "number") {
    formValidation.error.noTlp = "harus menggunakan number";
  }

  if (typeof email !== "string") {
    formValidation.error.email = "harus menggunakan string";
  }
};

request.getUsers = async (url, hooks) => {
  const response = await axios.get(url);
  await hooks(response.data);
};

request.getUser = async (url, hooks) => {
  const response = await axios.get(url);
  await hooks(response.data);
};

request.createUser = async (url, data) => {
  await axios.post(url, data);
};

request.updateUser = async (url, data) => {
  await axios.put(url, data);
};

request.deleteUser = async (url, id) => {
  await axios.delete(url, id);
};
