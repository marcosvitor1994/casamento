import axios from "axios";

const ApiBase = axios.create({
  baseURL: "https://api-casamento.herokuapp.com",
});

export default ApiBase;