import axios from "axios";
const baseUrl = "/api/persons";

const getAll = () => {
  console.log("people data pulled from DB");
  const request = axios.get(baseUrl);
  return request.then((response) => response.data);
};

const create = (newObject) => {
  console.log("added new person");
  const request = axios.post(baseUrl, newObject);
  return request.then((response) => response.data);
};

const remove = (personId) => {
  console.log("deleted person", personId);
  axios.delete(`${baseUrl}/${personId}`);
  const request = axios.get(baseUrl);
  return request.then((response) => response.data);
};

export default { getAll, create, remove };
